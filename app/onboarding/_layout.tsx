import { Stack } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProgressBar } from '../../src/components/ProgressBar';
import { TOTAL_STEPS } from '../../src/constants/onboarding';
import { useOnboardingStore } from '../../src/store/onboardingStore';
import { colors } from '../../src/theme/theme';

export default function OnboardingLayout() {
  const currentStep = useOnboardingStore((s) => s.currentStep);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <SafeAreaView edges={['top']} style={{ backgroundColor: colors.background }}>
        <ProgressBar current={currentStep} total={TOTAL_STEPS} />
      </SafeAreaView>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: colors.background },
        }}
      />
    </View>
  );
}
