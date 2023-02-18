import { View, Text, Card, ScrollView, NavBar } from "@components/index";
import React from "react";

const HomeScreen: React.FC = () => {
	const images = [
		{ id: "1", name: "Bag 2", price: "245", image: require("../../../assets/images/bag_2.png"), color: "#f29333" },
		{
			id: "2",
			name: "Blue Bag",
			price: "888",
			image: require("../../../assets/images/bag_1.png"),
			color: "#54a3e8",
		},
		{ id: "3", name: "Bag 3", price: "155", image: require("../../../assets/images/bag_3.png"), color: "#575454" },
		{ id: "4", name: "Bag 5", price: "23", image: require("../../../assets/images/bag_5.png"), color: "#e66565" },
		{ id: "5", name: "Bag 4", price: "567", image: require("../../../assets/images/bag_4.png"), color: "#f29333" },
		{ id: "6", name: "Bag 7", price: "23", image: require("../../../assets/images/bag_1.png"), color: "#54a3e8" },
		{ id: "7", name: "Bag 6", price: "13", image: require("../../../assets/images/bag_6.png"), color: "#575454" },
		{ id: "8", name: "Bag 8", price: "324", image: require("../../../assets/images/bag_2.png"), color: "#f29333" },
		{ id: "9", name: "Bag 9", price: "100", image: require("../../../assets/images/bag_3.png"), color: "#575454" },
	];

	const categories = [
		{ id: 1, name: "Hand Bag" },
		{ id: 2, name: "Jewellery" },
		{ id: 3, name: "Foot Wear" },
		{ id: 4, name: "Dresses" },
		{ id: 5, name: "Shirts" },
	];

	return (
		<View className="h-full py-1">
			<Text className="font-bold text-lg px-4 py-1">Women</Text>
			<NavBar categories={categories} />
			<ScrollView className="">
				<View className="flex-row flex-wrap px-4">
					{images.map(image => (
						<Card data={image} key={image.id} />
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
