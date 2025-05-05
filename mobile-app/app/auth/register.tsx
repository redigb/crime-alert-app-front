import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Register() {
  return (
    <View className="flex-1 bg-background p-6 justify-center">
      {/* Título */}
      <Text className="text-white text-3xl font-bold mb-8 text-center">
        Crear cuenta
      </Text>

      {/* Input: Nombre */}
      <View className="mb-4">
        <Text className="text-textSecondary mb-2">Nombre completo</Text>
        <TextInput
          className="bg-card text-white p-4 rounded-lg border border-card"
          placeholder="Ej: Juan Pérez"
          placeholderTextColor="#A0A0B0"
        />
      </View>

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
      <View className="mb-4">
        <Text className="text-textSecondary mb-2">Contraseña</Text>
        <TextInput
          className="bg-card text-white p-4 rounded-lg border border-card"
          placeholder="••••••••"
          placeholderTextColor="#A0A0B0"
          secureTextEntry
        />
      </View>

      {/* Input: Confirmar Contraseña */}
      <View className="mb-6">
        <Text className="text-textSecondary mb-2">Confirmar contraseña</Text>
        <TextInput
          className="bg-card text-white p-4 rounded-lg border border-card"
          placeholder="••••••••"
          placeholderTextColor="#A0A0B0"
          secureTextEntry
        />
      </View>

      {/* Botón de Registro */}
      <TouchableOpacity
        className="bg-primary p-4 rounded-lg items-center mb-4"
        activeOpacity={0.8}
      >
        <Text className="text-white font-bold text-lg">Registrarse</Text>
      </TouchableOpacity>

      {/* Enlace a Login */}
      <View className="flex-row justify-center">
        <Text className="text-textSecondary mr-1">¿Ya tienes cuenta?</Text>
        <Link href="/auth/login" asChild>
          <TouchableOpacity>
            <Text className="text-accentLight font-medium">Inicia sesión</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}