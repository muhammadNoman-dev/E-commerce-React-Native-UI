import AppButton from "@components/AppButton";
import ColorButton from "@components/ColorButton";
import Icon from "@components/Icon";
import { Image, Text, TouchableOpacity, View } from "@components/StyledComponents";
import { colors } from "@config/constants";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { ImageSourcePropType } from "react-native";

export interface ParamsInterface {
	data: { id: string; name: string; description: string; price: string; image: ImageSourcePropType; color: string };
}

const ProductScreen = () => {
	const route: RouteProp<{ params: ParamsInterface }> = useRoute();

	const [selectedColor, setSelectedColor] = useState(1);

	const [counter, setCounter] = useState(0);

	return (
		<View className={`h-full ${route.params.data.color}`}>
			<View className=" flex flex-col justify-between px-6 py-4 h-1/3 ">
				<View>
					<Text className="text-xs text-white"> {route.params.data.description}</Text>
					<Text className="text-xl font-bold text-white">{route.params.data.name}</Text>
				</View>
				<View className="absolute bottom-[-35%] right-[10%] z-10 ">
					<Image className="h-48 w-44 " resizeMode={"contain"} source={route.params.data.image} />
				</View>
				<View>
					<Text className="text-xs text-white">Price</Text>
					<Text className="text-xl font-bold text-white">{`$ ${route.params.data.price}`}</Text>
				</View>
			</View>
			<View className=" flex-1 bg-white rounded-t-10 px-6 pt-20 flex flex-col justify-evenly">
				<View className="flex flex-row justify-start ">
					<View className="w-1/2 flex">
						<Text className="text-sm">Color</Text>
						<View className="flex flex-row pt-1 space-x-2">
							{colors.map(item => (
								<ColorButton
									key={item.id}
									color={item}
									setSelectedColor={setSelectedColor}
									selected={selectedColor}
								/>
							))}
						</View>
					</View>
					<View>
						<Text className="text-sm">Size</Text>
						<Text className="font-bold">12 cm</Text>
					</View>
				</View>
				<View className="py-10">
					<Text className="text-gray-600">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veniam doloremque velit
						saepe, tempore minima sit earum quod sapiente accusamus iusto libero voluptas necessitatibus
						numquam aspernatur consequuntur ratione in molestiae.
					</Text>
				</View>
				<View className="flex flex-row justify-between">
					<View className="lex flex-row space-x-3 items-center justify-center border-[1px] p-1 rounded-full border-gray-400 ">
						<TouchableOpacity
							onPress={() => {
								counter > 0 && setCounter(counter - 1);
							}}
						>
							<Icon name="minusCircle" color="red" size={22} />
						</TouchableOpacity>
						<Text className=" ">{counter}</Text>
						<TouchableOpacity onPress={() => setCounter(counter + 1)}>
							<Icon name="addCircle" color="green" size={22} />
						</TouchableOpacity>
					</View>
					<Icon name="favorite" color="red" size={22} />
				</View>
				<AppButton className={`${route.params.data.color}`}>
					<View className="flex flex-row ">
						<Text className="mr-3 text-white text-3.5 uppercase">Buy Now</Text>
						<Icon name="shoppingcart" color="white" size={18} />
					</View>
				</AppButton>
			</View>
		</View>
	);
};

export default ProductScreen;
