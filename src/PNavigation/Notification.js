import { StyleSheet,SafeAreaView,FlatList,Image} from 'react-native'
import React from 'react'
import { Layout,Text,Icon} from '@ui-kitten/components';
import { useNavigation } from "@react-navigation/native";

const Notification = () => {
  const navigation = useNavigation();
    const notification = [
        {
          index: "1",
          name: "Notification",
          image: require('../../assets/notification.png'),
          msg: "A brief discription about the notification message",
          hour: "10 minute ago",
        },
        {
          index: "2",
          name: "Notification",
          image: require('../../assets/notification.png'),
          msg: "A brief discription about the notification message",
          hour: "30 minute ago",
        },
        {
          index: "3",
          name: "Notification",
          image: require('../../assets/notification.png'),
          msg: "A brief discription about the notification message",
          hour: "45 minute ago",
        },
        {
          index: "4",
          name: "Notification",
          image: require('../../assets/notification.png'),
          msg: "A brief discription about the notification message",
          hour: "1 minute ago",
        },
        {
          index: "5",
          name: "Notification",
          image: require('../../assets/notification.png'),
          msg: "A brief discription about the notification message",
          hour: "1 minute ago",
    
        },
        {
          index: "6",
          name: "Notification",
          image: require('../../assets/notification.png'),
          msg: "A brief discription about the notification message",
          hour: "1 minute ago",
    
        },
        {
          index: "7",
          name: "Notification",
          image: require('../../assets/notification.png'),
          msg: "A brief discription about the notification message",
          hour: "1 minute ago",
    
        },
        {
          index: "8",
          name: "Notification",
          image: require('../../assets/notification.png'),
          msg: "A brief discription about the notification message",
          hour: "1 minute ago",
    
        },
      ];
  return (
    <Layout style={styles.Container}>
    <Layout style={styles.topHead}>
    <Icon
    style={styles.arrow}
    fill="#0075A9"
    name='arrow-back'
    onPress={() => navigation.navigate('Home')}/>
    <Text style={{fontSize:20,fontFamily:"Recoleta-Bold",marginLeft:10}}>Notification</Text>
    </Layout>
    <Text style={{fontSize:15,color:"#DDDDDD",fontFamily:"GTWalsheimPro-Bold",marginLeft:60}}>View your notification</Text>
    <SafeAreaView>
    <FlatList style={styles.textStyle}
      keyExtractor={(key) => {
        return key.index;
      }}
      data={notification}
      renderItem={({ item }) => {
        return (
          <>
            <Layout style={styles.card}>
              <Image
                source={item.image}
                resizeMode="contain" style={{ height: 30, width: 30, aspectRatio: 1 }}
              />
              <Text style={{ marginLeft: 20, fontSize: 17, fontWeight: "800", color: "#0075A9" }}>{item.name}</Text>
              <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: "500" }}>{item.hour}</Text>
              <Text style={styles.msg}>{item.msg}</Text>
            </Layout>
          </>
        );
      }}
    />
  </SafeAreaView>
    
    </Layout>
  )
}

export default Notification

const styles = StyleSheet.create({
    Container:{
        height:"100%",
    },
    topHead:{
      display:"flex",
      flexDirection:"row",
      marginTop:20,
      marginHorizontal:20
  },
  arrow:{
      width:30,
      height:30
  },
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FCFCFC",
    width: "100%",
    marginTop: 15,
    padding: 15,
    paddingBottom: 30,
    borderRadius: 10,
    marginBottom:35,
    marginHorizontal:30
  },
  msg: {
    position: "absolute",
    marginTop: 30,
    width: 200,
    left: 65,
    top: 20,
    fontSize: 15
  }
})