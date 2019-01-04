import React from "react";
import {
	View,
	Text,
	Animated,
	Easing,
	TextInput,
	TouchableHighlight
} from "react-native";

export default class VideoScreen extends React.Component {
	constructor(props) {
		super(props);
		this.animatableValue = new Animated.Value(0);
	}

	state = {
		index: 0,
		animating: true
	};

	componentDidMount() {
		this.startFadeAnimation();
	}

	startFadeAnimation = () => {
		this.animatableValue.setValue(0);
		Animated.timing(this.animatableValue, {
			toValue: 1,
			duration: 3000,
			easing: Easing.linear,
			useNativeDriver: true
		}).start(animation => {
			this.setState({
				index:
					this.state.index < this.props.examples.length - 1
						? this.state.index + 1
						: 0
			});
			animation.finished
				? this.startFadeAnimation()
				: this.animatableValue.setValue(0.5);
			//setState index to some empty index
		});
	};

	_onPressButton = () => {
		this.animatableValue.stopAnimation();
		this.setState({ animating: false });
	};

	render() {
		console.log(this.props, "render");
		const TextOpacity = this.animatableValue.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [0, 1, 0]
		});

		const { examples, animatedTextColor, placeholderColor } = this.props;
		const { index, animating } = this.state;
		const defaultValue = animating ? examples[index] : "";
		const fontColor = animating ? animatedTextColor : placeholderColor;

		return (
			<View
				style={{
					flex: 6,
					justifyContent: "center"
				}}
			>
				<Animated.View
					style={{
						opacity: TextOpacity
					}}
				>
					<TextInput
						style={{
							...{
								height: 50,
								fontSize: 30,
								paddingBottom: 0,
								color: fontColor
							},
							...this.props.style
						}}
						spellCheck={false}
						autocorrect={false}
						multiline={false}
						clearTextOnFocus
						defaultValue={defaultValue}
						onFocus={this._onPressButton}
						underlineColorAndroid="transparent"
						onChangeText={this.props.onChangeText}
						placeholder={this.props.placeholder}
					/>
				</Animated.View>
			</View>
		);
	}
}
