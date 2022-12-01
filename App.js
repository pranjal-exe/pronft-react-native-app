import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { lightTheme } from './Theme';
import Home from './screens/Home';
import Details from './screens/Details';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

const App = () => {
	const [loaded] = useFonts({
		InterBold: require('./assets/fonts/Inter-Bold.ttf'),
		InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
		InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
		InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
		InterLight: require('./assets/fonts/Inter-Light.ttf'),
	});

	if (!loaded) return null;

	return (
		<NavigationContainer theme={lightTheme}>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen
					name='Home'
					component={Home}
				/>
				<Stack.Screen
					name='Details'
					component={Details}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
