module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["module:metro-react-native-babel-preset", "babel-preset-expo"],
		plugins: [
			"nativewind/babel",
			[
				"module-resolver",
				{
					extensions: [".ios.js", ".android.js", ".js", "slice.ts", ".ts", ".tsx", ".json"],
					alias: {
						"@components": "./src/components",
						"@config": "./src/config",
						"@hooks": "./src/hooks",
						"@pages": "./src/pages",
						"@services": "./src/services",
						"@store": "./src/store",
						"@types": "./src/types",
					},
				},
			],
			[
				"module:react-native-dotenv",
				{
					envName: "APP_ENV",
					moduleName: "@env",
					path: ".env",
				},
			],
		],
	};
};
