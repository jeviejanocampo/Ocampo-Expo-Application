import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase-client';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/app/lib/styles/home-design';

export default function Home() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false); // Track if user is logged in
  const [defaultCardId, setDefaultCardId] = useState<string | null>(null); // Will hold the Supabase UID

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        console.log("USER UID:", data.user.id); // Console log UID
        setDefaultCardId(data.user.id);         // Set UID to state
        setIsActive(true);
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

  // If UID not loaded yet, show loading
  if (!defaultCardId) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.headerContainer}>
        {isActive && (
          <View style={styles.leftActiveContainer}>
            <Image
              source={require('../../../assets/images/android-icon-monochrome.png')}
              style={styles.activeImage}
            />
            <Text style={styles.activeText}>Active Now n</Text>
          </View>
        )}
        <Text style={styles.headerTitle}>Note App Version 2 Lol lol</Text>
        <Text style={styles.headerTitle}>Note App Version 2 Lol</Text>

        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: '/(tabs)/note/view-note',
              params: { id: defaultCardId }, // Pass UID dynamically
            })
          }
        >
          <Text style={styles.hiddenId}>{defaultCardId}</Text>
          <Text style={styles.cardHeader}>Card Header 1</Text>
          <Text style={styles.cardSubtext}>This is the subtext for card 1.</Text>
          <Text style={styles.cardTimestamp}>{new Date().toLocaleString()}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
