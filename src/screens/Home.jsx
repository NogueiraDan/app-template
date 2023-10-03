import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("List");
  };
  return (
    <View style={styles.container}>
      <Text>Tela de Home</Text>
      <Button title="Ir para List" onPress={handlePress} />
      <Button title="Ir para Profile" onPress={()=>navigation.navigate("Profile")} />
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
