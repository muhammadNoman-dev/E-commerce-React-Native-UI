import { Text, View } from "@components/StyledComponents";
import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { ImageSourcePropType } from "react-native";

export interface ParamsInterface {
	data: { id: string; name: string; price: string; image: ImageSourcePropType; color: string };
}

const ProductScreen = () => {
	const route: RouteProp<{ params: ParamsInterface }> = useRoute();
	console.log("dataa in prduct", route.params.data);

	return (
		<View className="flex p-3 ">
			<Text>Product Screen</Text>
		</View>
	);
};

export default ProductScreen;
