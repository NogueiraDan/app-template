import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import StackMerchRoutes from "./StackMerchRoutes";
import StackOrderRoutes from "./StackOrderRoutes";
import Wishlist from "../screens/Wishlist";

export default function TabMainRoutes() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="StackMerchRoutes" component={StackMerchRoutes} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="StackOrderRoutes" component={StackOrderRoutes} />
    </Tab.Navigator>
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
