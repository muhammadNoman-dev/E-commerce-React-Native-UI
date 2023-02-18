import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageSourcePropType } from "react-native";
import { Text, TouchableWithoutFeedback, View, Image } from "./StyledComponents";

interface Props {
	data: { id: string; name: string; description: string; price: string; image: ImageSourcePropType; color: string };
}

const Card: React.FC<Props> = ({ data }) => {
	const navigation = useNavigation();

	return (
		<TouchableWithoutFeedback onPress={() => navigation.navigate("Product" as never, { data: data } as never)}>
			<View className="w-fit flex flex-col">
				<View className={`${data.color} flex p-3 items-center rounded-6 `}>
					<Image className="h-28 w-32 " resizeMode={"contain"} source={data.image} />
				</View>
				<Text className="">{data.name}</Text>
				<Text className="font-bold  ">$ {data.price}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default Card;
