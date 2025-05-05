import { create } from 'zustand';
import { persist,  createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Types
import { State, Actions } from './types.auth';

export const useAuthStore = create(
    persist<State & Actions>(
      (set) => ({
        token: '',
        profile: null,
        isAuth: false,
        setToken: (token: string) =>
          set(() => ({
            token,
            isAuth: !!token,
          })),
        setProfile: (profile: any) => set(() => ({ profile })),
        logout: () =>
          set(() => ({
            token: '',
            isAuth: false,
            profile: null,
          })),
      }),
      {
        name: 'auth-storage',
        storage: createJSONStorage(() => AsyncStorage), // ✅ compatible con Zustand
      }
    )
  );