import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from '../PScreen/SplashScreen';
import Loader from '../PScreen/Loader';
import Login from '../PScreen/Login';
import OTPScreen from '../PScreen/OTPScreen';
import SucessScreen from '../PScreen/SucessScreen';
import BottomNavigator from './BottomNavigator';
import OnBoarding from '../PScreen/OnBoarding';
import ALoader from '../PScreen/ALoader';
import DLogin from '../DScreen/DLogin';
import DOTPScreen from '../DScreen/DOTPScreen'
import DSuccess from '../DScreen/DSuccess'
import AddNotes from '../DScreen/AddNotes'
import DoctorBottomTab from './DoctorBottomTab'
import DDetails from '../DScreen/DDetails'
import DFilter from '../DScreen/DFilter';
import PatientDetail from '../DScreen/PatientDetail'
import DPatientChat from '../DScreen/DPatientChat';
import PatientChat from '../PScreen/PatientChat';

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  const [showSplashScreen, setSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 4000);
  }, []);
  return (
    <RootStack.Navigator>
      {showSplashScreen ? (
        <RootStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      ) : null}
      <RootStack.Screen
        name="Loader"
        component={Loader}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="SucessScreen"
        component={SucessScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ALoader"
        component={ALoader}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="DLogin"
        component={DLogin}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="DOTPScreen"
        component={DOTPScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="DSuccess"
        component={DSuccess}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="PatientChat"
        component={PatientChat}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Details"
        component={DDetails}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="DFilter"
        component={DFilter}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="PatientDetail"
        component={PatientDetail}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="DPatientChat"
        component={DPatientChat}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="DoctorBottomTab"
        component={DoctorBottomTab}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}


export default RootStackNavigator