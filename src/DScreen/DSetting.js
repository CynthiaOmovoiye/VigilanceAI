import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Layout, Text, Divider, Icon } from '@ui-kitten/components';
import { useNavigation } from "@react-navigation/native";

const DSetting = () => {
    const navigation = useNavigation();
    return (
        <Layout style={styles.Container}>
        <Layout style={styles.topHead}>
        <Icon
        style={styles.arrow}
        fill="#0075A9"
        name='arrow-back'
        onPress={() => navigation.navigate('DHome')}
            
        />
        
        <Text style={{fontSize:20,fontFamily:"Recoleta-Bold",marginLeft:10}}>Settings</Text>
        </Layout>
        <Text style={{fontSize:15,color:"#DDDDDD",fontFamily:"GTWalsheimPro-Bold",marginLeft:60}}>View and set your profile details</Text>
            <Layout style={styles.topHeader}>
                <Image source={require('../../assets/user.jpg')} style={styles.image} />
                <Text style={{ fontSize: 22, marginLeft: 20, fontFamily: "GTWalsheimPro-Bold" }}>Dr.Sahil Jadhav</Text>
                <Text style={styles.headText}>lLorem ipsum dolor adipiscing elit,ua....</Text>
            </Layout>
            <Divider />
            <Layout style={styles.profile}>
                <Icon
                    style={styles.icon}
                    fill='#8F9BB3'
                    name='person-outline' />
                <Text style={styles.text} >Account</Text>
                <Text style={styles.desc}>Lorem ipsum dolor sit amet, consecture</Text>
            </Layout>
            <Layout style={styles.profile}>
                <Icon
                    style={styles.icon}
                    fill='#8F9BB3'
                    name='message-square-outline' />
                <Text style={styles.text} >Chats</Text>
                <Text style={styles.desc}>Lorem ipsum dolor sit amet, consecture</Text>
            </Layout>
            <Layout style={styles.profile}>
                <Icon
                    style={styles.icon}
                    fill='#8F9BB3'
                    name='bell-outline' />
                <Text style={styles.text} >Notification</Text>
                <Text style={styles.desc}>Lorem ipsum dolor sit amet, consecture</Text>
            </Layout>
            <Layout style={styles.profile}>
                <Icon
                    style={styles.icon}
                    fill='#8F9BB3'
                    name='question-mark-circle-outline' />
                <Text style={styles.text} >Help</Text>
                <Text style={styles.desc}>Lorem ipsum dolor sit amet, consecture</Text>
            </Layout>
        </Layout>
    )
}

export default DSetting

const styles = StyleSheet.create({
    Container: {
        height: "100%",
        backgroundColor: "#fff",
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
    topHeader: {
        display: "flex",
        flexDirection: "row",
        marginTop: 40,
        paddingBottom: 40,
        paddingHorizontal: 30,
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 50
    },
    headText: {
        position: "absolute",
        margin: 40,
        left: 70,
        color: "#D5D5D5",
        fontSize: 15
    },
    profile: {
        display: "flex",
        flexDirection: 'row',
        marginTop: 50,
        marginHorizontal: 30
    },
    icon: {
        height: 30,
        width: 30,
        top: 10
    },
    desc: {
        position: "absolute",
        marginTop: 30,
        left: 60,
        color: "#D5D5D5",
        fontSize: 16,
        fontFamily: "GTWalsheimPro-Regular",

    },
    text: {
        fontSize: 20,
        marginLeft: 30,
        fontFamily: "GTWalsheimPro-Bold"
    }
})