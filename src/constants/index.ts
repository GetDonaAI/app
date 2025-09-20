// App constants

export const APP_NAME = 'ADHD App';
export const APP_VERSION = '1.0.0';

export const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  background: '#F2F2F7',
  text: '#000000',
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
} as const;
