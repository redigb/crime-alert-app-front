import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  // Datos de ejemplo (puedes reemplazar con tu API)
  const features = [
    {
      id: 1,
      title: "Reportes Rápidos",
      icon: "📝",
      description: "Envía alertas en tiempo real",
      route: "/report"
    },
    {
      id: 2,
      title: "Mapa de Seguridad",
      icon: "🗺️",
      description: "Zonas con mayor actividad",
      route: "/map"
    },
    {
      id: 3,
      title: "SOS Emergencia",
      icon: "🚨",
      description: "Botón de pánico inmediato",
      route: "/emergency"
    }
  ];

  return (
    <ScrollView className="flex-1 bg-background">
      {/* Header Personalizado */}
      <View className="bg-card px-6 pt-12 pb-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-white text-2xl font-bold">Bienvenido</Text>
          
            <TouchableOpacity>
              <View className="bg-primary w-10 h-10 rounded-full items-center justify-center">
                <Text className="text-white text-lg">👤</Text>
              </View>
            </TouchableOpacity>
   
        </View>
        
        <View className="bg-primary/20 p-4 rounded-lg border border-primary">
          <Text className="text-accentLight text-sm font-medium">ESTADO:</Text>
          <Text className="text-white text-lg font-bold">Todas las zonas seguras</Text>
        </View>
      </View>

      {/* Sección de Características */}
      <View className="px-6 mt-8">
        <Text className="text-white text-xl font-bold mb-4">Acciones Rápidas</Text>
        
        <View className="flex-row flex-wrap justify-between">
          {features.map((item) => (
            
              <TouchableOpacity 
                className="bg-card w-[48%] p-4 rounded-xl mb-4"
                activeOpacity={0.8}
              >
                <Text className="text-3xl mb-2">{item.icon}</Text>
                <Text className="text-white font-bold mb-1">{item.title}</Text>
                <Text className="text-textSecondary text-xs">{item.description}</Text>
              </TouchableOpacity>
           
          ))}
        </View>
      </View>

      {/* Notificaciones Recientes */}
      <View className="px-6 mt-8 mb-10">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-white text-xl font-bold">Alertas Recientes</Text>
          
            <TouchableOpacity>
              <Text className="text-accentLight text-sm">Ver todas</Text>
            </TouchableOpacity>
        
        </View>

        <View className="bg-alert/10 p-4 rounded-lg border border-alert/30 mb-3">
          <Text className="text-white font-medium mb-1">Robo en Av. Principal</Text>
          <Text className="text-textSecondary text-xs">Hace 15 min - 2km de ti</Text>
        </View>

        <View className="bg-card p-4 rounded-lg border border-card mb-3">
          <Text className="text-white font-medium mb-1">Corte de luz reportado</Text>
          <Text className="text-textSecondary text-xs">Hace 1 hora - Zona Centro</Text>
        </View>
      </View>
    </ScrollView>
  );
}