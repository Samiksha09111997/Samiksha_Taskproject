import React, { useState } from 'react';
import { Avatar } from 'react-native-elements';

import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
Image,
FlatList,
useColorScheme,
View,
KeyboardAvoidingView,
TextInput,
TouchableOpacity,
Modal,
Alert
} from 'react-native';

import MyprofileDisplayController from './MyprofileDisplayController'
const startYear=1882;
const endYear = 2025
const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index).reverse();

export default class  Myprofile  extends MyprofileDisplayController {

 onPressSaveimage = () => {
  this.setState({
    editModel:false
  })
// Do something about login operation
};
onPressSavedata = () =>
{
  Alert.alert("Data updated succusefully")

}
renderList1 = (item) =>{
return (
    <TouchableOpacity style={{marginTop:20,paddingHorizontal:5}}
    onPress={() =>
       this.setState({setSelectedAvatar:item.source,
    profileImage:item.source,editModel:false})
       
      }
      
    >
    <Image
    style={{width:80,height:80}}
  rounded
  source={item.source}
/>
</TouchableOpacity>
)

}
 renderSearchYear = ({ item, index }) => {
    console.log(item,"year")
    return (
      <TouchableOpacity
        onPress={() => {
          this.selectYear(item)
        }}
        style={{alignItems:'flex-end',}}
      >
        <Text style={styles.countryFilterList}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
settingsViewModal = () => {
    return (
      <Modal
      transparent={true}
    style={{opacity:5}}
      animationType={"slide"}
      visible={this.state.settingsViewModal}
    >
       <TouchableOpacity
          testID="addParticipant2"
          onPress={() =>
            this.setState({ settingsViewModal: false ,editModel:true})
          } style={{ flex: 1 }}>
        </TouchableOpacity>
     
        <View style={styles.modalContainer}>
       

          <View style={styles.modalListContainer}>
          <View style={[styles.modalHeader1]}>

<View style={this.modelView}></View>
</View>
        <View style={[styles.modalHeader2]}>
                {/* empty spacer for equal space in between */}
               
               
                <Text style={styles.headerText}>
                 
                   
                   Upload your photo
                </Text>
              
              </View>
          {this.state.settingsviewData?.map((item,index) => (
                        <TouchableOpacity onPress={item?.onpress} key={index}>

            <TouchableOpacity onPress={item?.onpress} key={index} style={styles.settingsBgnd1}>
              <View style={styles.buttonsContainer}>
            

                <Image source={item?.icon} style={styles.optionIcon} />
{item?.id == 3?
             <Text style={{color:'red'}}>{item.label}</Text>:
             <Text style={{color:'black'}}>{item.label}</Text>}


              </View>
            
              </TouchableOpacity>
             
            </TouchableOpacity>
          ))}
            
        </View>
        </View>  

      
</Modal>

  )
  }

EditModel = () => {

    return (
      <Modal
        visible={this.state.editModel}
        transparent={false}
        animationType={"slide"}>
         <View style={{flex:1,width:"90%",marginHorizontal:20}}>
         <TouchableOpacity
              onPress={() => {
                this.setState({editModel:false})
              }

              }>
         <Image testID="liveThumbnail"
        source={require('./Assets/cl1.png')}
        style={{width:50,height:50,marginTop:50}}
          />
          </TouchableOpacity>

<Text style={styles.title2}>Choose profile photo.</Text>
<Text style={styles.title1}>Choose a profile photo from your library or select an avatar to add to your profile</Text>
<View style={{  flexDirection: 'row',  marginTop: 30, backgroundColor:this.state.editImageview == false ?'#008b8b':'#F1F5F9',height: 40, borderRadius:10}}>
            <TouchableOpacity
              onPress={() => {
                this.setState({editImageview:true,editavteview:false})
              }

              }
              style={{ width: "48%", height: 40, backgroundColor:this.state.editImageview == true ? '#008b8b':'#F1F5F9', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor:this.state.editImageview == true? '#008b8b':'#F1F5F9', borderRadius: this.state.editImageview == true? 10 :null, borderTopLeftRadius: this.state.editImageview == false? 10 :null,borderBottomLeftRadius: this.state.editImageview == false? 10 :null,}}>
              <Text style={{
                color: this.state.editImageview == true ? 'white':'black', fontFamily: 'poppins-semibold', fontSize: 14
              }}>Choose photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "48%", height: 40,backgroundColor:this.state.editavteview == true ? '#008b8b':'#F1F5F9', alignItems: 'center', justifyContent: 'center',borderRadius:this.state.editavteview == true ?10:null,marginLeft:this.state.editavteview == true ?-10:null}}

              onPress={() => {
                this.setState({editavteview:true,editImageview:false})

              }}>
              <Text style={{
                color: this.state.editavteview == true ? 'white':'black', fontFamily: 'poppins-semibold', fontSize: 14,
              }}>Avatars</Text>
            </TouchableOpacity>

          </View> 
<View style={{alignItems:'center',justifyContent:'center'}}>
{this.state.editImageview == true ?
<View style={styles.profileContainer1}>
          <Image testID="liveThumbnail"
        source={this.state.profileImage == null && this.state.removeimge == false ? require('./Assets/mypic4.jpeg'):this.state.profileImage}
        style={styles.profileImage1}
          />
          <TouchableOpacity style={styles.changeTxtContainer1} 
          onPress={()=>{this.setState({editModel:true})}} 
        >
            <View style={styles.changeTxtBlurView} />
            <TouchableOpacity testID="change" onPress={()=>{this.setState({editModel:false,settingsViewModal:true})}} style={{flexDirection:'row',alignItems:'center'}}>
            <Image testID="liveThumbnail"
        source={require('./Assets/cameraimg.png')}
        style={{width:20,height:20}}
          />
            <Text style={[styles.changeTxt, styles.alignCenter]}>
              Edit photo
            </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>:null}
        {this.state.editavteview == true ?
        <FlatList
                style={{marginBottom:20}}
                  testID="searchFlatlist3"
                  data={this.state.array2}
                  renderItem={({ item }) =>
                    this.renderList1(item)
                  }
                  contentContainerStyle={styles.inviteFlatList}
                  keyExtractor={(item) => `${item.id}`}
                  keyboardShouldPersistTaps="always"
                  numColumns={4}
               
              />
              :null}
        </View>
        <View style={{flex:1,width:"100%",justifyContent:'flex-end',bottom:30,alignItems:'center'}}>

<TouchableOpacity
onPress = {this.onPressSaveimage}
style={styles.loginBtn1}>
<Text style={styles.loginText1}>Save </Text>
</TouchableOpacity>

</View>
        </View>
       
      </Modal>
    );
  };
render()
{
return (
<SafeAreaView style={[styles.container,this.state.settingsViewModal == true ?{opacity:0.0}:null]}>
    <View style={styles.maincontainer}>
<Text style={styles.title}>Let's get to know you</Text>
<Text style={styles.title1}>Let us get to know you a bit better so you can get the best out of us</Text>
<View style={{alignItems:'center',justifyContent:'center'}}>

<View style={styles.profileContainer}>
          <Image testID="liveThumbnail"
          
        source={this.state.profileImage == null && this.state.removeimge == false? require('./Assets/mypic4.jpeg'):this.state.profileImage}
       
        style={styles.profileImage}
          />
          <TouchableOpacity style={styles.changeTxtContainer} 
          onPress={()=>{this.setState({editModel:true})}} 
        >
            <View style={styles.changeTxtBlurView} />
            <TouchableOpacity testID="change" onPress={()=>{this.setState({editModel:true})}} style={{flexDirection:'row',alignItems:'center'}}>
            <Image testID="liveThumbnail"
        source={require('./Assets/cameraimg.png')}
        style={{width:20,height:20}}
          />
            <Text style={[styles.changeTxt, styles.alignCenter]}>
              Edit
            </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        </View>
        <Text style={{color:"#A6A7AD",fontSize:12}}>First name
        <Text style={styles.requiredAsterisk}>*</Text></Text>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="First Name"
placeholderTextColor="#003f5c"
value={this.state.firstName}
onChangeText={text => this.setState({firstName:text})}/>
</View>

        <Text style={{color:"#A6A7AD",fontSize:12}}>Last name
        <Text style={styles.requiredAsterisk}>*</Text></Text>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Last Name"
placeholderTextColor="#003f5c"
value={this.state.lastName}
onChangeText={text => this.setState({lastName:text})}/>
</View>
<View style={{flexDirection:'row'}}>
<Text style={{color:"#A6A7AD",fontSize:12}}>
       Year of birth
        { <Text style={styles.requiredAsterisk}>*</Text>}
      </Text>
        </View>


<View style={styles.textinputWrapper}>
          
          <TextInput
            placeholder="Year of birth"
            onChangeText={text => this.setState({dofYear:text})}
                        value={this.state.dofYear}
            placeholderTextColor="rgba(154, 154, 154, 1)"
            style={styles.textInput}
            
            onFocus={() => this.setState({isFocus:true})}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 5,
             // padding: 5,
            }}
            onPress={() => {
                this.setState({isFocus:!this.state.isFocus})
             
            }}
          >
         <Image style={styles.DroupDownImg} source={require('./Assets/Droupdown.png')} />
          </TouchableOpacity>
        </View>
        {this.state.isFocus && (
          <View style={styles.countrySearchContainer}>
            <FlatList
              style={{ marginTop: 5, }}
              data={years}
              renderItem={this.renderSearchYear}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
        <TouchableOpacity
onPress = {this.onPressSavedata}
style={styles.loginBtn}>
<Text style={styles.loginText}>Save </Text>
</TouchableOpacity>

</View>

{this.EditModel()}
{this.settingsViewModal()}
</SafeAreaView>

);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'white',
alignItems:'center',
},
maincontainer:{flex:1,width:"90%",marginHorizontal:20},
title:{
fontSize:20,
color:"#868890",
marginTop:100
},
title2:{
  fontSize:20,
  color:"#868890",
  marginTop:30
  },
title1:{
    fontSize:16,
    color:"#A6A7AD",
    marginBottom: 10,
    marginTop:15
    },
inputView:{
width:"100%",
backgroundColor:"#F8FAFC",
borderRadius:10,
borderColor:'#E9EBEE',
borderWidth:1,
height:50,
marginBottom:20,
justifyContent:"center",
padding:20,
marginTop:10
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
width:"100%",
backgroundColor:"#4C99A0",
borderRadius:10,
height:50,
alignItems:"center",
justifyContent:"center",
marginTop:40,
Bottom:10,
alignSelf:"flex-end"
},
loginBtn1:{
    width:"100%",
    borderRadius:10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    Bottom:10,
    borderColor:'#4C99A0',
    borderWidth:1
    
    },
profileContainer1: { width: 280, height: 280 ,borderRadius:150,marginTop:30,backgroundColor:"#F1F5F9",borderColor:'#E3E7EB',borderWidth:2},
profileImage1: { width: 280, height: 280, resizeMode: "stretch",borderRadius:150 },

profileContainer: { width: 180, height: 180 ,borderRadius:100,borderColor:'#E3E7EB',borderWidth:2},
  profileImage: { width: 180, height: 180, resizeMode: "stretch",borderRadius:100 },
  changeTxtContainer: {
    position: "absolute",
    bottom: -10,
    width: "100%",
    alignItems: "center",
    height: "20%",
    justifyContent:'center',
  },
  changeTxtContainer1: {
    position: "absolute",
    bottom: -60,
    width: "100%",
    alignItems: "center",
    height: "20%",
    justifyContent:'center',
  },
  changeTxtBlurView: {
    position: "absolute",
  borderColor:'#E9EBEE',
    backgroundColor: "#F8FAFC",
    height: "80%",
    width: "50%",
    borderRadius:20,
    alignItems:'center',
    borderWidth:1

  },
  changeTxt: { color: "black",paddingHorizontal:10 },
  alignCenter: { alignSelf: "center" },
  requiredAsterisk:{color:'red'},
  transpernetModalContainer: {
    position: 'relative',
    width: "100%",
    flex: 1,
    backgroundColor: 'yellow',
  },
  participantView: {
    position: "absolute",
    bottom: 0,
    backgroundColor: 'black',
    width: '100%',
    maxHeight: 500,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  crossButton: {
    top: 5,
    right: 20,
    position: 'absolute'
  },
  modalContainer: {
    opacity: 10,

    flex: 1,
    top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  },
  modalListContainer: {
    bottom: 0,
    position: "absolute",
    borderTopRightRadius:20,
    width: "100%",
    borderTopLeftRadius: 20,
    maxHeight: 500,
    backgroundColor:'white'
  },
  modalHeader2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
     },
     modelView:{ width:50,height:5,backgroundColor:'#BFC0C5',borderRadius:35},
  modalHeader1: {
 
   justifyContent:'center',
    alignItems: "center",
    padding: 20,
     },
  cancelButton2: {
    width:25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    paddingHorizontal:15,
    color:"#282B3A"
   
  },
  settingsBgnd1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 25,borderBottomWidth:1,borderBottomColor:'#BFC0C5'
    
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionIcon: {
    width: 20,
    height: 20,
   
    marginRight: 10,
    resizeMode: "contain"
  },
  textinputWrapper: {
    height: 50,
    width: "100%",
    backgroundColor:"#F8FAFC",
borderRadius:10,
borderColor:'#E9EBEE',
  //  borderWidth: moderateScale(1),
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
			//	borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: 1,
  },
  textInput: {
    //     fontSize: textScale(15),
    //     color: "#444444",
    //     fontWeight: "400",
    //     flex: 1,
    // //    paddingVertical:moderateScaleVertical(13),
    //     fontFamily:FONTS.OpenSans_Medium,
    //     alignItems:'center'
    width:"80%",
    paddingHorizontal: 20,
    fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "rgb(95,95,95)",
    // backgroundColor:'red'
  },
  countrySearchContainer: {
    // height: Scale(120),
    maxHeight:30,
    minHeight:30,
     borderBottomWidth: 1,
     borderLeftWidth: 1,
     borderRightWidth: 1,
     marginTop: -4,
     borderBottomLeftRadius:12,
     borderBottomRightRadius: 12,
     borderColor: "#F4F4F4",
   },
   DroupDownImg: {
    height: 13,
    width:13,
    resizeMode: "contain",
    tintColor: "gray",
    marginRight:20,
  },
  countryFilterList: {
    paddingVertical:5,
    color: '#717171',
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    paddingHorizontal:25
  },
  loginText:{
    color:"white"
},
loginText1:{
    color:"#4C99A0"
}

});
