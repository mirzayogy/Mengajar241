import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

export default function LupaPasswordScreen() {
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
            }} placeholder="Email"></TextInput>
            <Pressable
                onPress={() =>
                    router.back()}
                style={{
                    backgroundColor: 'green',
                    borderRadius: 8,
                    padding: 8,
                }}>
                <Text>Kembali</Text>
            </Pressable>
        </View>
    );
}
