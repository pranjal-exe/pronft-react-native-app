import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const FocusedStatusBar = (props) => {
	const isStatusBarFocused = useIsFocused();
	return isStatusBarFocused ? (
		<StatusBar
			animated={true}
			{...props}
		/>
	) : null;
};

export default FocusedStatusBar;
