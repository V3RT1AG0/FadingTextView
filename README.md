Installation
1.Run npm i react-native-fading-textview --save
2.import AnimatedTextView from 'react-native-fading-textview'

Basic usage
this.state.examples = ["Birthday..", "Farewell..", "Nightout..", "Trekking.."];
<AnimatedTextView
examples={this.state.examples}
onChangeText={this.onChangeText}
placeholderColor={"black"}
animatedTextColor={"green"}
style={{ fontSize: 30 }}
placeholder={"Name ur day"}
/>