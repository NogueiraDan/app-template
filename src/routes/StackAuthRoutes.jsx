import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "../screens/OnBoarding";
import Login from "../screens/Login";
import Register from "../screens/Register";

export default function StackAuthRoutes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
