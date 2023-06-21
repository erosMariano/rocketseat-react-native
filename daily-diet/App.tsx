import { ThemeProvider } from "styled-components";
import Home from "./src/screens/Home";
import theme from "@theme/index";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import {
  NunitoSans_700Bold,
  NunitoSans_400Regular,
} from "@expo-google-fonts/nunito-sans";
import Loading from "@components/Loading";
export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"dark-content"}
        translucent
        backgroundColor={"transparent"}
      />

      {fontsLoaded ? <Home/> : <Loading/>}
    </ThemeProvider>
  );
}
