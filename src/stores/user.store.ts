import { defineStore } from "pinia";
import router from "@/router";

import { useAuthStore } from "@/stores";
import axios from "axios";
// import { useToast } from "vue-toastification";

// const toast = useToast();

export const useUserStore = defineStore({
    id: 'users',
    state: () => ({
        users: {},
        user: {}
    }),
    actions: {
        async register(user: {}) {
            const response = await fetch(`http://localhost:8001/api/v1/auth/signup`, {
                method: "post",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log(response)
            // if (response.statusText === "ok") {
            //     toast.success("Register user action is successful!");
            // }
        }
    }
})
