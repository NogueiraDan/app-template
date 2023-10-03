import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cart() {
  
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Checkout");
  };
  return (
    <View style={styles.container}>
      <Text>Tela de Cart</Text>
      <Button title="Ir para o Checkout" onPress={handlePress} />
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
