import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera:{
      width:"100%",
      height:"100%",
    },
    contentButtons:{
      flex:1,
      backgroundColor:"transparent",
      flexDirection:"row"
    },
    buttonFlip:{
      position:"absolute",
      bottom:50,
      left:30,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#fff",
      margin:20,
      height:50,
      width:50,
      borderRadius:50
    },
    buttonCamera:{
      position:"absolute",
      bottom:50,
      right:30,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"red",
      margin:20,
      height:50,
      width:50,
      borderRadius:50
    },
    closeButton:{
      position:"absolute",
      top:50,
      left:2,
      margin:10
    },
    contentModal:{
      flex:1,
      justifyContent:"center",
      alignItems:"flex-end",
      margin:20
    },
    imgPhoto:{
      width:"100%",
      height:400
    }
  });


export default styles;