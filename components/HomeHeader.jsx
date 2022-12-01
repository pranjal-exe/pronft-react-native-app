import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { assets, COLORS, FONTS, SIZES } from '../constants';

const HomeHeader = ({ onSearch }) => {
	return (
		<View
			style={{
				backgroundColor: COLORS.primary,
				padding: SIZES.font,
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Image
						source={assets.mylogo}
						resizeMode='contain'
						style={{
							width: 35,
							height: 35,
						}}
					/>
					<Text
						style={{
							color: '#2484c6',
							marginLeft: 8,
							fontSize: SIZES.large + 5,
							fontFamily: FONTS.bold,
						}}
					>
						Pro
					</Text>
					<Text
						style={{
							color: 'rgba(255,255,255,0.94)',
							fontSize: SIZES.large + 5,
							fontFamily: FONTS.bold,
						}}
					>
						NFT
					</Text>
				</View>
				<View
					style={{
						height: 40,
						width: 40,
					}}
				>
					<Image
						source={assets.person01}
						resizeMode='contain'
						style={{
							width: '100%',
							height: '100%',
						}}
					/>
					<Image
						source={assets.badge}
						resizeMode='contain'
						style={{
							height: 15,
							width: 15,
							position: 'absolute',
							bottom: 0,
							right: 0,
						}}
					/>
				</View>
			</View>
			<View
				style={{
					marginVertical: SIZES.font,
				}}
			>
				<Text
					style={{
						fontFamily: FONTS.regular,
						fontSize: SIZES.medium,
						color: COLORS.white,
					}}
				>
					Hello, Vector 👋
				</Text>
				<Text
					style={{
						fontFamily: FONTS.semiBold,
						fontSize: SIZES.large,
						color: COLORS.white,
						marginTop: SIZES.base / 2,
					}}
				>
					Let's find a masterpiece
				</Text>
			</View>

			<View
				style={{
					marginTop: SIZES.base,
				}}
			>
				<View
					style={{
						width: '100%',
						flexDirection: 'row',
						alignItems: 'center',
						paddingHorizontal: SIZES.font,
						paddingVertical: SIZES.small - 2,
						borderRadius: SIZES.font,
						backgroundColor: COLORS.gray,
					}}
				>
					<Image
						source={assets.search}
						resizeMode='contain'
						style={{
							width: 20,
							height: 20,
							marginRight: SIZES.base,
						}}
					/>
					<TextInput
						placeholder="Search NFT's"
						style={{
							flex: 1,
							paddingLeft: SIZES.base,
							borderLeftWidth: 1,
							borderStyle: 'solid',
							borderColor: COLORS.secondary,
							color: COLORS.white,
						}}
						placeholderTextColor={COLORS.white}
						onChangeText={onSearch}
					/>
				</View>
			</View>
		</View>
	);
};

export default HomeHeader;

const styles = StyleSheet.create({});
