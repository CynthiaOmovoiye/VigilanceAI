import { Layout,Text,Button } from '@ui-kitten/components'
import React,{useState,useRef} from 'react'
import { StyleSheet,Image,TextInput} from 'react-native'
import { useNavigation } from "@react-navigation/native";


const DOTPScreen = () => {
    const navigation = useNavigation();

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);
    const pin5Ref = useRef(null);
  
    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");
    const [pin5, setPin5] = useState("");
    
    return (
        <Layout style={styles.Container}>
        <Layout style={styles.mainHeader}>
        <Image style={styles.image} source={require('../../assets/VigilanceAI_logo.png')} resizeMode="contain"/>
        <Text style={styles.text}>OTP<Text style={{fontSize:22,fontFamily:"Recoleta-Bold",}}> Verification</Text></Text>
        <Text style={{fontSize:17,color:"#C1C1C1",marginTop:30,fontFamily:'GTWalsheimPro-Regular',maxWidth:300}}>We sent your 5 digit OTP code to your phone number</Text>
        <Layout style={{flex:1,marginTop:60}}>
        <Layout style={{flex:0.6, justifyContent:"space-evenly",flexDirection:'row'}}>
        <TextInput
        ref={pin1Ref}
         maxLength={1} style={styles.input}
        onChange={(pin1)=>{
            setPin1(pin1)
            if (pin1 != "") {
                pin2Ref.current.focus();
            }
        }}
        /> 
            <TextInput
            ref={pin2Ref}
            maxLength={1} style={styles.input}
            onChange={(pin2)=>{
                setPin2(pin2)
                if (pin2 != "") {
                    pin3Ref.current.focus();
                }
            }}
            /> 
            <TextInput
            ref={pin3Ref}
            maxLength={1} style={styles.input}
            onChange={(pin3)=>{
                setPin3(pin3)
                if (pin3 != "") {
                    pin4Ref.current.focus();
                }
            }}
            /> 
            <TextInput
            ref={pin4Ref}
            maxLength={1} style={styles.input}
            onChange={(pin4)=>{
                setPin4(pin4)
                setPin2(pin2)
                if (pin4 != "") {
                    pin5Ref.current.focus();
                }
            }}
            /> 
            <TextInput
            ref={pin5Ref}
            maxLength={1} style={styles.input}
            onChange={(pin5)=>{
                setPin5(pin5)
            }}
            /> 
        </Layout>
        </Layout>
        <Button
        onPress={() => navigation.navigate('DSuccess')}
        style={styles.button} size="giant">Verify OTP</Button>
        <Layout style={styles.signin}>
            <Text style={{fontSize:18,color:'#818181',fontFamily:"GTWalsheimPro-Regular"}} >Didn’t Get OTP ? </Text> 
            <Text style={{fontSize:17,color:'#0075A9',fontWeight:'bold',fontFamily:"GTWalsheimPro-Regular"}}> Resend OTP</Text>
        </Layout>
        </Layout>
        </Layout>
    )
}

export default DOTPScreen

const styles = StyleSheet.create({
    Container: {
        height: "100%",
    },
    mainHeader: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 150,
        width:150,
        marginTop: 40
    },
    text:{
        marginTop:25,
        fontSize:22,
        fontFamily:"Recoleta-Bold",
        color:'#0075A9',
    },
    input:{
        backgroundColor:'#f5f4f2',
        fontWeight:'600',
        alignSelf:'center',
        textAlign:'center',
        fontSize:20,
        height:55,
        width:'17%',
        borderRadius:5,
        borderWidth:0.5,
        justifyContent:'center',
        borderColor:'grey'
    },
    button:{
        marginTop:50,
        backgroundColor:"#0075A9",
        width:350,
        borderColor:"transparent"
    },
    signin:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        backgroundColor:'#fff',
        marginTop:20
      }
})
