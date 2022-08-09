import {
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Layout, Text, Icon, Button, Divider, ButtonGroup, Modal, Input, Datepicker, View } from '@ui-kitten/components';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from "@react-navigation/native";
import DatePicker from 'react-native-date-picker'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import moment from 'moment';
import axios from "axios";


const ClockIcon = props => <Icon {...props} name="clock-outline" />;
const CalendarIcon = props => <Icon {...props} name="calendar" />;

const DFilter = () => {
  const navigation = useNavigation();
  const [chartData, setChartData] = React.useState({
    labels: [],
    datasets: [
      {
        data: []
      }
    ]
  })
  const [date, setDate] = useState(new Date(Date.now() + (8 * 86400000)));//current date code
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
  const [loading, setLoading] = React.useState(true);

  const getFilter1 = () => {
    axios.post('https://data-api-obpornrv3a-uc.a.run.app/activities_api', {
      date: '07/05/2022'
    })
      .then(function (response) {
        const hours = response.data.fall_x_cord;
        const fall = response.data.fall_y_cord;
        var h = {};

        hours.forEach(function (v, i) {
          if (h.hasOwnProperty(v.split(':')[0] + v.slice(-2))) {
            h[v.split(':')[0] + v.slice(-2)] = h[v.split(':')[0] + v.slice(-2)] += fall[i]

          }
          else {
            h[v.split(':')[0] + v.slice(-2)] = fall[i]
          }
        })
        const labelData = Object.keys(h);
        const dataValues = Object.values(h);
       
        if(dataValues.length>0){
          setChartData({
            ...chartData,
            labels: labelData,
            datasets: [
              {
                ...chartData.datasets[0],
                data: dataValues
              }
            ]
          })
          setLoading(false)
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true
    })
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const [open, setOpen] = React.useState(false)
  const [visible, setVisible] = React.useState(false);
  const notes = [
    {
      index: '1',
      date: '15 April 2022',
      description:
        'lLorem ipsum dolor sit amet,consectetur adipiscing elit,ua....',
    },
    {
      index: '2',
      date: '15 April 2022',
      description:
        'lLorem ipsum dolor sit amet,consectetur adipiscing elit,ua....',
    },
    {
      index: '3',
      date: '15 April 2022',
      description:
        'lLorem ipsum dolor sit amet,consectetur adipiscing elit,ua....',
    },
  ]

  useEffect(() => {
    // setLoading(true)
    getFilter1();
    console.log(loading)
  }, [])
  // useEffect(() => {
  //   // setLoading(false)

  // }, [chartData])

  return (
    loading ?
      <Layout>
        <ActivityIndicator />
      </Layout>
      :
      <Layout style={styles.Container}>
        <ScrollView>
          <Image source={require('../../assets/colored-bg.jpeg')} />
          <Layout style={styles.Arrow}>
            <Icon style={styles.arrow} fill="#fff" name="arrow-back" onPress={() => navigation.navigate('DHome')} />
          </Layout>
          <Layout style={styles.imgTop}>
            <Icon style={styles.icon1} fill="#fff" name="email-outline" />
            <Icon style={styles.icon2} fill="#fff" name="bookmark-outline" />
          </Layout>
          <Image
            style={styles.UserImg}
            source={require('../../assets/user.jpg')}
            resizeMode="contain"
          />
          <Text
            style={{
              marginTop: 60,
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'GTWalsheimPro-Bold',
            }}>
            Alex Tsimikas
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              marginTop: 3,
              paddingBottom: 20,
            }}>
            Brookly,Ny
          </Text>
          <Layout style={styles.Button} level="1">
            <Button style={styles.buttontrn} appearance="outline">
              {evaProps => (
                <Text
                  {...evaProps}
                  style={{ color: '#0F7BAB', fontFamily: 'GTWalsheimPro-Bold' }}>
                  Alert Now
                </Text>
              )}
            </Button>
            <Button style={styles.button} appearance="filled" onPress={() => navigation.navigate('DChat')}>
              Message Now
            </Button>
            <Button style={styles.buttontrn} appearance="outline" onPress={() => navigation.navigate('Details')}>
              {evaProps => (
                <Text
                  {...evaProps}
                  style={{ color: '#0F7BAB', fontFamily: 'GTWalsheimPro-Bold' }}>
                  More
                </Text>
              )}
            </Button>
          </Layout>
          <Divider />

          <Layout style={styles.Details}>
            <Text style={{ fontSize: 22, fontFamily: 'Recoleta-Bold' }}>
              Filter Details
            </Text>
            <TouchableOpacity style={{ marginTop: 5, flexDirection: 'row' }} onPress={() => showDatepicker()}>
              <Icon
                style={{ height: 25, width: 25, left: 30 }}
                fill='#0075A9'
                name='calendar' />
              <Text style={{ color: "#C1C1C1", fontSize: 18, fontFamily: "Recoleta-Bold", left: 50 }}>{moment(date).format('DD-MM-YYYY')}</Text>
            </TouchableOpacity>
            <ButtonGroup style={styles.btngroup}>
              <Button style={styles.btn} onPress={() => navigation.navigate('PatientDetail')}>Filter1</Button>
              <Button style={styles.btn}>Filter2</Button>
              <Button style={styles.btn}>Filter3</Button>
              <Button style={styles.btn}>Filter4</Button>
            </ButtonGroup>

            <LineChart
              data={chartData}
              width={300}
              height={220}
              chartConfig={{
                backgroundColor: 'white',
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                fillShadowGradientFrom: 'white',
                fillShadowGradientTo: 'white',
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
          <Layout style={styles.Notes}>
            <Text style={{ fontSize: 20, fontFamily: 'GTWalsheimPro-Bold' }}>
              Recent
              <Text
                style={{
                  fontSize: 20,
                  color: '#0075A9',
                  fontFamily: 'GTWalsheimPro-Bold',
                }}>
                {' '}
                Notes
              </Text>
            </Text>
            <FlatList
              style={styles.listStyle}
              keyExtractor={key => {
                return key.index;
              }}
              horizontal
              //inverted
              showsHorizontalScrollIndicator={false}
              data={notes}
              renderItem={({ item }) => {
                return (
                  <>
                    <Layout style={styles.textStyle}>
                      <Layout style={styles.circle}></Layout>
                      <Text
                        style={{
                          fontSize: 13,
                          marginLeft: 12,
                          fontFamily: 'GTWalsheimPro-Bold',
                        }}>
                        Date:{item.date}
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          paddingTop: 10,
                          fontFamily: 'GTWalsheimPro-Regular',
                        }}>
                        {item.description}
                      </Text>
                    </Layout>
                  </>
                );
              }}
            />
            <TouchableOpacity onPress={() => setVisible(true)}>
              <Layout style={styles.add}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'GTWalsheimPro-Regular',
                    color: '#0075A9',
                  }}>
                  + Add New
                </Text>
              </Layout>
            </TouchableOpacity>
          </Layout>
          {/* Modal Start*/}
          <Modal
            style={styles.model}
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible(false)}>
            <Layout style={styles.mainContainer}>
              <Layout style={styles.Head}>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                  }}
                  onCancel={() => {
                    setOpen(false)
                  }}
                />
                <Icon
                  style={styles.icon}
                  fill='#0F7BAB'
                  name='file-add-outline' />
                <Text style={{ fontSize: 25, fontFamily: "Recoleta-Bold", marginLeft: 60 }}>Add Notes</Text>
                <Icon
                  onPress={() => setVisible(false)}
                  style={styles.icon1}
                  fill='#8F9BB3'
                  name="close-outline" />
              </Layout>
              <Layout style={styles.notes}>
                <Input
                  label={evaProps => <Text {...evaProps} style={{ fontFamily: "GTWalsheimPro-Bold", marginBottom: 5 }}>Time</Text>}
                  accessoryRight={ClockIcon}
                  placeholder="hy"
                  multiline={true}
                  textStyle={{ minHeight: 40 }}
                  date={date}
                />
                <TouchableOpacity style={{ backgroundColor: "transparent", height: 50, width: "100%", position: "absolute", top: 25 }} onPress={() => setOpen(true)}></TouchableOpacity>

                <Datepicker
                  label={evaProps => <Text {...evaProps} style={{ fontFamily: "GTWalsheimPro-Bold", marginBottom: 5 }}>Date</Text>}
                  accessoryRight={CalendarIcon}
                  size="large"
                  date={date}
                  onSelect={nextDate => setDate(nextDate)}
                  style={styles.date}
                />
                <Input
                  multiline={true}
                  textStyle={{ minHeight: 70 }}
                  label={evaProps => <Text {...evaProps} style={{ fontFamily: "GTWalsheimPro-Bold", marginBottom: 5 }}>Text Note</Text>}
                  style={{ marginTop: 30 }}
                />
              </Layout>
            </Layout>
          </Modal>
          {/* Modal End*/}
        </ScrollView>
      </Layout>
  )
}


