import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OptionCard } from '../../src/components/OptionCard';
import { PrimaryButton } from '../../src/components/PrimaryButton';
import { ScreenWrapper } from '../../src/components/ScreenWrapper';
import { AMOUNT_OPTIONS, FREQUENCY_OPTIONS } from '../../src/constants/onboarding';
import { useOnboardingStore } from '../../src/store/onboardingStore';
import { colors, spacing, typography } from '../../src/theme/theme';

export default function HabitsScreen() {
  const { drinkingFrequency, drinkingAmount, setDrinkingFrequency, setDrinkingAmount, setStep } =
    useOnboardingStore((s) => ({
      drinkingFrequency: s.drinkingFrequency,
      drinkingAmount: s.drinkingAmount,
      setDrinkingFrequency: s.setDrinkingFrequency,
      setDrinkingAmount: s.setDrinkingAmount,
      setStep: s.setStep,
    }));

  const canContinue = drinkingFrequency !== null && drinkingAmount !== null;

  const handleContinue = () => {
    setStep(4);
    router.push('/onboarding/motivation');
  };

  const handleBack = () => {
    setStep(2);
    router.back();
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.heading}>Tell us about{'\n'}your current habits</Text>
          <Text style={styles.subtext}>This helps us personalize your experience.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>How often do you usually drink?</Text>
          {FREQUENCY_OPTIONS.map((option) => (
            <OptionCard
              key={option.value}
              label={option.label}
              selected={drinkingFrequency === option.value}
              onPress={() => setDrinkingFrequency(option.value)}
            />
          ))}
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>On a typical occasion, how many drinks?</Text>
          {AMOUNT_OPTIONS.map((option) => (
            <OptionCard
              key={option.value}
              label={option.label}
              selected={drinkingAmount === option.value}
              onPress={() => setDrinkingAmount(option.value)}
            />
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
  section: {
    marginBottom: spacing.md,
  },
  sectionLabel: {
    ...typography.label,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.lg,
  },
  cta: {
    paddingTop: spacing.lg,
  },
});
