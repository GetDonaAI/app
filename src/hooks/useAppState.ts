import { useState, useEffect } from 'react';
import { AppState as RNAppState } from 'react-native';

export const useAppState = () => {
  const [appState, setAppState] = useState(RNAppState.currentState);

  useEffect(() => {
    const subscription = RNAppState.addEventListener('change', nextAppState => {
      setAppState(nextAppState);
    });

    return () => subscription?.remove();
  }, []);

  return appState;
};
