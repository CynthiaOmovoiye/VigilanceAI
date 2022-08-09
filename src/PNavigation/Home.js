import { StyleSheet, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Layout, Text, Input, Icon } from '@ui-kitten/components'
import axios from "axios";

const SearchIcon = props => <Icon {...props} name="search" />;



const Home = () => {
    const initialList = [
        {
            index: "cough_count",
            name: "Number of Cough",
            image: require("../../assets/Group.png"),
            steps: "00"
        },
        {
            index: "night_waking",
            name: "Number of Night Waking",
            image: require("../../assets/fa6-solid_person-walking.png"),
            steps: "00"
        },
        {
            index: "drink_count",
            name: "Number of Drinking",
            image: require("../../assets/gg_glass-alt.png"),
            steps: "00"
        },
        {
            index: "fall_count",
            name: "Number of Falls",
            image: require("../../assets/fa6-solid_person-falling.png"),
            steps: "00"
        },
    ]
    
    const [list, setList] = React.useState(initialList);
    const getFilter1 = () => {
        axios.post('https://data-api-obpornrv3a-uc.a.run.app/activities_api', {
          date: '07/05/2022'
        })
          .then(function (response) {
            const data = response.data;
            const newList = list.map((item) => {
                if (data[item.index]) {
                  const updatedItem = {
                    ...item,
                    steps: data[item.index],
                  };
          
                  return updatedItem;
                }
          
                return item;
              });
          
              setList(newList);
          })
          .catch(function (error) {
            console.log(error);
          });
    
      }
      useEffect(() => {
        getFilter1();
       
      }, [])
    return (
        <Layout style={styles.Container}>
        <Layout style={styles.mainHeader}>
        <Layout style={styles.TopHead}>
        <Text style={{ marginTop: 30, fontSize: 18 }}>Hello!</Text>
        <Image style={styles.user} source={(require("../../assets/user.jpg"))} />
    </Layout>
    <Text style={{ fontSize: 30, fontFamily: "Recoleta-Bold", color: "#0075A9" }}>Sahil Jhadav</Text>
    <Layout style={styles.Search}>
        <Input
            placeholder='Search....'
            accessoryRight={SearchIcon}
            style={styles.input}
            size="large"
        />
    </Layout>
    <Text style={styles.text}>Today's <Text style={{ fontSize: 25, fontFamily: "Recoleta-Bold", color: "#0075A9" }}>Analytics</Text></Text>
    <FlatList
        style={styles.listStyle}
        keyExtractor={(key) => {
            return key.index;
        }}
        //horizontal
        //inverted
        //showsHorizontalScrollIndicator={false}
        extraData={list}
        numColumns={2}
        data={list}
        renderItem={({ item }) => {
            return <>
                <Layout style={styles.textStyle}>
                    <Image source={item.image} resizeMode="contain" style={styles.imageCard} />
                    <Text style={{ maxWidth: 100, color: "#000", fontSize: 17, textAlign: "center", paddingTop: 10, fontWeight: "500" }}>{item.name}</Text>
                    <Text style={{ backgroundColor: "#0075A9", fontSize: 22, color: "white", fontWeight: "bold", paddingLeft: 20, paddingRight: 20, marginTop: 10, marginBottom: 10,borderRadius:5 }}>
                        {item.steps}
                    </Text>
                </Layout>
            </>
        }}
    />
        </Layout>
          
        </Layout>
    )
}

export default Home

const styles = StyleSheet.create({
    Container: {
        height: '100%',
        
    },
    mainHeader:{
        marginHorizontal:30

    },
    TopHead: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
       
    },
    user: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginLeft: 200,
    },
    Search: {
        marginTop: 30,
    },
    input: {
        borderRadius: 30,
        fontFamily: "GTWalsheimPro-Regular"
    },
    text: {
        marginTop: 30,
        fontSize: 25,
        fontFamily: "Recoleta-Bold",
    },
    textStyle: {
        padding: 10,
        backgroundColor: "#EEF5F9",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 130,
        borderRadius: 10
    },
    listStyle: {
        textAlign: "center",
        padding: 10,
        margin: 0,
    },
    menuStyle: {
        paddingBottom: 30
    },
    lineStyle: {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: "grey",
    },
    imageCard: {
        width: 50,
        height: 50,
        marginTop: 7,
    }
})