import {
	FlatList,
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import {
	FocusedStatusBar,
	LikeButton,
	BidButton,
	SubInfo,
	DetailsBid,
	DetailsDesc,
} from '../components';
import { COLORS, SHADOWS, FONTS, SIZES, assets } from '../constants';

const DetailsHeader = ({ data, navigation }) => (
	<View
		style={{
			width: '100%',
			height: 373,
		}}
	>
		<Image
			source={data.image}
			resizeMode='cover'
			style={{
				height: '100%',
				width: '100%',
			}}
		/>

		<LikeButton
			imgUrl={assets.left}
			handlePress={() => navigation.goBack()}
			top={StatusBar.currentHeight + 10}
			left={15}
		/>

		<LikeButton
			imgUrl={assets.heart}
			top={StatusBar.currentHeight + 10}
			right={15}
		/>
	</View>
);

const Details = ({ route, navigation }) => {
	const { data } = route.params;
	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<FocusedStatusBar
				barStyle='dark-content'
				backgroundColor='transparent'
				translucent={true}
			/>
			<View
				style={{
					width: '100%',
					position: 'absolute',
					bottom: 0,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'rgba(255,255,255,0.5)',
					zIndex: 1,
					paddingVertical: SIZES.font,
				}}
			>
				<BidButton
					fontSize={SIZES.large}
					minWidth={170}
					{...SHADOWS.dark}
				/>
			</View>
			<FlatList
				data={data.bids}
				renderItem={({ item, index }) => <DetailsBid bids={item} />}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingBottom: SIZES.large * 4,
				}}
				ListHeaderComponent={() => (
					<>
						<DetailsHeader
							data={data}
							navigation={navigation}
						/>
						<SubInfo />
						<View
							style={{
								padding: SIZES.font,
							}}
						>
							<DetailsDesc data={data} />
							{data.bids.length > 0 && (
								<Text
									style={{
										fontSize: SIZES.font,
										fontFamily: FONTS.semiBold,
										color: COLORS.primary,
									}}
								>
									Current Bid:
								</Text>
							)}
						</View>
					</>
				)}
			/>
		</SafeAreaView>
	);
};

export default Details;

const styles = StyleSheet.create({});
