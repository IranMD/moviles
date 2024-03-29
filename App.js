import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  View
} from "native-base";
import { StyleSheet} from "react-native";
import C from "./components/C";
import CBox from "./components/CBox";
import Centrado from "./components/Centrado";
import Login from "./components/Login";
import Xd from "./components/xd";
import LoginScreen from "./components/LoginScreen";
import PreLogin from "./components/PreLogin";
import SplashScreen from "./components/SplashScreen";
import HomePageAdmin from "./components/HomePageAdmin";
import theme from './components/theme';
import BackordersScreen from "./components/BackordersScreen";
import UsersScreen from "./components/UsersScreen";
import MenuScreen from "./components/MenuScreen";
import AddDishScreen from "./components/AddDishScreen";
import EditDishScreen from "./components/EditDishScreen";
import MenuCategoriesScreen from "./components/MenuCategoriesScreen";
import TableScreen from "./components/TableScreen";
import HomePageWaiter from "./components/HomePageWaiter";
import DetailsTableScreen from "./components/DetailsTableScreen";
import MealDetail from "./components/MealDetail";
import HomePageChef from "./components/HomePageChef";
import SignIn from "./components/SignIn";
import LoginMoviles from "./components/LoginMoviles";


// extend the theme
/*export const theme = extendTheme({ colors: {
  // Add new color
  color: {
    DARK_PRIMARY: '#29353C',
    LIGHT_PRIMARY: '#AAC7D8',
    PRIMARY: '#44576D',
    TEXT_ICONS: '#FFFFFF',
    ACCENT: '#768A96',
    PRIMARY_TEXT: '#212121',
    SECONDARY_TEXT: '#757575',
    DIVIDER : '#BDBDBD',
  },
  // Redefining only one shade, rest of the color will remain same.
  amber: {
    400: '#d97706',
  },
},
config: {
  // Changing initialColorMode to 'dark'
  initialColorMode: 'dark',
}, });*/

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.mainContainer}>
        <TableScreen/>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
      flex: 1,
      backgroundColor: theme.background_color,
  }
})