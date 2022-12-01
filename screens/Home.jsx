import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';
import { useState } from 'react';

const Home = () => {
	const [nftData, setNftData] = useState(NFTData);
	const handleSearch = (value) => {
		if (!value.length) return setNftData(NFTData);
		const filteredData = nftData.filter((item) =>
			item.name.toLowerCase().includes(value.toLowerCase())
		);

		if (filteredData.length) {
			setNftData(filteredData);
		} else {
			setNftData([]);
		}
	};
	return (
		<SafeAreaView style={styles.safeAreaContainer}>
			<FocusedStatusBar backgroundColor={COLORS.primary} />
			<View style={styles.safeAreaContainer}>
				<View styel={styles.nftListContainer}>
					<FlatList
						data={nftData}
						renderItem={({ item }) => <NFTCard data={item} />}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
					/>
					<View style={styles.nftListBackground}>
						<View style={styles.nftListBackgroundUpper} />
						<View style={styles.nftListBackgroundLower} />
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	safeAreaContainer: {
		flex: 1,
	},
	nftListContainer: {
		zIndex: 0,
	},
	nftListBackground: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: -1,
	},
	nftListBackgroundUpper: {
		backgroundColor: COLORS.primary,
		height: 300,
	},
	nftListBackgroundLower: {
		backgroundColor: COLORS.white,
		flex: 1,
	},
});
