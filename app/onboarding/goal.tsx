import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OptionCard } from '../../src/components/OptionCard';
import { PrimaryButton } from '../../src/components/PrimaryButton';
import { ScreenWrapper } from '../../src/components/ScreenWrapper';
import { type Goal, useOnboardingStore } from '../../src/store/onboardingStore';
import { colors, spacing, typography } from '../../src/theme/theme';

export default function GoalScreen() {
  const { goal, setGoal, setStep } = useOnboardingStore((s) => ({
    goal: s.goal,
    setGoal: s.setGoal,
    setStep: s.setStep,
  }));

  const handleContinue = () => {
    setStep(3);
    router.push('/onboarding/habits');
  };

  const handleBack = () => {
    setStep(1);
    router.back();
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.heading}>What's your goal?</Text>
          <Text style={styles.subtext}>
            There's no wrong answer. Both paths are valid.
          </Text>
        </View>

        <View style={styles.options}>
          <OptionCard
            label="Quit completely"
            subtitle="I want to stop drinking alcohol"
            selected={goal === 'quit'}
            onPress={() => setGoal('quit' as Goal)}
          />
          <OptionCard
            label="Cut back"
            subtitle="I want to drink less and be more intentional"
            selected={goal === 'cut_back'}
            onPress={() => setGoal('cut_back' as Goal)}
          />
        </View>

        <View style={styles.cta}>
          <PrimaryButton
            label="Continue"
            onPress={handleContinue}
            disabled={goal === null}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.md,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: spacing.sm,
    marginBottom: spacing.md,
  },
  backText: {
    ...typography.body,
    color: colors.primary,
  },
  header: {
    marginBottom: spacing.xl,
  },
  heading: {
    ...typography.heading1,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtext: {
    ...typography.body,
    color: colors.textSecondary,
  },
  options: {
    flex: 1,
  },
  cta: {
    paddingTop: spacing.lg,
  },
});
