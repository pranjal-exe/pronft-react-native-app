import { Text, View, Image } from 'react-native';
import { EthPrice } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsBid = ({ bids }) => {
	return (
		<View
			style={{
        width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
        paddingHorizontal: SIZES.small * 1.6,
        marginVertical: SIZES.base
			}}
		>
			<Image
				source={bids.image}
				resizeMode='contain'
				style={{
					height: 48,
					width: 48,
				}}
			/>
			<View>
				<Text
					style={{
						fontSize: SIZES.small,
						fontFamily: FONTS.semiBold,
						color: COLORS.primary,
					}}
				>
					Bid placed by {bids.name}
				</Text>
				<Text
					style={{
						fontSize: SIZES.small - 2,
						fontFamily: FONTS.regular,
						color: COLORS.secondary,
						marginTop: 3,
					}}
				>
					{bids.date}
				</Text>
			</View>

			<EthPrice price={bids.price} />
		</View>
	);
};

export default DetailsBid;
