import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { TouchableOpacity, View } from "./StyledComponents";

interface Props extends TouchableOpacityProps {
	loading?: boolean;
	className?: string;
	children?: JSX.Element;
}

const AppButton: React.FC<Props> = ({ className, children, loading, ...rest }) => {
	return (
		<TouchableOpacity
			className={`${"flex justify-center items-center flex-row h-10 px-4 py-2 rounded-2"} ${className}`}
			{...rest}
		>
			{loading ? (
				<ActivityIndicator color={"white"} />
			) : (
				<View className="flex items-center justify-center ">{children}</View>
			)}
		</TouchableOpacity>
	);
};

export default AppButton;
