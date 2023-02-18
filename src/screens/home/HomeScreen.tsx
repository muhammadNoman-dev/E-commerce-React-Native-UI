import { View, Text, Card, ScrollView, NavBar } from "@components/index";
import { categories, images } from "@config/constants";
import React from "react";

const HomeScreen: React.FC = () => {
	return (
		<View className="h-full py-1">
			<Text className="font-bold text-lg px-4 py-1">Women</Text>
			<NavBar categories={categories} />
			<ScrollView className="">
				<View className="flex-row flex-wrap px-4 justify-center ">
					{images.map(image => (
						<View className="mx-2 py-2" key={image.id}>
							<Card data={image} />
						</View>
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
