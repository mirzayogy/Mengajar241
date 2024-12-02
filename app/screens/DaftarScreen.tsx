import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

export default function DaftarScreen() {
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
            }} placeholder="Nama Lengkap"></TextInput>
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
            <TextInput style={{
                backgroundColor: 'white',
                marginBottom: 12,
                borderWidth: 1,
                borderColor: '#bbb',
                borderRadius: 10,
                paddingHorizontal: 14,
                paddingVertical: 10,
            }} placeholder="Konfirmasi Password" secureTextEntry></TextInput>
            <Pressable style={{
                backgroundColor: 'green',
                borderRadius: 8,
                padding: 8,
            }}>
                <Text>Daftar</Text>
            </Pressable>
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
