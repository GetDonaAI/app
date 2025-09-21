import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '@/src/constants';

export const AppleIcon: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.apple} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.background,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  apple: {
    width: 12,
    height: 12,
    backgroundColor: COLORS.foreground,
    borderRadius: 2,
  },
});
