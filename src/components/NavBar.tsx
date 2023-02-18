import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "./StyledComponents";

interface Props {
	categories: { id: number; name: string }[];
}

const NavBar: React.FC<Props> = ({ categories }) => {
	const [active, setActive] = useState(1);
	return (
		<View>
			<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className=" ">
				<View className="flex flex-row px-2 py-3 justify-center items-center space-x-10 mx-2 ">
					{categories?.map(categorie => (
						<TouchableOpacity onPress={() => setActive(categorie.id)} key={categorie.id}>
							<Text>{categorie.name}</Text>
							<View className={`bg-black w-1/2 ${active === categorie.id && "border-b-[2px]"}`} />
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
			{/* <Text>NavBar</Text> */}
		</View>
	);
};

export default NavBar;
