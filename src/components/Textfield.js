import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const TextField = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login here </Text>
      <View>
        <TextInput placeholder="Email" />
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Signup</Text>
        </TouchableOpacity>
        <TextInput placeholder="Password" />
      </View>
    </View>
  );
};

export default TextField;
