import {
	View as NativeView,
	Text as NativeText,
	ScrollView as NativeScrollView,
	TextInput as NativeInput,
	TouchableOpacity as TBO,
	Image as ImageFeild,
	TouchableWithoutFeedback as TouchableWithoutFeedbackNative,
} from "react-native";
import { styled } from "nativewind";

export const View = styled(NativeView);
export const ScrollView = styled(NativeScrollView);
export const Text = styled(NativeText);
export const TextInput = styled(NativeInput);
export const TouchableOpacity = styled(TBO);
export const Image = styled(ImageFeild);
export const TouchableWithoutFeedback = styled(TouchableWithoutFeedbackNative);
