import React, { Component } from 'react'
import ImageCropPicker from "react-native-image-crop-picker";
import {
  
  Keyboard,
 
} from "react-native";
import RNFS from 'react-native-fs';

import { Alert,  } from "react-native"
class MyprofileDisplayController extends Component {
    constructor(){
      super()
      this.state = {animating:true,
        mydata:[],
        loader:true,
        email:"samikshawagh09@gmail.com",
        password:"Admin@1234",
        dofYear:"1996",
        firstName:"sami",
        lastName:"wagh",
        editModel:false,
        editavteview:false,
        settingsViewModal:false,
        profileImageData1:[],
        profileImage:null,
        image:"",
        setSelectedAvatar:null,
      dsecriptionData:[],
      isFocus:false,
      removeimge:false,
    heightData:[],
  settingsviewData : [
    { "id": 1, label: "View photo library", icon: require('./Assets/galary.png'),onpress: this.chooseImage1 },
    { "id": 2, label: "Take a photo", icon: require('./Assets/img2.jpeg'), onpress: this.showCameraPicker },
    { "id": 3, label: "Remove photo", icon: require('./Assets/delete.png'), onpress: this.handleRemove },
   ],

    editImageview:true,
    array2: [
   
    { id: 1, source: require('./Assets/avtars/av11.jpeg') },
    { id: 2, source: require('./Assets/avtars/av9.png') },
    { id: 3, source: require('./Assets/avtars/av3.png') },
    { id: 4, source: require('./Assets/avtars/av13.jpeg') },
    { id: 5, source: require('./Assets/avtars/av15.png') },
    { id: 6, source: require('./Assets/avtars/av6.png') },
    { id: 7, source: require('./Assets/avtars/av14.jpeg') },
    { id: 8, source: require('./Assets/avtars/av16.jpeg') },


    // {  "id": 9, image: require('./Assets/avtars/av7.jpeg')},
    // {  "id": 1, image: require('./Assets/avtars/av7.jpeg')},
   
    
   ],
  weightData:[]}
    }
    chooseImage1 = () => {
      ImageCropPicker.openPicker({
        multiple: false,
        mediaType: "photo",
        compressImageQuality: 0.3,
        includeBase64: true,
        cropping: true,
      }).then(async (image) => {
        this.setState({
          image: image.sourceURL,
          profileImageData1: {
            uri: image.path,
            name: image.filename,
            type: image.mime,
            
          },
          profileImage : {uri : image.path},
          settingsViewModal:false,
          editModel:true,


          
        });

      });
      console.log("imageviw",this.state.profileImageData1)

    }; 
    handleRemove=  () => {
      this.setState({
        profileImage : null,
        settingsViewModal:false,
        editModel:true,
        removeimge:true


      })
    }
    showCameraPicker=  () => {
      try {
        ImageCropPicker.openCamera({
          mediaType: "photo",
          compressImageQuality: 0.3,
          includeBase64: true,
          cropping: true
        }).then(async (image) => {
          console.log("@@@ Selected Image Item =============", image);
          this.setState({
            profileImage : {uri : image.path},
            settingsViewModal:false,
            editModel:true,
  

          })

        });
      } catch (e) {
        console.log("@@@ Error opening camera ==========", e);
      }
    }
  
    getDogList =  () => {
      this.setState({
        loader:true
      })
      fetch("https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json")
      .then(async(res)=> {
        let response=await res.json()
        console.log("response>>",response)
        this.setState({
         mydata:response,
          loader:false
        })
      })
      .catch(error => {
        console.log("error>>",error)
          this.setState({
        loader:false
      })
      Alert.alert("Oops! Something went wrong.")
  
          
      });
  
  
  
    }
     selectYear = (item) => {
      console.log(item.toString(), "country item")
      // setSortedCountry(countriesData);
      // setChoosenCountryId(item)
      // setcountry(item.name);
      this.setState({
       
        dofYear:item.toString()
      })
     
      Keyboard.dismiss()
   
      this.setState({
        isFocus:false,
        dofYear:item.toString()
      })
    }
  

  
  }
export default MyprofileDisplayController;