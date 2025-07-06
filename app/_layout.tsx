import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady();
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#1f2937',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerShadowVisible: true,
        }}
      >
        <Stack.Screen 
          name="(tabs)" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="project/[id]" 
          options={{ 
            title: 'Project Details',
            headerBackTitle: 'Back'
          }} 
        />
        <Stack.Screen 
          name="designer/[id]" 
          options={{ 
            title: 'Designer Profile',
            headerBackTitle: 'Back'
          }} 
        />
        <Stack.Screen 
          name="search" 
          options={{ 
            title: 'Search',
            headerBackTitle: 'Back'
          }} 
        />
      </Stack>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}