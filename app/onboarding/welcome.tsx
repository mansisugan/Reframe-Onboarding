import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../../src/components/PrimaryButton';
import { ScreenWrapper } from '../../src/components/ScreenWrapper';
import { useOnboardingStore } from '../../src/store/onboardingStore';
import { colors, spacing, typography } from '../../src/theme/theme';

export default function WelcomeScreen() {
  const setStep = useOnboardingStore((s) => s.setStep);

  const handleStart = () => {
    setStep(2);
    router.push('/onboarding/goal');
  };

  return (
    <ScreenWrapper scrollable={false}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>✦</Text>
          </View>
          <Text style={styles.appName}>Reframe</Text>
          <Text style={styles.tagline}>A clearer, calmer life{'\n'}starts here.</Text>
          <Text style={styles.subtext}>
            This takes about 2 minutes.{'\n'}Let's make it count.
          </Text>
        </View>

        <View style={styles.cta}>
          <PrimaryButton label="Let's get started" onPress={handleStart} />
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: spacing.xxl,
    paddingBottom: spacing.lg,
  },
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.surfaceSelected,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  logoText: {
    fontSize: 36,
    color: colors.primary,
  },
  appName: {
    fontSize: 42,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: -1,
    marginBottom: spacing.lg,
  },
  tagline: {
    ...typography.heading2,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.md,
    lineHeight: 34,
  },
  subtext: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 26,
  },
  cta: {
    paddingTop: spacing.lg,
  },
});
