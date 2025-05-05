import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

// create a component
const Login = () => {

    const [isNavigating, setIsNavigating] = useState(false);
    
    return (
        <View className="flex-1 bg-background p-6 justify-center">
            {/* Título */}
            <Text className="text-white text-3xl font-bold mb-8 text-center">
                Inicio de sesión
            </Text>

            {/* Input: Correo */}
            <View className="mb-4">
                <Text className="text-textSecondary mb-2">Correo electrónico</Text>
                <TextInput
                    className="bg-card text-white p-4 rounded-lg border border-card"
                    placeholder="tu@email.com"
                    placeholderTextColor="#A0A0B0"
                    keyboardType="email-address"
                />
            </View>

            {/* Input: Contraseña */}
            <View className="mb-6">
                <Text className="text-textSecondary mb-2">Contraseña</Text>
                <TextInput
                    className="bg-card text-white p-4 rounded-lg border border-card"
                    placeholder="••••••••"
                    placeholderTextColor="#A0A0B0"
                    secureTextEntry
                />
            </View>

            {/* Botón de Login */}
            <TouchableOpacity
                className="bg-primary p-4 rounded-lg items-center mb-4"
                activeOpacity={0.8}
            >
                <Text className="text-white font-bold text-lg">Ingresar</Text>
            </TouchableOpacity>

            {/* Enlace "Olvidé mi contraseña" */}
            <TouchableOpacity>
                <Text className="text-accentLight text-center">
                    ¿Olvidaste tu contraseña?
                </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center my-6">
                <View className="flex-1 h-px bg-card" />
                <Text className="text-textSecondary px-3">o</Text>
                <View className="flex-1 h-px bg-card" />
            </View>

            {/* Botón de Registro */}
            <Link href="/auth/register" asChild
             onPress={() => {
                if (isNavigating) return;
                setIsNavigating(true);
                setTimeout(() => setIsNavigating(false), 1000); // Reset después de 1s
              }}>
                <TouchableOpacity
                    className="border border-primary p-4 rounded-lg items-center"
                    activeOpacity={0.8}
                >
                    <Text className="text-primary font-bold text-lg">Crear cuenta</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

export default Login;