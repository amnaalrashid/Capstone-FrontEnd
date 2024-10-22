import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const TextField = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register to start managing your pet's health and happiness in one place.</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm password" secureTextEntry />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f4f8", // Light background color
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#333", // Dark text color
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderColor: "#e0a3a3", // Light red border color
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f8d7da", // Light red background for inputs
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#e67e22", // Button color
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default TextField;
