import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { Text, TouchableWithoutFeedback, View } from "./StyledComponents";

interface Props {
	data: { id: string; name: string; price: string; image: ImageSourcePropType; color: string };
}

const Card: React.FC<Props> = ({ data }) => {
	const navigation = useNavigation();

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				navigation.navigate("Product" as never, { data: data } as never);
				console.log(`${data.id}`);
			}}
		>
			<View className="w-fit flex flex-col items-start m-1">
				<View className={`bg-[${data.color}] flex p-3 items-center rounded-6 `}>
					<Image
						resizeMode={"contain"}
						style={{
							height: 120,
							width: 148,
						}}
						source={data.image}
					/>
				</View>
				<Text className="">{data.name}</Text>
				<Text className="font-bold  ">$ {data.price}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default Card;
