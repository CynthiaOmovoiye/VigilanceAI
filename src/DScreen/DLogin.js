import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Layout, Text, Input, Button, Icon} from '@ui-kitten/components';
import { useNavigation } from "@react-navigation/native";

const DLogin = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  return (
    <Layout style={styles.Container}>
      <Layout style={styles.headMain}>
        <Image
          style={styles.image}
          source={require('../../assets/VigilanceAI_logo.png')}
          resizeMode="contain"
        />
        <Text style={styles.heading}>
          Get Started As{' '}
          <Text
            style={{
              fontFamily: 'Recoleta-Bold',
              color: '#0075A9',
              fontSize: 22,
            }}>
            DOCTOR
          </Text>
        </Text>
        <Text style={styles.paragraph}>
          With our innovative technology,we're making the world safer for
          elderly people
        </Text>
        <Input
          placeholder="Phone"
          value={value}
          onChangeText={nextValue => setValue(nextValue)}
          size="large"
          style={styles.input}
        />
        <TouchableOpacity onPress={() => navigation.navigate('OTPScreen')}>
        <Button
        onPress={() => navigation.navigate('DOTPScreen')}
        style={styles.button} size="giant">
          Send OTP
        </Button>
        </TouchableOpacity>
        <Layout
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Layout style={styles.line}></Layout>
          <Text
            style={{
              marginHorizontal: 15,
              color: 'grey',
              fontSize: 19,
              fontFamily: 'GTWalsheimPro-Regular',
            }}>
            {' '}
            OR{' '}
          </Text>
          <Layout style={styles.line}></Layout>
        </Layout>
        <Layout style={styles.btnSecondary}>
        <Layout style={styles.social_btn}>
        <Image
        style={styles.btnImage}
        source={require('../../assets/google.png')}
      />
      <Text style={styles.btnText}>
        Continue With Google
      </Text>
      </Layout>
        </Layout>
        <Layout style={styles.signin}>
          <Text style={{fontSize: 15, color: '#818181'}}>Don't have an Account?</Text>
          <Text style={{fontSize: 17, color: '#0075A9', fontWeight: 'bold'}}> Sign Up
          </Text>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DLogin;

const styles = StyleSheet.create({
  Container: {
    height:"100%",
    
  },
  headMain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  image: {
    height: 150,
    width: 100,
    aspectRatio: 1,
    marginTop: 30,
  },
  heading: {
    marginTop: 20,
    fontSize: 22,
    fontFamily: 'Recoleta-Bold',
  },
  paragraph: {
    fontSize: 18,
    marginTop: 20,
    color: '#C1C1C1',
    fontFamily: 'GTWalsheimPro-Regular',
  },
  input: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#0075A9',
    width: 330,
    borderColor: 'transparent',
  },
  line: {
    height: 1,
    width: 120,
    backgroundColor: '#0075A9',
  },
  button1: {
    backgroundColor: 'grey',
    width: 330,
  },
  btnSecondary:{
    flexDirection:'column',
    alignItems:'center',
    width:'95%'
  },
  social_btn:{
    height:55,
    width:'100%',
    borderWidth:1,
    borderRadius:10,
    borderColor:'#ddd',
    flexDirection:'row',
    alignItems:'center',
    marginTop:20,
  },
  btnImage:{
    width:25,
    height:25,
    marginLeft:15
  },
  btnText:{
    width:'80%',
    textAlign:'center',
    fontSize:16,
  },
  signin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    marginTop: 20,
  },
});
