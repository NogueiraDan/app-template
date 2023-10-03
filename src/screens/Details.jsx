import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Details() {
  
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text>Tela de Details</Text>
      <Button title="Voltar para Home" onPress={handlePress} />
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
