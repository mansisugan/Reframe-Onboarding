import { create } from 'zustand';
import type { FrequencyValue, AmountValue, MotivationValue } from '../constants/onboarding';

export type Goal = 'quit' | 'cut_back';

interface OnboardingState {
  // Collected data
  goal: Goal | null;
  drinkingFrequency: FrequencyValue | null;
  drinkingAmount: AmountValue | null;
  motivations: MotivationValue[];
  name: string;

  // UI state
  currentStep: number;
  isComplete: boolean;

  // Actions
  setGoal: (goal: Goal) => void;
  setDrinkingFrequency: (freq: FrequencyValue) => void;
  setDrinkingAmount: (amount: AmountValue) => void;
  toggleMotivation: (motivation: MotivationValue) => void;
  setName: (name: string) => void;
  setStep: (step: number) => void;
  completeOnboarding: () => void;
  reset: () => void;
}

const initialState = {
  goal: null as Goal | null,
  drinkingFrequency: null as FrequencyValue | null,
  drinkingAmount: null as AmountValue | null,
  motivations: [] as MotivationValue[],
  name: '',
  currentStep: 1,
  isComplete: false,
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  ...initialState,

  setGoal: (goal) => set({ goal }),
  setDrinkingFrequency: (drinkingFrequency) => set({ drinkingFrequency }),
  setDrinkingAmount: (drinkingAmount) => set({ drinkingAmount }),
  toggleMotivation: (motivation) =>
    set((state) => ({
      motivations: state.motivations.includes(motivation)
        ? state.motivations.filter((m) => m !== motivation)
        : [...state.motivations, motivation],
    })),
  setName: (name) => set({ name }),
  setStep: (step) => set({ currentStep: step }),
  completeOnboarding: () => set({ isComplete: true }),
  reset: () => set({ ...initialState }),
}));
