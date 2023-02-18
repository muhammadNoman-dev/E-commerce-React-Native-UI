import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home";
import { HomeStackScreens, stackStyle } from "@config/constants";


const HomeStack = () => {
	const { Navigator, Screen } = createNativeStackNavigator();
	const Screens = [
		{
			name: HomeStackScreens.Home,
			component: HomeScreen,
		},
	];

	return (
		<Navigator
			initialRouteName={HomeStackScreens.Home}
			screenOptions={{
				...(stackStyle as NativeStackNavigationOptions),
			}}
		>
			{Screens.map(({ name, component }, index) => (
				<Screen key={index} name={name} component={component}  />
			))}
		</Navigator>
	);
};

export default HomeStack;
