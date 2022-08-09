import React from 'react'
import { StyleSheet,FlatList, TouchableOpacity} from 'react-native'
import { Layout,Text,Icon} from '@ui-kitten/components';
import { LineChart } from "react-native-chart-kit";

const PatientDetail = ({navigation}) => {
    const analysis = [
        {
          index: "1",
          description: "lLorem ipsum dolor sit amet,consectetur adipiscing elit,ua....",
        },
        {
          index: "2",
          description: "lLorem ipsum dolor sit amet,consectetur adipiscing elit,ua....",
        },
        {
          index: "3",
          description: "lLorem ipsum dolor sit amet,consectetur adipiscing elit,ua....",
        },
      ];
    return (
        <Layout style={styles.Container}>
        <Layout style={styles.topHead}>
        <Icon
        style={styles.arrow}
        fill="#0075A9"
        name='arrow-back'
        onPress={()=>navigation.navigate('DFilter')}/>
        <Text style={{fontSize:20,fontFamily:"Recoleta-Bold",marginLeft:10}}>Patient Details</Text>
        </Layout>
        <Text style={{fontSize:15,color:"#DDDDDD",fontFamily:"GTWalsheimPro-Regular",marginLeft:60}}>View your Patient Detail</Text>
        <Layout style={styles.chart}>
        <LineChart
          data={{
            labels: ["Text", "Text", "Text", "Text", "Text"],
            datasets: [
              {
                data: [80, 40, 100, 20, 60],
              },
            ],
          }}
          width={300}
          height={220}
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            fillShadowGradientFrom: "white",
            fillShadowGradientTo: "white",
            color: (opacity = 1) => `rgba(0, 117, 169, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          fromZero={true}
          bezier
        />
        </Layout>
        <Layout style={styles.detailAnalysis}>
        <Text style={{fontSize:20,fontFamily:"Recoleta-Bold",marginBottom:30}}>Detailed Analysis</Text>
        <FlatList
          style={styles.listStyle}
          keyExtractor={(key) => {
            return key.index;
          }}
          //horizontal
          //inverted
          //showsHorizontalScrollIndicator={true}
          data={analysis}
          renderItem={({ item }) => {
            return (
              <>
                <Layout style={styles.textStyle}>
                  <Text style={{color:"#DADADA",fontFamily:"GTWalsheimPro-Bold"}}>
                    {item.index}. {item.description}
                  </Text>
                </Layout>
              </>
            );
          }}
        />
        </Layout>
        </Layout>
    )
}

export default PatientDetail

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
    chart:{
        marginTop:50,
        marginHorizontal:20
    },
    detailAnalysis:{
        marginTop:40,
        marginHorizontal:30,
    },
    textStyle:{
        backgroundColor:"#F9F9F9",
        padding:10,
        
    }
})
