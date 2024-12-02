import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TextInput style={{
                backgroundColor: 'white',
                marginBottom: 12,
                borderWidth: 1,
                borderColor: '#bbb',
                borderRadius: 10,
                paddingHorizontal: 14,
                paddingVertical: 10,
            }} placeholder="Username"></TextInput>
            <TextInput style={{
                backgroundColor: 'white',
                marginBottom: 12,
                borderWidth: 1,
                borderColor: '#bbb',
                borderRadius: 10,
                paddingHorizontal: 14,
                paddingVertical: 10,
            }} placeholder="Password" secureTextEntry></TextInput>
            <Pressable style={{
                backgroundColor: 'green',
                borderRadius: 8,
                padding: 8,
            }}>
                <Text>Login</Text>
            </Pressable>

            <Pressable
                onPress={() =>
                    router.push({
                        pathname: "/screens/LupaPasswordScreen",
                    })}
                style={{
                    borderRadius: 8,
                    padding: 8,
                }}>
                <Text>Lupa Password</Text>
            </Pressable>
            <Pressable
                style={{
                    borderRadius: 8,
                    padding: 8,
                }}
                onPress={() =>
                    router.push({
                        pathname: "/screens/DaftarScreen",
                    })
                }>
                <Text>Mendaftar</Text>
            </Pressable>
        </View>
    );
}
