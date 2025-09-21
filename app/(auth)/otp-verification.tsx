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
import { router, useLocalSearchParams } from 'expo-router';
import { HandjetText, OverusedGroteskText } from '@/src/components';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/src/constants';

export default function OTPVerificationScreen() {
  const insets = useSafeAreaInsets();
  const { width: screenWidth } = Dimensions.get('window');
  const { email } = useLocalSearchParams();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [isWrongOtp, setIsWrongOtp] = useState(false);
  const inputRefs = useRef<TextInput[]>([]);
  
  // Calculate responsive dimensions
  const containerWidth = Math.min(screenWidth * 0.95, 382);
  const buttonWidth = containerWidth - 20;
  const scaleFactor = Math.min(screenWidth / 400, 1);
  
  // Android-specific responsive adjustments
  const isAndroid = Platform.OS === 'android';
  const androidScaleFactor = isAndroid ? Math.min(screenWidth / 360, 1) : scaleFactor;

  // Handle keyboard events for Android
  useEffect(() => {
    if (isAndroid) {
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
        setKeyboardHeight(e.endCoordinates.height);
      });
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardHeight(0);
      });

      return () => {
        keyboardDidShowListener?.remove();
        keyboardDidHideListener?.remove();
      };
    }
  }, [isAndroid]);

  // Auto-focus first input on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  
  // Animation values
  const backButtonScale = useRef(new Animated.Value(1)).current;
  const shakeAnimation = useRef(new Animated.Value(0)).current;

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

  const handleOtpChange = (text: string, index: number) => {
    // Handle paste functionality
    if (text.length > 1) {
      // This is likely a paste operation
      const digits = text.replace(/\D/g, '').slice(0, 6); // Only keep digits, max 6
      const newOtp = [...otp];
      
      // Fill OTP fields with pasted digits
      for (let i = 0; i < digits.length && i < 6; i++) {
        newOtp[i] = digits[i];
      }
      
      setOtp(newOtp);
      setOtpError(''); // Clear error when user types
      
      // Focus the next empty field or the last filled field
      const nextEmptyIndex = newOtp.findIndex(digit => digit === '');
      const focusIndex = nextEmptyIndex !== -1 ? nextEmptyIndex : Math.min(digits.length - 1, 5);
      
      setFocusedIndex(focusIndex);
      inputRefs.current[focusIndex]?.focus();
      
      // Check if all fields are filled
      if (newOtp.every(digit => digit !== '')) {
        // Auto-trigger verification
        setTimeout(() => {
          handleVerify(newOtp.join(''));
        }, 100);
      }
      
      return;
    }
    
    // Single digit input
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    setOtpError(''); // Clear error when user types
    
    // Auto-focus next input if text is entered
    if (text && index < 5) {
      setFocusedIndex(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
    
    // Check if all fields are filled
    const updatedOtp = [...newOtp];
    if (updatedOtp.every(digit => digit !== '')) {
      // Auto-trigger verification
      setTimeout(() => {
        handleVerify(updatedOtp.join(''));
      }, 100);
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace') {
      if (otp[index] !== '') {
        // If current field has content, clear it first
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        // If current field is empty, go to previous field and clear it
        setFocusedIndex(index - 1);
        inputRefs.current[index - 1]?.focus();
        
        // Clear the previous field
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
      }
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const triggerShakeAnimation = () => {
    setIsShaking(true);
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsShaking(false);
    });
  };

  const handleVerify = (otpString?: string) => {
    // Clear previous error and states
    setOtpError('');
    setIsWrongOtp(false);
    
    // Use provided OTP string or current state
    const currentOtp = otpString || otp.join('');
    
    // Validate OTP
    if (currentOtp.length !== 6) {
      setOtpError('PLEASE ENTER ALL 6 DIGITS');
      return;
    }
    
    console.log('Verify OTP:', currentOtp, 'for email:', email);
    
    // Test mode - you can change this for testing
    const TEST_CORRECT_OTP = '123456'; // Change this to test different scenarios
    const TEST_WRONG_OTP = '000000';   // Always wrong OTP for testing
    
    // Simulate API call delay
    setTimeout(() => {
      if (currentOtp === TEST_CORRECT_OTP) {
        // Correct OTP
        console.log('OTP verified successfully!');
        router.replace('/(tabs)');
      } else {
        // Wrong OTP - show error and shake
        setOtpError('INVALID OTP. PLEASE TRY AGAIN');
        setIsWrongOtp(true);
        triggerShakeAnimation();
        
        // Clear OTP after 2 seconds
        setTimeout(() => {
          setOtp(['', '', '', '', '', '']);
          setIsWrongOtp(false);
          inputRefs.current[0]?.focus();
        }, 2000);
      }
    }, 500);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        {/* Top Section - Back Button and Title */}
        <View style={[styles.topSection, { marginTop: insets.top }]}>
          <Animated.View style={{ transform: [{ scale: backButtonScale }] }}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackPress}
              activeOpacity={1}
            >
              <Ionicons name="chevron-back" size={24} color={COLORS.foreground} />
            </TouchableOpacity>
          </Animated.View>
          
          <View style={styles.titleContainer}>
            <HandjetText 
              weight="regular" 
              size={24 * androidScaleFactor} 
              style={styles.title}
            >
              ENTER CODE
            </HandjetText>
          </View>
        </View>

        {/* Instructions Section */}
        <View style={styles.instructionsSection}>
          <HandjetText 
            weight="regular" 
            size={16 * androidScaleFactor} 
            style={styles.instructions}
          >
            Please enter the code sent to your email {email} to login.
          </HandjetText>
        </View>

        {/* Middle Section - OTP Input and Verify Button */}
        <View style={[styles.middleSection, { 
          paddingBottom: keyboardHeight > 0 && isAndroid ? 20 : 10,
          marginBottom: keyboardHeight > 0 && isAndroid ? 20 : 0
        }]}>
          {/* Error Message */}
          {otpError ? (
            <View style={[styles.errorContainer, { width: buttonWidth, alignSelf: 'center' }]}>
              <HandjetText
                weight="regular"
                size={16 * androidScaleFactor}
                style={styles.errorText}
              >
                {otpError}
              </HandjetText>
            </View>
          ) : null}
          
          {/* OTP Input Boxes */}
          <Animated.View 
            style={[
              styles.otpContainer,
              { transform: [{ translateX: shakeAnimation }] }
            ]}
          >
            {otp.map((digit, index) => (
              <View 
                key={index} 
                style={[
                  styles.otpBox,
                  focusedIndex === index && styles.otpBoxFocused,
                  isWrongOtp && styles.otpBoxError
                ]}
              >
                <TextInput
                  ref={(ref) => {
                    if (ref) {
                      inputRefs.current[index] = ref;
                    }
                  }}
                  style={[styles.otpInput, { fontSize: 20 * androidScaleFactor }]}
                  value={digit}
                  onChangeText={(text) => handleOtpChange(text, index)}
                  onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  textAlign="center"
                  selectionColor={COLORS.foreground}
                  onFocus={() => handleFocus(index)}
                  onBlur={handleBlur}
                  caretHidden={false}
                  showSoftInputOnFocus={true}
                />
              </View>
            ))}
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
  // Top Section - Back Button and Title
  topSection: {
    display: 'flex',
    padding: 10,
    alignItems: 'center',
    gap: 10,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  backButton: {
    width: 36,
    height: 36,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#FFFAEB',
    textAlign: 'center',
    fontFamily: 'Handjet_400Regular',
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  // Instructions Section
  instructionsSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginTop: 24.5,
  },
  instructions: {
    color: '#525252',
    textAlign: 'center',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'Handjet_400Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 13.975,
    textTransform: 'uppercase',
    width: 250,
  },
  // Middle Section - OTP Input
  middleSection: {
    display: 'flex',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
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
  // OTP Container
  otpContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    alignSelf: 'stretch',
  },
  // OTP Box
  otpBox: {
    display: 'flex',
    width: 50,
    height: 64,
    minHeight: 64,
    paddingVertical: 2,
    paddingHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#6F6F6F',
    shadowColor: '#101828',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  otpBoxFocused: {
    borderColor: COLORS.foreground,
    borderWidth: 2,
  },
  otpBoxError: {
    borderColor: '#F04438',
    borderWidth: 2,
    backgroundColor: '#F0443810',
  },
  otpInput: {
    color: COLORS.foreground,
    fontFamily: 'Handjet_400Regular',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
    textTransform: 'uppercase',
    fontFeatureSettings: "'liga' off, 'clig' off",
    width: '100%',
    height: '100%',
    // Custom cursor styling
    textDecorationLine: 'none',
    borderWidth: 0,
    outline: 'none',
  },
});
