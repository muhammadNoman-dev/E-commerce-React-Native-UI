import { View, Text, Card, ScrollView } from "@components/index";
import React from "react";

const HomeScreen: React.FC = () => {
	const images = [
		require("../../../assets/images/bag_1.png"),
		require("../../../assets/images/bag_2.png"),
		require("../../../assets/images/bag_3.png"),
		require("../../../assets/images/bag_4.png"),
		require("../../../assets/images/bag_5.png"),
		require("../../../assets/images/bag_6.png"),
		require("../../../assets/images/bag_1.png"),
		require("../../../assets/images/bag_2.png"),
		require("../../../assets/images/bag_3.png"),
	];

	return (
		<View className="py-2">
			<Text className="font-bold text-lg px-4 py-1">Women</Text>
			<ScrollView className="b">
				<View className="flex-row flex-wrap px-4">
					{images.map((image, index) => (
						<View className="m-1">
							<Card key={index} image={image} name={`Bag ${index + 1} `} price={"100"} />
						</View>
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
