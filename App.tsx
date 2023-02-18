import Root from "./src/Root";
import * as NavigationBar from "expo-navigation-bar";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
	NavigationBar.setVisibilityAsync("hidden");
	return (
			<RootSiblingParent>
				<Root />
			</RootSiblingParent>
	);
}
