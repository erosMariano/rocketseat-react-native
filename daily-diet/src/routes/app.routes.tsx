import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Statistics from "@screens/Estatisticas";
import Home from "@screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  );
}
