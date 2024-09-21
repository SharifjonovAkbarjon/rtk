import { api } from "./index";

const authApi = api.injectEndpoints({
    endpoints:build => ({
        signInRequest: build.mutation({
            query: (body) => ({
                url: "/auth/sign-in",
                method: "POST",
                body
            })
        }),
        signUpRequest: build.mutation({
            query: (body) => ({
                url: "/auth/sign-up",
                method: "POST",
                body
            })
        }),
        otpVerifyRequest:build.mutation({
            query: (body) => ({
                url: "/auth/send-otp",
                method: "POST",
                body
            })
        })
    })
})

export const { useSignInRequestMutation,useSignUpRequestMutation, useOtpVerifyRequestMutation } = authApi