import React, { useState } from 'react';
import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
KeyboardAvoidingView,
useColorScheme,
View,
TextInput,
TouchableOpacity,
} from 'react-native';
import {
Colors,
DebugInstructions,
Header,
LearnMoreLinks,
ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyprofileDisplayController from './MyprofileDisplayController'
 
export default class  LoginBlock  extends MyprofileDisplayController {

 onPressLogin = () => {
    this.props.navigation.navigate("Myprofile")
// Do something about login operation
};

render()
{
return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff",}}>
    
  <View style={styles.container}>
<Text style={styles.title}> Login</Text>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Email"
placeholderTextColor="#003f5c"
value={this.state.email}
onChangeText={text => this.setState({email:text})}/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Password"
value={this.state.password}

placeholderTextColor="#003f5c"
onChangeText={text => this.setState({password:text})}/>
</View>
<TouchableOpacity
// onPress = {onPressForgotPassword}
>
<Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {this.onPressLogin}
style={styles.loginBtn}>
<Text style={styles.loginText}>LOGIN </Text>
</TouchableOpacity>
<TouchableOpacity
// onPress = {onPressSignUp}
>
<Text style={styles.forgotAndSignUpText}>Signup</Text>
</TouchableOpacity>
</View>
</SafeAreaView>
);
}
}
const styles = StyleSheet.create({
container: {
    height:"100%",
backgroundColor: 'white',
alignItems: 'center',
justifyContent: 'center',
},
title:{
fontWeight: "bold",
fontSize:50,
color:"#4C99A0",
marginBottom: 50,
},
inputView:{
width:"85%",
backgroundColor:"#F8FAFC",
borderRadius:10,
borderColor:'#E9EBEE',
borderWidth:1,
height:50,
marginBottom:20,
justifyContent:"center",
padding:20
},
inputText:{
height:50,
color:"black"
},
forgotAndSignUpText:{
color:"black",
fontSize:11
},
loginBtn:{
width:"85%",
backgroundColor:"#4C99A0",
borderRadius:10,
height:50,
alignItems:"center",
justifyContent:"center",
marginTop:40,
marginBottom:10
},
loginText:{
    color:"white"
}
});
