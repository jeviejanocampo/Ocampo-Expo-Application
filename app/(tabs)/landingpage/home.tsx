import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase-client';
import dayjs from 'dayjs'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/app/lib/styles/home-design';

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

      <StatusBar barStyle="dark-content" backgroundColor="white" />

    <View style={styles.headerContainer}>
      {isActive && (
        <View style={styles.leftActiveContainer}>
          <Image
            source={require('../../../assets/images/android-icon-monochrome.png')}
            style={styles.activeImage}
          />
          <Text style={styles.activeText}>Active</Text>
        </View>
      )}
      <Text style={styles.headerTitle}>Note App</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout?</Text>
      </TouchableOpacity>
    </View>
    
     <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.hiddenId}>card-1</Text>
        <Text style={styles.cardHeader}>Card Header 1</Text>
        <Text style={styles.cardSubtext}>This is the subtext for card 1.</Text>
        <Text style={styles.cardTimestamp}>{new Date().toLocaleString()}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.hiddenId}>card-2</Text>
        <Text style={styles.cardHeader}>Card Header 2</Text>
        <Text style={styles.cardSubtext}>This is the subtext for card 2.</Text>
        <Text style={styles.cardTimestamp}>{new Date().toLocaleString()}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.hiddenId}>card-3</Text>
        <Text style={styles.cardHeader}>Card Header 3</Text>
        <Text style={styles.cardSubtext}>This is the subtext for card 3.</Text>
        <Text style={styles.cardTimestamp}>{new Date().toLocaleString()}</Text>
      </View>
    </View>

    </SafeAreaView>
  );
}
