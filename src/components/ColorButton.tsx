import React, { Dispatch, SetStateAction } from "react";
import { TouchableOpacity, View } from "./StyledComponents";

interface Props {
	color: { id: number; color: string };
	selected: number;
	setSelectedColor: Dispatch<SetStateAction<number>>;
}

const ColorButton: React.FC<Props> = ({ color, selected, setSelectedColor }) => {
	return (
		<TouchableOpacity className="px-1" onPress={() => setSelectedColor(color.id)}>
			<View
				className={`w-4 h-4 ${
					color.id === selected && "bg-gray-500/30"
				}  rounded-full flex items-center justify-center`}
			>
				<View className={`w-3 h-3 ${color.color} rounded-full`} />
			</View>
		</TouchableOpacity>
	);
};

export default ColorButton;
