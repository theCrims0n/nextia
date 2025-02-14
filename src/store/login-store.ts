import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Props = {
    isAuthentic: boolean;
    user: any;
    login: (body: any) => void;
    logout: () => void;
}

export const useAuthStore = create<Props>()(
    persist((set) => ({
        isAuthentic: false,
        user: null,
        login: async (body) => {
            try {
                set({ isAuthentic: true, user: body })
            } catch (error) {
                console.log(error);
                throw new Error('Error con el usuario');
            }
        },
        logout() {
            try {
                set({ isAuthentic: false, user: null })
            } catch (error) {
                console.log(error);
                throw new Error('Error con el usuario');
            }
        },
    }), {
        name: 'useAuthStore'
    }));