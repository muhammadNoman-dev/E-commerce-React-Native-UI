import React from "react";
import { Modal } from "react-native";
import AppButton from "./AppButton";
import Icon from "./Icon";
import { Text, View } from "./StyledComponents";

interface Props {
	open: boolean;
	setOpen: (open: boolean) => void;
	description: string;
	onSubmit: () => void;
	onCancel: () => void;
	loading: boolean;
}

const AlertModal: React.FC<Props> = ({ open, setOpen, description, onSubmit, onCancel, loading }) => {
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={open}
			onRequestClose={() => {
				onCancel();
				setOpen(!open);
			}}
		>
			<View className="flex-1 items-center justify-center bg-black/50">
				<View className=" bg-white h-60 w-80 rounded-md ">
					<View className="flex h-full items-center justify-between p-6">
						<Icon name="alert" color="#C61919" size={64} />
						<Text className=" text-4 text-center mb-3">{description} </Text>
						<View className=" flex-row items-end space-x-4">
							<AppButton className="px-3 py-2 rounded-md bg-gray-300 " onPress={onCancel}>
								<Text className="text-4 text-black ">Cancel</Text>
							</AppButton>
							<AppButton className="px-3 py-2 rounded-md bg-danger " loading={loading} onPress={onSubmit}>
								<Text className="text-4 text-white ">Reject</Text>
							</AppButton>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default AlertModal;
