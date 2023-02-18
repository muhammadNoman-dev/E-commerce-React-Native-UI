import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home";
import { HomeStackScreens } from "@config/constants";
import { View } from "@components/StyledComponents";
import Icon from "../components/Icon";
import { ProductScreen } from "../screens/product";

const HomeStack = () => {
	const { Navigator, Screen } = createNativeStackNavigator();
	const Screens = [
		{
			name: HomeStackScreens.Home,
			component: HomeScreen,
		},
		{
			name: HomeStackScreens.Product,
			component: ProductScreen,
		},
	];

	return (
		<Navigator
			initialRouteName={HomeStackScreens.Home}
			screenOptions={{
				headerTitleAlign: "center",
			}}
		>
			{Screens.map(({ name, component }, index) => (
				<Screen
					key={index}
					name={name}
					component={component}
					options={{
						headerRight: () => (
							<View className="flex flex-row items-center justify-evenly ">
								<Icon name="shoppingcart" />
							</View>
						),
					}}
				/>
			))}
		</Navigator>
	);
};

export default HomeStack;
