import axios, { AxiosError, AxiosResponse } from "axios";
import Toast from "react-native-root-toast";


axios.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error: AxiosError) => {
		if (error) {
			const { response: { data: { message } } = error.message } = error as any;

			Array.isArray(message)
				? message.forEach((item: any) => Toast.show(item, { backgroundColor: "#C61919", shadow: false }))
				: Toast.show(message, { backgroundColor: "#C61919", shadow: false });
		}
		return Promise.reject(error);
	}
);

export const setAuthToken = (token: string) => {
	axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
