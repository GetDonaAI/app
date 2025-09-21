import * as Font from 'expo-font';

export const loadCustomFonts = async () => {
  const fontMap = {
    'OverusedGrotesk-Light': require('../../assets/fonts/OverusedGrotesk-Light.ttf'),
    'OverusedGrotesk-LightItalic': require('../../assets/fonts/OverusedGrotesk-LightItalic.ttf'),
    'OverusedGrotesk-Book': require('../../assets/fonts/OverusedGrotesk-Book.ttf'),
    'OverusedGrotesk-BookItalic': require('../../assets/fonts/OverusedGrotesk-BookItalic.ttf'),
    'OverusedGrotesk-Roman': require('../../assets/fonts/OverusedGrotesk-Roman.ttf'),
    'OverusedGrotesk-Italic': require('../../assets/fonts/OverusedGrotesk-Italic.ttf'),
    'OverusedGrotesk-Medium': require('../../assets/fonts/OverusedGrotesk-Medium.ttf'),
    'OverusedGrotesk-MediumItalic': require('../../assets/fonts/OverusedGrotesk-MediumItalic.ttf'),
    'OverusedGrotesk-SemiBold': require('../../assets/fonts/OverusedGrotesk-SemiBold.ttf'),
    'OverusedGrotesk-SemiBoldItalic': require('../../assets/fonts/OverusedGrotesk-SemiBoldItalic.ttf'),
    'OverusedGrotesk-Bold': require('../../assets/fonts/OverusedGrotesk-Bold.ttf'),
    'OverusedGrotesk-BoldItalic': require('../../assets/fonts/OverusedGrotesk-BoldItalic.ttf'),
    'OverusedGrotesk-ExtraBold': require('../../assets/fonts/OverusedGrotesk-ExtraBold.ttf'),
    'OverusedGrotesk-ExtraBoldItalic': require('../../assets/fonts/OverusedGrotesk-ExtraBoldItalic.ttf'),
    'OverusedGrotesk-Black': require('../../assets/fonts/OverusedGrotesk-Black.ttf'),
    'OverusedGrotesk-BlackItalic': require('../../assets/fonts/OverusedGrotesk-BlackItalic.ttf'),
  };

  return Font.loadAsync(fontMap);
};
