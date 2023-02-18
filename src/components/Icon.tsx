import React from "react";
import {
	Entypo,
	FontAwesome,
	FontAwesome5,
	EvilIcons,
	AntDesign,
	MaterialCommunityIcons,
	Feather,
	Ionicons,
	MaterialIcons,
} from "@expo/vector-icons";

export type IconName =
	| "home"
	| "calendar"
	| "user"
	| "spinner"
	| "login"
	| "location"
	| "closecircle"
	| "checkcircle"
	| "show"
	| "hide"
	| "alert"
	| "loading"
	| "back"
	| "logout"
	| "camera"
	| "circle"
	| "qrScan"
	| "circleO"
	| "inventory"
	| "add"
	| "shoppingcart"
	| "clock";

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
	home: { component: Entypo, icon: "home" },
	location: { component: EvilIcons, icon: "location" },
	calendar: { component: FontAwesome, icon: "calendar" },
	circle: { component: FontAwesome, icon: "circle" },
	circleO: { component: FontAwesome, icon: "circle-o" },
	user: { component: FontAwesome5, icon: "user-alt" },
	spinner: { component: EvilIcons, icon: "spinner-3" },
	login: { component: MaterialCommunityIcons, icon: "login" },
	logout: { component: MaterialCommunityIcons, icon: "logout" },
	qrScan: { component: MaterialCommunityIcons, icon: "qrcode-scan" },
	loading: { component: MaterialCommunityIcons, icon: "loading" },
	closecircle: { component: AntDesign, icon: "closecircle" },
	checkcircle: { component: AntDesign, icon: "checkcircle" },
	shoppingcart: { component: AntDesign, icon: "shoppingcart" },
	show: { component: Feather, icon: "eye" },
	hide: { component: Feather, icon: "eye-off" },
	clock: { component: Feather, icon: "clock" },
	alert: { component: Ionicons, icon: "alert-circle-outline" },
	back: { component: Ionicons, icon: "chevron-back-outline" },
	add: { component: Ionicons, icon: "add-circle" },
	camera: { component: MaterialIcons, icon: "camera" },
	inventory: { component: MaterialIcons, icon: "inventory" },
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
