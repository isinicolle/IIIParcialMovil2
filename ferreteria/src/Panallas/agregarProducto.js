import React from 'react';
import { useState,useEffect  } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View, Image, SafeAreaView,Pressable, ScrollView , Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScrollerNumero from '../componentes/ScrollerNumero';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

import { Boton, HiperVinculo, TextBox, PasswordBox, Footer, Header, Texts} from '../componentes/'



const PantallaAgregarP = () => {
    
    const [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
          }
      
          setSelectedImage({ localUri: pickerResult.uri });
        };
      
        if (selectedImage !== null) {
          return (
            <ScrollView>
        <View style={styles.container}>
            <Header  busqueda={true}  icon={'chevron-left'}></Header>
           
            <View style={styles.tarjeta}>
            <Image source={{ uri: selectedImage.localUri }} style={styles.logo} />
      <Text >
        To share a photo from your phone with a friend, just press the button below!
      </Text>
        <Boton onPress={openImagePickerAsync} text={'Pick a photo'}> </Boton>
         
            </View>
          
            <Footer></Footer>
        </View>
        </ScrollView>
          );
        }
     
    return (
        
        <ScrollView>
        <View style={styles.container}>
            <Header  busqueda={true}  icon={'chevron-left'}></Header>
           
            <View style={styles.tarjeta}>
            <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text >
        To share a photo from your phone with a friend, just press the button below!
      </Text>
        <Boton onPress={openImagePickerAsync} text={'Pick a photo'}> </Boton>
         
            </View>
          
            <Footer></Footer>
        </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        height: '100%'
    },
   

    logo: {
        width: 250,
        height: 250,
        marginTop: '5%',
        marginBottom: '2%',
        padding: 10,
        alignSelf:'center'
    },
    tarjeta: {
        flex: 3,
        padding: 10,
        backgroundColor: '#fff',

        shadowOffset:
        {
            width: 0,
            height: 5,
        },
        flexDirection: 'column',
        shadowOpacity: 0.44,
        shadowRadius: 5,
        elevation: 16,
        width: '90%',
        flexGrow: 1,
        borderRadius: 20,
        maxWidth: 500,
         height: "100%",
         minHeight: 170,
        margin: 10
    },
   
})
export default PantallaAgregarP;
