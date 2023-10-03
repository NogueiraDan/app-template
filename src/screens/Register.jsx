import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Register() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handlePress = () => {
    navigation.navigate("Login");
  };
  const handleStack = () => {
    if (!nome && !email && !senha) {
      alert("Digite algo");
      return;
    }
    Alert.alert("Nome: "+nome+"\n"+"Email: "+email+"\n"+"Senha: "+senha)
    setNome("")
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
      <Text>Tela de Register</Text>
      <Button title="Ir para Login" onPress={handlePress} />
      <TextInput
        style={styles.input}
        placeholder="Nome*"
        value={nome}
        onChangeText={setNome}
      />

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
