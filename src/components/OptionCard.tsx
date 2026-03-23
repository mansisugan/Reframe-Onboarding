import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, radius, spacing, typography } from '../theme/theme';

interface OptionCardProps {
  label: string;
  subtitle?: string;
  selected: boolean;
  onPress: () => void;
  multiSelect?: boolean;
}

export function OptionCard({
  label,
  subtitle,
  selected,
  onPress,
  multiSelect = false,
}: OptionCardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, selected && styles.cardSelected]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
          {subtitle ? (
            <Text style={styles.subtitle}>{subtitle}</Text>
          ) : null}
        </View>
        {multiSelect ? (
          <View style={[styles.checkbox, selected && styles.checkboxSelected]}>
            {selected ? <Text style={styles.checkmark}>✓</Text> : null}
          </View>
        ) : (
          <View style={[styles.radio, selected && styles.radioSelected]}>
            {selected ? <View style={styles.radioDot} /> : null}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  cardSelected: {
    backgroundColor: colors.surfaceSelected,
    borderColor: colors.borderSelected,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: spacing.sm,
  },
  label: {
    ...typography.label,
    color: colors.textPrimary,
  },
  labelSelected: {
    color: colors.borderSelected,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: radius.sm,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: radius.full,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: colors.primary,
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
  },
});
