import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { HandjetText } from '@/src/components';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/src/constants';

export default function EmailLoginScreen() {
  const insets = useSafeAreaInsets();
  const { width: screenWidth } = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [emailError, setEmailError] = useState('');

  // Calculate responsive dimensions
  const containerWidth = Math.min(screenWidth * 0.95, 382);
  const buttonWidth = containerWidth - 20;
  const scaleFactor = Math.min(screenWidth / 400, 1);

  // Android-specific responsive adjustments
  const isAndroid = Platform.OS === 'android';
  const androidScaleFactor = isAndroid
    ? Math.min(screenWidth / 360, 1)
    : scaleFactor;

  // Handle keyboard events for Android
  useEffect(() => {
    if (isAndroid) {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        e => {
          setKeyboardHeight(e.endCoordinates.height);
        }
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardHeight(0);
        }
      );

      return () => {
        keyboardDidShowListener?.remove();
        keyboardDidHideListener?.remove();
      };
    }
  }, [isAndroid]);

  // Animation values
  const backButtonScale = useRef(new Animated.Value(1)).current;
  const continueButtonScale = useRef(new Animated.Value(1)).current;

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

  const handleBackPress = () => {
    animatePress(backButtonScale, () => {
      router.back();
    });
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContinue = () => {
    animatePress(continueButtonScale, () => {
      // Clear previous error
      setEmailError('');

      // Validate email
      if (!email.trim()) {
        setEmailError('EMAIL IS REQUIRED');
        return;
      }

      if (!validateEmail(email)) {
        setEmailError('PLEASE ENTER A VALID EMAIL');
        return;
      }

      console.log('Continue with email:', email);
      // Navigate to OTP verification screen
      router.push(
        `/(auth)/otp-verification?email=${encodeURIComponent(email)}`
      );
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        {/* Top Section - Back Button */}
        <View style={[styles.topSection, { marginTop: insets.top }]}>
          <Animated.View style={{ transform: [{ scale: backButtonScale }] }}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackPress}
              activeOpacity={1}
            >
              <Ionicons
                name="chevron-back"
                size={24}
                color={COLORS.foreground}
              />
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* Middle Section - DONA AI Title */}
        <View style={styles.middleSection}>
          <HandjetText
            weight="medium"
            size={48 * androidScaleFactor}
            style={[styles.title, { letterSpacing: 10 * androidScaleFactor }]}
          >
            DONA AI
          </HandjetText>
        </View>

        {/* Bottom Section - Email Input and Continue Button */}
        <View
          style={[
            styles.bottomSection,
            {
              paddingBottom: keyboardHeight > 0 && isAndroid ? 20 : 10,
              marginBottom: keyboardHeight > 0 && isAndroid ? 20 : 0,
            },
          ]}
        >
          {/* Email Input Group - Error + Input */}
          <View style={styles.emailGroup}>
            {/* Error Message */}
            {emailError ? (
              <View
                style={[
                  styles.errorContainer,
                  { width: buttonWidth, alignSelf: 'center' },
                ]}
              >
                <HandjetText
                  weight="regular"
                  size={16 * androidScaleFactor}
                  style={styles.errorText}
                >
                  {emailError}
                </HandjetText>
              </View>
            ) : null}

            {/* Email Input Field */}
            <View
              style={[
                styles.emailInputContainer,
                { width: buttonWidth, alignSelf: 'center' },
              ]}
            >
              <TextInput
                style={[
                  styles.emailInput,
                  { fontSize: 20 * androidScaleFactor },
                ]}
                placeholder={isFocused ? '' : 'ENTER YOU EMAIL'}
                placeholderTextColor="#525252"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                textAlignVertical="center"
                selectionColor={COLORS.foreground}
                multiline={false}
                numberOfLines={1}
                onFocus={() => {
                  setIsFocused(true);
                  setEmailError(''); // Clear error when user starts typing
                }}
                onBlur={() => setIsFocused(false)}
              />
            </View>
          </View>

          {/* Continue Button */}
          <Animated.View
            style={{ transform: [{ scale: continueButtonScale }] }}
          >
            <TouchableOpacity
              style={[
                styles.continueButton,
                {
                  width: buttonWidth,
                  paddingVertical: 36 * androidScaleFactor,
                  paddingHorizontal: 10 * androidScaleFactor,
                },
              ]}
              onPress={handleContinue}
              activeOpacity={1}
            >
              <HandjetText
                weight="regular"
                size={20 * androidScaleFactor}
                style={styles.continueButtonText}
              >
                CONTINUE
              </HandjetText>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  // Top Section - Back Button
  topSection: {
    display: 'flex',
    padding: 10,
    alignItems: 'flex-start',
    gap: 10,
    alignSelf: 'stretch',
  },
  backButton: {
    width: 36,
    height: 36,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Middle Section - Title
  middleSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flex: 1,
    alignSelf: 'stretch',
  },
  title: {
    color: COLORS.foreground,
    textAlign: 'center',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontWeight: '500',
    lineHeight: 87.342,
    textTransform: 'uppercase',
  },
  // Bottom Section - Email Input and Button
  bottomSection: {
    display: 'flex',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 48,
    flex: 1,
    alignSelf: 'stretch',
  },
  // Email Group - Error + Input
  emailGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'stretch',
  },
  // Error Message
  errorContainer: {
    display: 'flex',
    alignSelf: 'stretch',
    paddingVertical: 8,
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  errorText: {
    color: '#F04438',
    textAlign: 'center',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'Handjet_400Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 13.975,
    textTransform: 'uppercase',
  },
  // Email Input
  emailInputContainer: {
    display: 'flex',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.foreground + '80',
    paddingVertical: 16,
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  emailInput: {
    color: COLORS.foreground,
    fontFamily: 'Handjet_400Regular',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
    textTransform: 'uppercase',
    fontFeatureSettings: "'liga' off, 'clig' off",
    paddingVertical: 4,
    minHeight: 32,
    width: '100%',
    margin: 0,
  },
  // Continue Button
  continueButton: {
    display: 'flex',
    paddingVertical: 36,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'stretch',
    borderRadius: 88,
    backgroundColor: '#FFFAEB',
  },
  continueButtonText: {
    color: '#000',
    textAlign: 'center',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'Handjet_400Regular',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 17.468,
    textTransform: 'uppercase',
  },
});
