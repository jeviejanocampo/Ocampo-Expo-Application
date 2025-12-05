import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ViewNote() {
  const router = useRouter();

  // ✅ Correct hook in Expo Router
  const params = useLocalSearchParams() as { id?: string };
  const displayId = params.id || 'unknown';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
          paddingHorizontal: 16,
        }}
      >
        <TouchableOpacity onPress={() => router.push('/(tabs)/landingpage/home')}>
          <Text style={{ fontSize: 16, color: '#007AFF' }}>Back</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 20, fontWeight: 'bold', flex: 1, textAlign: 'center' }}>
          View Note — ID: {displayId}
        </Text>
      </View>

      {/* Body */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18 }}>Viewing note with ID: {displayId}</Text>
      </View>
    </SafeAreaView>
  );
}
