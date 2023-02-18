import React from "react";
import { FontAwesome, AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

export type IconName =
	| "back"
	| "circle"
	| "circleO"
	| "add"
	| "shoppingcart"
	| "addCircle"
	| "minusCircle"
	| "favorite";

export interface IconProps {
	name?: IconName;
	size?: number;
	color?: string;
	className?: string;
	onPress?: () => void;
	disabled?: boolean;
	style?: React.CSSProperties;
}

const IconMap: { [key in IconName]: { component: any; icon: string; className?: string } } = {
	circle: { component: FontAwesome, icon: "circle" },
	circleO: { component: FontAwesome, icon: "circle-o" },
	shoppingcart: { component: AntDesign, icon: "shoppingcart" },
	addCircle: { component: AntDesign, icon: "pluscircleo" },
	minusCircle: { component: AntDesign, icon: "minuscircleo" },
	back: { component: Ionicons, icon: "chevron-back-outline" },
	add: { component: Ionicons, icon: "add-circle" },
	favorite: { component: MaterialIcons, icon: "favorite" },
};

const Icon: React.FC<IconProps> = ({
	color = "#000",
	name = "home",
	size = 24,
	className,
	onPress,
	disabled,
	style,
}) => {
	const { component: Component, icon } = IconMap[name];
	return (
		<Component
			name={icon}
			size={size}
			color={color}
			className={className}
			onPress={onPress}
			disabled={disabled}
			style={style}
		/>
	);
};

export default Icon;
