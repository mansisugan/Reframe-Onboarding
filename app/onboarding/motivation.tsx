import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OptionCard } from '../../src/components/OptionCard';
import { PrimaryButton } from '../../src/components/PrimaryButton';
import { ScreenWrapper } from '../../src/components/ScreenWrapper';
import { MOTIVATION_OPTIONS } from '../../src/constants/onboarding';
import { useOnboardingStore } from '../../src/store/onboardingStore';
import { colors, spacing, typography } from '../../src/theme/theme';

export default function MotivationScreen() {
  const { goal, motivations, toggleMotivation, setStep } = useOnboardingStore((s) => ({
    goal: s.goal,
    motivations: s.motivations,
    toggleMotivation: s.toggleMotivation,
    setStep: s.setStep,
  }));

  const canContinue = motivations.length > 0;

  const handleContinue = () => {
    setStep(5);
    router.push('/onboarding/name');
  };

  const handleBack = () => {
    setStep(3);
    router.back();
  };

  const heading =
    goal === 'quit' ? "What's your reason\nfor quitting?" : "What's driving\nyour decision?";

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.subtext}>
            Select everything that resonates. You can have more than one reason.
          </Text>
        </View>

        <View style={styles.grid}>
          {MOTIVATION_OPTIONS.map((option) => (
            <View key={option.value} style={styles.gridItem}>
              <OptionCard
                label={option.label}
                selected={motivations.includes(option.value)}
                onPress={() => toggleMotivation(option.value)}
                multiSelect
              />
            </View>
          ))}
        </View>

        <View style={styles.cta}>
          <PrimaryButton label="Continue" onPress={handleContinue} disabled={!canContinue} />
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
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -spacing.xs,
  },
  gridItem: {
    width: '50%',
    paddingHorizontal: spacing.xs,
  },
  cta: {
    paddingTop: spacing.lg,
  },
});
