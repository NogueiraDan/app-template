import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StackAuthRoutes from "./src/routes/StackAuthRoutes";
import TabMainRoutes from "./src/routes/TabMainRoutes";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StackAuthRoutes"
          options={{
            headerShown: false,
          }}
          component={StackAuthRoutes}
        />
        <Stack.Screen
          name="TabMainRoutes"
          options={{
            headerShown: false,
          }}
          component={TabMainRoutes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
