import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase-client';

export default function Home() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data.user) {
        setUserEmail(data.user.email || null);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/home/login-user');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Hello {userEmail || 'User'}
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#FF3B30',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
        }}
        onPress={handleLogout}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
