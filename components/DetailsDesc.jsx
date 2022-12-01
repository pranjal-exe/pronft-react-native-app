import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants';
import { EthPrice, NFTTitle } from './SubInfo';

const DetailsDesc = ({ data }) => {
	const [text, setText] = useState(data.description.slice(0, 100));
	const [readMore, setReadMore] = useState(false);
	return (
		<>
			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<NFTTitle
					title={data.name}
					subTitle={data.creator}
					titleSize={SIZES.extraLarge}
					subTitleSize={SIZES.font}
				/>
				<EthPrice price={data.price} />
			</View>

			<View
				style={{
					marginVertical: SIZES.extraLarge,
				}}
			>
				<Text
					style={{
						fontSize: SIZES.font,
						fontFamily: FONTS.semiBold,
						color: COLORS.primary,
					}}
				>
					Description:
				</Text>
				<View
					style={{
						marginTop: SIZES.base,
					}}
				>
					<Text
						style={{
							lineHeight: SIZES.large,
							fontSize: SIZES.small,
							fontFamily: FONTS.regular,
							color: COLORS.secondary,
						}}
					>
						{text}
						{!readMore && `...`}
						<Text
							style={{
								fontSize: SIZES.small,
								fontFamily: FONTS.semiBold,
								color: COLORS.primary,
							}}
							onPress={() => {
								if (readMore) {
									setText(data.description.slice(0, 100));
									setReadMore(false);
								} else {
									setText(data.description);
									setReadMore(true);
								}
							}}
						>
							{readMore ? ` ShowLess` : ` ReadMore`}
						</Text>
					</Text>
				</View>
			</View>
		</>
	);
};

export default DetailsDesc;

const styles = StyleSheet.create({});
