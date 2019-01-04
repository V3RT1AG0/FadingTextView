import React from "react";
import { Text, TextInput, View, KeyboardAvoidingView } from "react-native";
import AnimatedTextView from "./index";

export default class Display extends React.Component {
	constructor() {
		super();
		this.state = {
			examples: ["Birthday..", "Farewell..", "Nightout..", "Trekking.."]
		};
	}

	onChangeText = text => {
		console.log(text);
	};

	render() {
		return (
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginBottom: 17
				}}
			>
				<AnimatedTextView
					examples={this.state.examples}
					onChangeText={this.onChangeText}
					placeholderColor={"black"}
					animatedTextColor={"#9E9E9E"}
					style={{ fontSize: 30 }}
					placeholder={"Name ur day"}
				/>
			</View>
		);
	}
}
