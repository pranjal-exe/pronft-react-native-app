import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { BidButton, LikeButton } from './Button';
import { SubInfo, NFTTitle, EthPrice } from './SubInfo';

const NFTCard = ({ data }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.outerContainer}>
			<View style={styles.imageContainer}>
				<Image
					source={data.image}
					resizeMode='cover'
					style={styles.imageStyle}
				/>
				<LikeButton
					imgUrl={assets.heart}
					top={10}
					right={10}
				/>
			</View>
			<SubInfo />
			<View
				style={{
					padding: SIZES.font,
					width: '100%',
				}}
			>
				<NFTTitle
					title={data.name}
					subTitle={data.creator}
					titleSize={SIZES.large}
					subTitleSize={SIZES.small}
				/>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: SIZES.font,
					}}
				>
					<EthPrice price={data.price} />
					<BidButton
						fontSize={SIZES.font}
						minWidth={120}
						handlePress={() => navigation.navigate('Details', { data })}
					/>
				</View>
			</View>
		</View>
	);
};

export default NFTCard;

const styles = StyleSheet.create({
	outerContainer: {
		backgroundColor: COLORS.white,
		borderRadius: SIZES.font,
		margin: SIZES.base,
		marginBottom: SIZES.extraLarge,
		...SHADOWS.dark,
	},
	imageContainer: {
		height: 250,
		width: '100%',
	},
	imageStyle: {
		borderTopLeftRadius: SIZES.font,
		borderTopRightRadius: SIZES.font,
		height: '100%',
		width: '100%',
	},
});
