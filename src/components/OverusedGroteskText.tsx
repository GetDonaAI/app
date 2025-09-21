import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { FONTS } from '@/src/constants';

type OverusedGroteskWeight =
  | 'light'
  | 'lightItalic'
  | 'book'
  | 'bookItalic'
  | 'roman'
  | 'italic'
  | 'medium'
  | 'mediumItalic'
  | 'semiBold'
  | 'semiBoldItalic'
  | 'bold'
  | 'boldItalic'
  | 'extraBold'
  | 'extraBoldItalic'
  | 'black'
  | 'blackItalic';

interface OverusedGroteskTextProps extends TextProps {
  weight?: OverusedGroteskWeight;
  size?: number;
}

export const OverusedGroteskText: React.FC<OverusedGroteskTextProps> = ({
  weight = 'roman',
  size = 16,
  style,
  children,
  ...props
}) => {
  const fontFamily = FONTS.overusedGrotesk[weight];

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
