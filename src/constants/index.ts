// App constants

export const APP_NAME = 'DONA AI';
export const APP_VERSION = '1.0.0';

export const COLORS = {
  // Brand colors
  background: '#171412',
  foreground: '#FFFAEB',
  // Additional colors
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  text: '#FFFAEB',
} as const;

export const SIZES = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const FONTS = {
  handjet: {
    regular: 'Handjet_400Regular',
    medium: 'Handjet_500Medium',
    semiBold: 'Handjet_600SemiBold',
    bold: 'Handjet_700Bold',
  },
  overusedGrotesk: {
    light: 'OverusedGrotesk-Light',
    lightItalic: 'OverusedGrotesk-LightItalic',
    book: 'OverusedGrotesk-Book',
    bookItalic: 'OverusedGrotesk-BookItalic',
    roman: 'OverusedGrotesk-Roman',
    italic: 'OverusedGrotesk-Italic',
    medium: 'OverusedGrotesk-Medium',
    mediumItalic: 'OverusedGrotesk-MediumItalic',
    semiBold: 'OverusedGrotesk-SemiBold',
    semiBoldItalic: 'OverusedGrotesk-SemiBoldItalic',
    bold: 'OverusedGrotesk-Bold',
    boldItalic: 'OverusedGrotesk-BoldItalic',
    extraBold: 'OverusedGrotesk-ExtraBold',
    extraBoldItalic: 'OverusedGrotesk-ExtraBoldItalic',
    black: 'OverusedGrotesk-Black',
    blackItalic: 'OverusedGrotesk-BlackItalic',
  },
} as const;
