import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HandjetText, OverusedGroteskText } from '@/src/components';
import { COLORS } from '@/src/constants';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HandjetText weight="medium" size={32} style={styles.title}>
        Welcome to DONA AI
      </HandjetText>
      <OverusedGroteskText weight="medium" size={16} style={styles.subtitle}>
        You are now authenticated!
      </OverusedGroteskText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: COLORS.foreground,
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    color: COLORS.foreground,
    textAlign: 'center',
    opacity: 0.8,
  },
});
