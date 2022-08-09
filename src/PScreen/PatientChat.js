import { StyleSheet,FlatList,Image,SafeAreaView} from 'react-native'
import React from 'react'
import { Layout,Text,Input,Icon} from '@ui-kitten/components';
import { useNavigation } from "@react-navigation/native";

const SearchIcon = props => <Icon {...props} name="search" />;
const PatientChat = () => {
    const navigation = useNavigation();
    const patientList = [
        {
          index: "1",
          name: "Mr.Test User",
          msg: "lLorem ipsum dolor sit amet,consectetur adipiscing elit,ua....",
          notification: "6+",
          image: require('../../assets/user.jpg'),
        },
        {
          index: "2",
          name: "Mr.Test User",
          msg: "lLorem ipsum dolor sit amet,consectetur adipiscing elit,ua....",
          notification: "12+",
          image: require('../../assets/user.jpg'),
        },
        {
          index: "3",
          name: "Mr.Test User",
          msg: "lLorem ipsum dolor sit amet,consectetur adipiscing elit,ua....",
          notification: "2+",
          image: require('../../assets/user.jpg'),
        },
      ]
  return (
    <Layout style={{height:"100%"}}>
    <Layout style={styles.mainHead}>
    <Layout style={styles.headTop}>
    <Icon
    name='arrow-back'
    fill="#0075A9"
    style={styles.icon}
    onPress={() => navigation.navigate('Home')}
    />
    <Text style={styles.pText}>Your Patients</Text>
    </Layout>
    <Layout style={styles.Search}>
        <Input
          placeholder='Search....'
          accessoryRight={SearchIcon}
          style={styles.input}
          size="large"
        />
      </Layout>
      <Text style={{fontSize:20,fontFamily:"Recoleta-Bold",marginTop:30}}>Patients List</Text>
      <SafeAreaView>
      <FlatList style={styles.textStyle}
          keyExtractor={(key) => {
            return key.index;
          }}
          vertical
          //inverted
          showsVerticalScrollIndicator={false}
          data={patientList}
          renderItem={({ item }) => {
            return (
              <>
                <Layout style={styles.card}>
                  <Image
                    source={item.image}
                    resizeMode="cover" style={{ height: 60, width: 60, borderRadius: 50,marginTop:10 }}
                  />
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.msg}>{item.msg}</Text>
                  <Text style={styles.noti}>{item.notification}</Text>
                  <Text style={styles.details}>View Details</Text>
                  <Text style={styles.msgNow}>Message Now</Text>
                </Layout>
              </>
            );
          }}
        />
      </SafeAreaView>
    </Layout>
    </Layout>
  )
}

export default PatientChat

const styles = StyleSheet.create({
    mainHead:{
        marginHorizontal:30,
    },
    input: {
        borderRadius: 30,
        fontFamily: "GTWalsheimPro-Regular"
    },
    icon:{
        height:30,
        width:30
    },
    headTop:{
        display:'flex',
        flexDirection:"row",
        marginTop:30
    },
    pText:{
        fontSize:20,
        fontFamily:"Recoleta-Bold",
        left:10
    },
    Search:{
        marginTop:20
    },
    card:{
        display:"flex",
        flexDirection:"column",
        backgroundColor: "#F9F9F9",
        width:"100%",
        marginTop:15,
        padding:15,
        paddingBottom:20,
    },
    text:{
        position:"absolute",
        marginTop:10,
        marginLeft:90,
        fontSize:18,
        fontFamily:"GTWalsheimPro-Bold",
    },
    msg:{
        position:"absolute",
        marginTop:40,
        marginLeft:90,
        color:"#D5D5D5",
        fontSize:16,
    },
    noti:{
        position:"absolute",
        right:10,
        backgroundColor:"#FF6969",
        color:"white",
        width:30,
        height:30,
        borderRadius:50,
        paddingTop:4,
        textAlign:"center",
        fontSize:15,
        marginTop:-10
    },
    details:{
        marginTop:20,
        marginHorizontal:75,
        fontSize:15,
        color:"#0075A9",
        fontFamily:"GTWalsheimPro-Bold",
    },
    msgNow:{
        position:"absolute",
        bottom:20,
        right:10,
        fontSize:15,
        fontFamily:"GTWalsheimPro-Bold"
    }
})