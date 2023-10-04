import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import StackMerchRoutes from "./StackMerchRoutes";
import StackOrderRoutes from "./StackOrderRoutes";
import Wishlist from "../screens/Wishlist";

export default function TabMainRoutes() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "black",
        // tabBarStyle: {
        //   backgroundColor: "#0c734c",
        //   borderTopWidth: 0,
        // },
      }}
    >
      <Tab.Screen
        name="StackMerchRoutes"
        component={StackMerchRoutes}
        options={{
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color="#000" size={size} />;
            }

            return <Ionicons name="home-outline" color="#003" size={size} />;
          },
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        options={{
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Ionicons name="heart" color="#000" size={size} />;
            }

            return <Ionicons name="heart-outline" color="#003" size={size} />;
          },
          tabBarLabel: "Favoritos",
          headerShown: false,
        }}
        component={Wishlist}
      />
      <Tab.Screen
        name="StackOrderRoutes"
        options={{
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Ionicons name="cart" color="#000" size={size} />;
            }

            return <Ionicons name="cart-outline" color="#003" size={size} />;
          },
          tabBarLabel: "Carrinho",
          headerShown: false,
        }}
        component={StackOrderRoutes}
      />
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
