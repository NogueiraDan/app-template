import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Checkout() {
  
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Cart");
  };
  return (
    <View style={styles.container}>
      <Text>Tela de Checkout</Text>
      <Button title="Voltar para o Cart" onPress={handlePress} />
      <Button title="Finalizar Compra" onPress={()=>Alert.alert("Comprou")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
