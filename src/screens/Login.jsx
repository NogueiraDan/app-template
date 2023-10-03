import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handlePress = () => {
    navigation.navigate("Register");
  };
  const handleStack = () => {
    if (!senha && !email) {
      alert("Digite algo");
      return;
    }
    Alert.alert("Email: "+email+"\n"+"Senha: "+senha)
    setEmail("")
    setSenha("")
    navigation.reset({
      index: 0,
      routes: [{ name: "TabMainRoutes" }],
    });
    //navigation.navigate("TabMainRoutes");
  };
  return (
    <View style={styles.container}>
      <Text>Tela de Login</Text>
      <Button title="Ir para Register" onPress={handlePress} />
      <TextInput
        style={styles.input}
        placeholder="Email*"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha*"
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Acessar Stack Merch" onPress={handleStack} />
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
  input: {
    minWidth: "90%",
    margin: 6,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#C6C6C6",
  },
});
