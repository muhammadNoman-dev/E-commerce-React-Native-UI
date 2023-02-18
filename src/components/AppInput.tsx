import React from "react";
import { TextInputProps } from "react-native";
import { View, TextInput } from "./StyledComponents";
import Icon, { IconProps } from "./Icon";

interface InputProps extends TextInputProps {
	className?: string;
	icon?: IconProps;
}

const AppInput: React.FC<InputProps> = ({ className = "", icon, ...rest }) => {
	return (
		<View className={`w-full flex ${className}`}>
			<View className="flex flex-row items-center justify-between  w-full border-secondary-dark border-0.25 px-3 py-2 rounded-2 ">
				<TextInput selectionColor={"#f00"} className=" text-lg w-90p" {...rest} />
				{icon && <Icon {...icon} />}
			</View>
		</View>
	);
};

export default AppInput;
