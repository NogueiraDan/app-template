import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";

export default function StackOrderRoutes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}
