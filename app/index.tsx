import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { colors } from '../src/theme/theme';

export default function Index() {
  const [checked, setChecked] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('reframe_onboarding_complete').then((value) => {
      setIsComplete(value === 'true');
      setChecked(true);
    });
  }, []);

  if (!checked) {
    return <View style={{ flex: 1, backgroundColor: colors.background }} />;
  }

  if (isComplete) {
    return <Redirect href="/home" />;
  }

  return <Redirect href="/onboarding/welcome" />;
}
