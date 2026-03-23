import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { PrimaryButton } from '../../src/components/PrimaryButton';
import { ScreenWrapper } from '../../src/components/ScreenWrapper';
import { useOnboardingStore } from '../../src/store/onboardingStore';
import { colors, radius, spacing, typography } from '../../src/theme/theme';

export default function NameScreen() {
  const { name, setName, setStep } = useOnboardingStore((s) => ({
    name: s.name,
    setName: s.setName,
    setStep: s.setStep,
  }));

  const canContinue = name.trim().length > 0;

  const handleContinue = () => {
    setStep(6);
    router.push('/onboarding/summary');
  };

  const handleBack = () => {
    setStep(4);
    router.back();
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.heading}>What should{'\n'}we call you?</Text>
          <Text style={styles.subtext}>
            Just a first name or nickname works perfectly.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your name..."
            placeholderTextColor={colors.disabled}
            value={name}
            onChangeText={setName}
            autoFocus
            returnKeyType="done"
            onSubmitEditing={canContinue ? handleContinue : undefined}
            autoCapitalize="words"
            autoCorrect={false}
          />
          <View style={styles.inputUnderline} />
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
  inputContainer: {
    flex: 1,
    paddingTop: spacing.lg,
  },
  input: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.textPrimary,
    paddingVertical: spacing.sm,
    paddingHorizontal: 0,
  },
  inputUnderline: {
    height: 2,
    backgroundColor: colors.primary,
    borderRadius: radius.full,
    opacity: 0.4,
  },
  cta: {
    paddingTop: spacing.lg,
  },
});
