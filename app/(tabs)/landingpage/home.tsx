import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase-client';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false); // Track if user is logged in

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        setIsActive(true); // Session active
      } else {
        setIsActive(false);
        router.replace('/(tabs)/login/login-user');
      }
    };

    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsActive(!!session); // true if session exists
        if (!session) router.replace('/(tabs)/login/login-user');
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* StatusBar */}
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
          paddingHorizontal: 16,
          position: 'relative',
        }}
      >
        {/* Left side: template image + Active */}
        {isActive && (
          <View style={{ position: 'absolute', left: 16, flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../../assets/images/android-icon-monochrome.png')}
              style={{ width: 24, height: 24, marginRight: 6 }}
            />
            <Text style={{ fontSize: 14, fontWeight: '600', color: 'green' }}>Active</Text>
          </View>
        )}

        {/* Center: Header title */}
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Note App</Text>

        {/* Right side: Logout */}
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            position: 'absolute',
            right: 16,
            padding: 8,
            backgroundColor: '#FF3B30',
            borderRadius: 6,
          }}
        >
          <Text style={{ color: 'white', fontSize: 14 }}>Logout?</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>{isActive ? 'Session Active' : 'Not Logged In'}</Text>
      </View>
    </SafeAreaView>
  );
}
