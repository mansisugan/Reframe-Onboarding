export const TOTAL_STEPS = 6;

export const SCREEN_STEPS: Record<string, number> = {
  welcome: 1,
  goal: 2,
  habits: 3,
  motivation: 4,
  name: 5,
  summary: 6,
};

export const FREQUENCY_OPTIONS = [
  { value: 'daily', label: 'Every day' },
  { value: 'several_week', label: 'A few times a week' },
  { value: 'weekends', label: 'Mainly on weekends' },
  { value: 'occasionally', label: 'Occasionally' },
] as const;

export const AMOUNT_OPTIONS = [
  { value: '1_2', label: '1–2 drinks' },
  { value: '3_5', label: '3–5 drinks' },
  { value: '6_plus', label: '6 or more' },
] as const;

export const MOTIVATION_OPTIONS = [
  { value: 'health', label: 'My health' },
  { value: 'family', label: 'Family & relationships' },
  { value: 'work', label: 'Work & focus' },
  { value: 'finances', label: 'Saving money' },
  { value: 'mental_health', label: 'Mental wellbeing' },
  { value: 'other', label: 'Something else' },
] as const;

export type FrequencyValue = (typeof FREQUENCY_OPTIONS)[number]['value'];
export type AmountValue = (typeof AMOUNT_OPTIONS)[number]['value'];
export type MotivationValue = (typeof MOTIVATION_OPTIONS)[number]['value'];
