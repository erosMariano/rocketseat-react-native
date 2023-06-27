import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditSnack from "@screens/EditSnack";
import Statistics from "@screens/Estatisticas";
import FeedbackCreate from "@screens/Feedback";
import Home from "@screens/Home";
import NewSnack from "@screens/NewSnack";
import Snack from "@screens/Snack";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newSnack" component={NewSnack} />
      <Screen name="feedbackCreate" component={FeedbackCreate} />
      <Screen name="snack" component={Snack} />
      <Screen name="editSnack" component={EditSnack} />
    </Navigator>
  );
}
