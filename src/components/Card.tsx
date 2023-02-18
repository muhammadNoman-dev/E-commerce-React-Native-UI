import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { Text, View } from "./StyledComponents";

interface Props {
	image: ImageSourcePropType;
	name: string;
	price: string;
}

const Card: React.FC<Props> = ({ image, name, price }) => {
	return (
		<View className="w-fit flex flex-col items-start">
			<View className="flex p-3 items-center bg-blue-500 rounded-6 ">
				<Image
					resizeMode={"contain"}
					style={{
						height: 120,
						width: 148,
					}}
					source={image}
				/>
			</View>
			<Text className="">{name}</Text>
			<Text className="font-bold  ">$ {price}</Text>
		</View>
	);
};

export default Card;
