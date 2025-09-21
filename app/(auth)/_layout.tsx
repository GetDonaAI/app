import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'ios' ? 'slide_from_right' : 'fade',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Authentication'
        }} 
      />
      <Stack.Screen 
        name="email-login" 
        options={{ 
          title: 'Email Login',
          animation: Platform.OS === 'ios' ? 'slide_from_right' : 'fade',
        }} 
      />
    </Stack>
  );
}
