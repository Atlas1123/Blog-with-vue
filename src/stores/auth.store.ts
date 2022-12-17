import { defineStore } from "pinia";
import axios from 'axios';

// import { fetchWrapper } from '@/helpers';
import router from '@/router';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(<string>localStorage.getItem("user")),
        returnUrl: null
    }),
    actions: {
        async login(email: string, password: string) {
            try {
                const user = await axios.post(`http://localhost:8001/api/v1/auth/signin`, { email, password });
                this.user = user;
                localStorage.setItem("user", JSON.stringify(user));

                router.push(this.returnUrl || '/');
            } catch (error) {
                console.log(error)
            }
        },
        logout() {
            this.user = null;
            localStorage.removeItem("user");

            router.push(this.returnUrl || '/');
        }
    }
})