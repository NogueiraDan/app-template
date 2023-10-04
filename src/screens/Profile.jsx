import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Home");
  };
  const handleLogout = ()=>{
    navigation.reset({
      index: 0,
      routes: [{ name: "StackAuthRoutes" }],
    });
  }
  return (
    <View style={styles.container}>
      <Text>Tela de Profile</Text>
      <Button title="Voltar para Home" onPress={handlePress} />
      <Button title="Fazer Logout" onPress={handleLogout}/>
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
