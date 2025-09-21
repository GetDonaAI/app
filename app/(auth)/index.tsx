import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Pressable,
  Animated,
  Dimensions,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { HandjetText, OverusedGroteskText, GoogleIcon } from '@/src/components';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/src/constants';

export default function AuthScreen() {
  // Get safe area insets for proper spacing
  const insets = useSafeAreaInsets();
  
  // Get screen dimensions for responsive design
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  
  // Calculate available height after safe area insets
  const availableHeight = screenHeight - insets.top - insets.bottom;
  
  // Calculate responsive dimensions
  const containerWidth = Math.min(screenWidth * 0.95, 382); // 95% of screen width, max 382px
  const buttonWidth = containerWidth - 20; // 20px padding from container
  
  // Calculate heights based on available space
  const titleHeight = availableHeight * 0.3;
  const buttonsContainerHeight = availableHeight * 0.7;
  
  // Original design dimensions for scaling
  const originalGap = 10;
  const originalPadding = 10;
  const originalButtonHeight = 100;
  const originalLoginLinkHeight = 96;
  const originalButtonPadding = 36;
  const originalButtonHorizontalPadding = 10;
  const originalFooterHeight = 62;
  const originalFooterPadding = 24;
  const originalFooterGap = 59;
  
  // Calculate scale factor based on screen width
  const scaleFactor = Math.min(screenWidth / 400, 1);
  
  // Apply scaling to maintain proportions
  const gap = originalGap * scaleFactor;
  const padding = originalPadding * scaleFactor;
  const buttonHeight = originalButtonHeight * scaleFactor;
  const loginLinkHeight = originalLoginLinkHeight * scaleFactor;
  const buttonPadding = originalButtonPadding * scaleFactor;
  const buttonHorizontalPadding = originalButtonHorizontalPadding * scaleFactor;
  const footerHeight = originalFooterHeight * scaleFactor;
  const footerPadding = originalFooterPadding * scaleFactor;
  const footerGap = originalFooterGap * scaleFactor;
  
  // Animation values for each button
  const appleScale = useRef(new Animated.Value(1)).current;
  const googleScale = useRef(new Animated.Value(1)).current;
  const emailScale = useRef(new Animated.Value(1)).current;
  const loginScale = useRef(new Animated.Value(1)).current;

  const animatePress = (scaleValue: Animated.Value, callback: () => void) => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    callback();
  };

  const handleAppleLogin = () => {
    animatePress(appleScale, () => {
      console.log('Apple login pressed');
      // TODO: Implement Apple authentication
      router.replace('/(tabs)');
    });
  };

  const handleGoogleLogin = () => {
    animatePress(googleScale, () => {
      console.log('Google login pressed');
      // TODO: Implement Google authentication
      router.replace('/(tabs)');
    });
  };

  const handleEmailLogin = () => {
    animatePress(emailScale, () => {
      console.log('Email login pressed');
      router.push('/(auth)/email-login');
    });
  };

  const handleGuestLogin = () => {
    animatePress(loginScale, () => {
      console.log('Guest login pressed');
      router.replace('/(tabs)');
    });
  };

  const handlePrivacyPolicy = () => {
    console.log('Privacy Policy pressed');
    // TODO: Open privacy policy
  };

  const handleTermsOfService = () => {
    console.log('Terms of Service pressed');
    // TODO: Open terms of service
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <View style={styles.container}>
        {/* Container 1: DONA AI Title - 30% of available height */}
        <View style={[styles.titleContainer, { 
          width: containerWidth, 
          height: titleHeight,
          marginTop: insets.top 
        }]}>
          <HandjetText 
            weight="medium" 
            size={48 * scaleFactor} 
            style={styles.title}
          >
            DONA AI
          </HandjetText>
        </View>

        {/* Container 2: Buttons and Footer - 70% of available height */}
        <View style={[styles.buttonsContainer, { 
          width: containerWidth, 
          height: buttonsContainerHeight,
          padding: padding,
          marginBottom: insets.bottom
        }]}>
          {/* Buttons Wrapper */}
          <View style={[styles.buttonsWrapper, { gap: 16 * scaleFactor, paddingBottom: gap }]}>
            {/* Apple Login Button */}
            <Animated.View style={{ transform: [{ scale: appleScale }] }}>
              <TouchableOpacity
                style={[styles.loginButton, { 
                  width: buttonWidth, 
                  height: buttonHeight,
                  paddingTop: buttonPadding,
                  paddingRight: buttonHorizontalPadding,
                  paddingBottom: buttonPadding,
                  paddingLeft: buttonHorizontalPadding,
                  gap: gap
                }]}
                onPress={handleAppleLogin}
                activeOpacity={1}
              >
                <View style={[styles.buttonContent, { gap: gap }]}>
                  <Ionicons name="logo-apple" size={20 * scaleFactor} color={COLORS.background} />
                  <OverusedGroteskText
                    weight="medium"
                    size={16 * scaleFactor}
                    style={styles.buttonText}
                  >
                    Continue with Apple
                  </OverusedGroteskText>
                </View>
              </TouchableOpacity>
            </Animated.View>

            {/* Google Login Button */}
            <Animated.View style={{ transform: [{ scale: googleScale }] }}>
              <TouchableOpacity
                style={[styles.loginButton, { 
                  width: buttonWidth, 
                  height: buttonHeight,
                  paddingTop: buttonPadding,
                  paddingRight: buttonHorizontalPadding,
                  paddingBottom: buttonPadding,
                  paddingLeft: buttonHorizontalPadding,
                  gap: gap
                }]}
                onPress={handleGoogleLogin}
                activeOpacity={1}
              >
                <View style={[styles.buttonContent, { gap: gap }]}>
                  <GoogleIcon size={20 * scaleFactor} />
                  <OverusedGroteskText
                    weight="medium"
                    size={16 * scaleFactor}
                    style={styles.buttonText}
                  >
                    Continue with Google
                  </OverusedGroteskText>
                </View>
              </TouchableOpacity>
            </Animated.View>

            {/* Email Login Button */}
            <Animated.View style={{ transform: [{ scale: emailScale }] }}>
              <TouchableOpacity
                style={[styles.loginButton, { 
                  width: buttonWidth, 
                  height: buttonHeight,
                  paddingTop: buttonPadding,
                  paddingRight: buttonHorizontalPadding,
                  paddingBottom: buttonPadding,
                  paddingLeft: buttonHorizontalPadding,
                  gap: gap
                }]}
                onPress={handleEmailLogin}
                activeOpacity={1}
              >
                <View style={[styles.buttonContent, { gap: gap }]}>
                  <Ionicons name="mail" size={20 * scaleFactor} color={COLORS.background} />
                  <OverusedGroteskText
                    weight="medium"
                    size={16 * scaleFactor}
                    style={styles.buttonText}
                  >
                    Continue with Email
                  </OverusedGroteskText>
                </View>
              </TouchableOpacity>
            </Animated.View>

            {/* Login Link */}
            <Animated.View style={{ transform: [{ scale: loginScale }] }}>
              <TouchableOpacity 
                style={[styles.loginLink, { 
                  width: buttonWidth, 
                  height: loginLinkHeight,
                  paddingTop: buttonPadding,
                  paddingRight: buttonHorizontalPadding,
                  paddingBottom: buttonPadding,
                  paddingLeft: buttonHorizontalPadding,
                  gap: gap
                }]} 
                onPress={handleGuestLogin}
                activeOpacity={1}
              >
                <OverusedGroteskText
                  weight="medium"
                  size={16 * scaleFactor}
                  style={styles.loginLinkText}
                >
                  Skip! Continue as Guest
                </OverusedGroteskText>
              </TouchableOpacity>
            </Animated.View>
          </View>

          {/* Footer Links Container */}
          <View style={[styles.footerContainer, { 
            width: buttonWidth,
            minHeight: footerHeight,
            paddingTop: footerPadding,
            paddingBottom: footerPadding,
            gap: footerGap,
            marginTop: gap
          }]}>
            <Pressable onPress={handlePrivacyPolicy}>
              <OverusedGroteskText
                weight="medium"
                size={14 * scaleFactor}
                style={styles.footerLink}
              >
                Privacy Policy
              </OverusedGroteskText>
            </Pressable>
            <Pressable onPress={handleTermsOfService}>
              <OverusedGroteskText
                weight="medium"
                size={14 * scaleFactor}
                style={styles.footerLink}
              >
                Terms of Service
              </OverusedGroteskText>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  // Container 1: DONA AI Title - 30% of available height
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: COLORS.foreground,
    textAlign: 'center',
  },
  // Container 2: Buttons and Footer - 70% of available height
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  // Buttons wrapper for proper spacing
  buttonsWrapper: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  // First 3 buttons (Apple, Google, Email)
  loginButton: {
    backgroundColor: COLORS.foreground,
    borderRadius: 88,
    borderWidth: 1,
    borderColor: COLORS.foreground,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  buttonText: {
    color: COLORS.background,
    fontFamily: 'OverusedGrotesk-Roman',
    fontWeight: '400',
    lineHeight: 18, // Balanced line height
    letterSpacing: 0,
    textAlign: 'center',
  },
  // 4th button (Login Link)
  loginLink: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.foreground,
    borderRadius: 88,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginLinkText: {
    color: COLORS.foreground,
    textAlign: 'center',
    fontFamily: 'OverusedGrotesk-Roman',
    fontWeight: '400',
    lineHeight: 18, // Balanced line height
    letterSpacing: 0,
  },
  // Terms and Privacy section
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLink: {
    color: COLORS.foreground,
    opacity: 0.8,
  },
});
