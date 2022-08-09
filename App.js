import React from 'react'
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AppNavigator from './src/Routes/AppNavigator';
//import AddNotes from './src/DScreen/AddNotes';
//import DFilter from './src/DScreen/DFilter'
//import OnBoarding from './src/PScreen/OnBoarding'

const App = () => {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider  {...eva} theme={eva.light}>
    <AppNavigator/>
    </ApplicationProvider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
