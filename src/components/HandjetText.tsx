import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { FONTS } from '@/src/constants';

interface HandjetTextProps extends TextProps {
  weight?: 'regular' | 'medium' | 'semiBold' | 'bold';
  size?: number;
}

export const HandjetText: React.FC<HandjetTextProps> = ({
  weight = 'regular',
  size = 16,
  style,
  children,
  ...props
}) => {
  const fontFamily = FONTS.handjet[weight];

  return (
    <Text
      style={[
        styles.text,
        {
          fontFamily,
          fontSize: size,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    // Default text styles can be added here
  },
});