export default DFilter;

const styles = StyleSheet.create({
  Container: {
    height: '100%',
  },
  imgTop: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    right: 40,
    top: 20,
    backgroundColor: 'transparent',
  },
  Arrow: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 20,
    left: 20,
  },
  arrow: {
    height: 30,
    width: 30,
  },
  icon1: {
    height: 30,
    width: 30,
  },
  icon2: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  UserImg: {
    height: 100,
    width: 100,
    position: 'absolute',
    marginTop: 50,
    left: 140,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#0F7BAB',
  },
  Button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
  buttontrn: {
    marginLeft: 20,
    backgroundColor: 'white',
    borderColor: '#0F7BAB',
    color: '#0F7BAB',
  },
  button: {
    marginLeft: 20,
    backgroundColor: '#0F7BAB',
    borderColor: 'transparent',
  },
  Details: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  btngroup: {
    marginTop: 20,
    marginBottom: 40,
  },
  btn: {
    backgroundColor: '#0F7BAB',
    borderColor: 'transparent',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  Notes: {
    marginHorizontal: 30,
  },
  textStyle: {
    backgroundColor: '#FFF3CE',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 30,
    width: 200,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    position: 'absolute',
    marginTop: 15,
    marginLeft: 10,
  },
  add: {
    marginTop: 20,
    left: 250,
    marginBottom: 30,
  },
  model: {
    height: "95%",
    width: "90%",

  },
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  Head: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row"
  },
  icon: {
    width: 32,
    height: 32,
  },
  icon1: {
    width: 32,
    height: 32,
    marginLeft: 60
  },
  notes: {
    marginTop: 40
  },
  date: {
    marginTop: 30
  },
  cale: {
    heigth: 25,
    width: 25
  }
});
