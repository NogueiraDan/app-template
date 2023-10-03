import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import Profile from "../screens/Profile";
import List from "../screens/List";

export default function StackMerchRoutes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
