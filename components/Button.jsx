import { Image, Text, TouchableOpacity } from 'react-native';
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants';

export const LikeButton = ({ imgUrl, handlePress, ...props }) => {
	return (
		<TouchableOpacity
			style={{
				position: 'absolute',
				height: 40,
				width: 40,
				backgroundColor: COLORS.white,
				borderRadius: SIZES.extraLarge,
				alignItems: 'center',
				justifyContent: 'center',
				...SHADOWS.light,
				...props
			}}
			onPress={handlePress}
		>
			<Image
				source={imgUrl}
				resizeMode='contain'
				style={{
					height: '70%',
					width: '70%',
				}}
			/>
		</TouchableOpacity>
	);
};

export const BidButton = ({ minWidth,fontSize, handlePress, ...props }) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: COLORS.primary,
				borderRadius: SIZES.extraLarge,
				padding: SIZES.small,
				minWidth: minWidth,
				...props
			}}
			onPress={handlePress}
		>
			<Text
				style={{
					fontFamily: FONTS.semiBold,
					fontSize: fontSize,
					textAlign: 'center',
					color: COLORS.white,
				}}
			>
				Place a bid
			</Text>
		</TouchableOpacity>
	);
};
