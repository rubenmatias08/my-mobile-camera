import { Text, View, SafeAreaView, TouchableOpacity, Modal, Image} from 'react-native';
import {Camera} from 'expo-camera';
import {useState , useEffect, useRef } from 'react';
import {FontAwesome} from '@expo/vector-icons'
import styles from './styles';

export default function App() {

  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null)
  const camRef = useRef(null)
  const [captPhoto,setCaptPhoto] = useState(null)
  const [open,setOpen] = useState(false)

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === "granted")
    }) ()
  }, [])


  if(hasPermission === null){
    return <View/>
  }

  if(hasPermission === false){
    return <Text>Access Denied</Text>
  }


  async function takePicture(){
   if(camRef){
    const data = await camRef.current.takePictureAsync();
    setCaptPhoto(data.uri)
    setOpen(true)
   }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef}> 
      <View style={styles.contentButtons}>
        <TouchableOpacity
          style={styles.buttonFlip}
          onPress={() => {
          setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)
          }}
        >
          <FontAwesome name='exchange' size={23} color='red'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCamera} onPress={takePicture}>
          <FontAwesome name='camera' size={23} color='#fff'/>
        </TouchableOpacity>
      </View>
      </Camera>
      {captPhoto && (
      <Modal animationType='slide' transparent={true} visible={open}>
         <View style={styles.contentModal}>
        <TouchableOpacity style={styles.closeButton} onPress={ () => {setOpen(false)} }>
          <FontAwesome name='close' size={40} color="red"/>
        </TouchableOpacity>
          <Image style={styles.imgPhoto} source={{uri : captPhoto}}/>
        </View>
      </Modal>
)}
    </SafeAreaView>
  );
}

//Developed by: Ruben Matias