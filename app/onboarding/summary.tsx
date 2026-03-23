import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { PrimaryButton } from '../../src/components/PrimaryButton';
import { ScreenWrapper } from '../../src/components/ScreenWrapper';
import { MOTIVATION_OPTIONS } from '../../src/constants/onboarding';
import { useOnboardingStore } from '../../src/store/onboardingStore';
import { colors, radius, spacing, typography } from '../../src/theme/theme';

export default function SummaryScreen() {
  const { name, goal, motivations, completeOnboarding } = useOnboardingStore((s) => ({
    name: s.name,
    goal: s.goal,
    motivations: s.motivations,
    completeOnboarding: s.completeOnboarding,
  }));

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    opacity.value = withDelay(200, withTiming(1, { duration: 500 }));
    translateY.value = withDelay(200, withTiming(0, { duration: 500 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const goalLabel = goal === 'quit' ? 'Quit completely' : 'Cut back';

  const motivationLabels = motivations
    .map((m) => MOTIVATION_OPTIONS.find((o) => o.value === m)?.label)
    .filter(Boolean)
    .join(', ');

  const affirmation =
    goal === 'quit'
      ? "Every day without alcohol is a win. Reframe will be here every step of the way."
      : "Moderation is strength. We'll help you stay intentional and in control.";

  const handleStart = async () => {
    completeOnboarding();
    await AsyncStorage.setItem('reframe_onboarding_complete', 'true');
    router.replace('/home');
  };

  return (
    <ScreenWrapper scrollable={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>
            You're all set,{'\n'}
            <Text style={styles.nameHighlight}>{name || 'friend'}</Text>.
          </Text>
        </View>

        <Animated.View style={[styles.summaryCard, animatedStyle]}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Your goal</Text>
            <Text style={styles.rowValue}>{goalLabel}</Text>
          </View>
          {motivationLabels ? (
            <>
              <View style={styles.rowDivider} />
              <View style={styles.row}>
                <Text style={styles.rowLabel}>Your reasons</Text>
                <Text style={[styles.rowValue, styles.rowValueSmall]}>{motivationLabels}</Text>
              </View>
            </>
          ) : null}
        </Animated.View>

        <Animated.View style={[styles.affirmationContainer, animatedStyle]}>
          <Text style={styles.affirmation}>{affirmation}</Text>
        </Animated.View>

        <View style={styles.cta}>
          <PrimaryButton label="Start my journey" onPress={handleStart} />
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.xl,
    justifyContent: 'space-between',
  },
  header: {
    marginBottom: spacing.xl,
  },
  heading: {
    ...typography.heading1,
    color: colors.textPrimary,
    lineHeight: 42,
  },
  nameHighlight: {
    color: colors.primary,
  },
  summaryCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  rowDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  rowLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    flex: 1,
  },
  rowValue: {
    ...typography.label,
    color: colors.textPrimary,
    flex: 2,
    textAlign: 'right',
  },
  rowValueSmall: {
    ...typography.bodySmall,
    fontWeight: '500',
  },
  affirmationContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  affirmation: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 28,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  cta: {
    paddingBottom: spacing.md,
  },
});
