import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
const queryClient = new QueryClient();
import Login from "./src/Screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <SafeAreaProvider style={{ flex: 1 }}>
            <Stack.Screen name="Login" component={Login} />
          </SafeAreaProvider>
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
