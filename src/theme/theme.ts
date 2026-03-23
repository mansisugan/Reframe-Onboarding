export const colors = {
  background: '#F7F4EF',     // warm off-white — main screen background
  surface: '#FFFFFF',         // card surfaces
  surfaceSelected: '#EAF4F7', // selected card background
  border: '#E5E0D8',          // default card border
  borderSelected: '#4A90A4',  // selected card border (teal/ocean)
  primary: '#4A90A4',         // primary action color (teal)
  primaryDark: '#357A8A',     // pressed/active state
  textPrimary: '#1A1A2E',     // near-black for headings
  textSecondary: '#6B7280',   // gray for subtitles
  textOnPrimary: '#FFFFFF',   // text on primary buttons
  disabled: '#C4C4C4',        // disabled button
  success: '#52B788',         // used on summary screen
};

export const typography = {
  heading1: { fontSize: 30, fontWeight: '700' as const, lineHeight: 38 },
  heading2: { fontSize: 24, fontWeight: '600' as const, lineHeight: 32 },
  body: { fontSize: 16, fontWeight: '400' as const, lineHeight: 24 },
  bodySmall: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
  label: { fontSize: 16, fontWeight: '500' as const, lineHeight: 22 },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  full: 999,
};
