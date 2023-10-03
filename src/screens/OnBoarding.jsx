import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OnBoarding() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Text>Tela de OnBoarding</Text>
      <Button title="Ir para a proxima tela" onPress={handlePress} />
      <StatusBar style="auto" />
    </View>
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
