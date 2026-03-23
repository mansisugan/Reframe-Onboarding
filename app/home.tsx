import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../src/theme/theme';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Reframe</Text>
      <Text style={styles.subtitle}>Your journey starts here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  title: {
    ...typography.heading1,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
