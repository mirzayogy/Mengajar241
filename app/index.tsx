import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {

  useEffect(() => {
    setTimeout(() => {
      router.replace('/screens/LoginScreen')
    }, 2000);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Splash</Text>
    </View>
  );
}
