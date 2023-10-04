import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import Profile from "../screens/Profile";
import List from "../screens/List";
import { Ionicons } from "@expo/vector-icons";

export default function StackMerchRoutes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
        }}
        component={Home}
      />
      <Stack.Screen
        name="Details"
        options={{
          title: "Detalhes",
          headerShown: true,
        }}
        component={Details}
      />
      <Stack.Screen
        name="List"
        options={{
          title: "Lista",
          headerShown: true,
        }}
        component={List}
      />
      <Stack.Screen
        name="Profile"
        options={{
          title: "Perfil",
          headerShown: true,
        }}
        component={Profile}
      />
    </Stack.Navigator>
  );
}
