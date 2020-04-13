## Demo

![Demo FadingTextView](https://lh3.googleusercontent.com/gUQ-li1g6sQrXA6M5ZkvKjSgnpL8UOAImqB4cYEkcFk2SMwMloO-xObM2PcUw-5yCIThMGAPPFccr0ZlwSXyi6yrbMs6VLiYfbQ99DMJ8qShWlTYEPI8YNBTpqm2vdDwTZg3uc327O0=w392-h696-no)

## Installation
1. Run `npm i react-native-fading-textview --save`
2. `import AnimatedTextView from 'react-native-fading-textview'`


## Basic usage

```javascript
this.state.examples = ["Birthday..", "Farewell..", "Nightout..", "Trekking.."];
<AnimatedTextView
examples={this.state.examples}
onChangeText={this.onChangeText}
placeholderColor={"black"}
animatedTextColor={"green"}
style={{ fontSize: 30 }}
placeholder={"Name ur day"}
/>
```
 


