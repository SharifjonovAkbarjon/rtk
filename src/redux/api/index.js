import { fetchBaseQuery, retry, createApi } from "@reduxjs/toolkit/query/react";
import { signOut } from "../slice/AuthSlice";

const baseQuery = async(args, api, extraOptions) => {
    const { dispatch } = api;

    const rawBaseQuery = fetchBaseQuery({
        baseUrl: "http://13.51.206.62:8000/api",
        prepareHeaders: (Headers) => {
            const token = localStorage.getItem("token");
            if(token){
                Headers.set("Authorization", `Bearer ${token}`)
            }
            return Headers
        }
    })

    const response =  await rawBaseQuery(args, api, extraOptions)

    if(response.error){
        const {status} = response.error;
        if(status === 401 || status === 403) {
            dispatch(signOut())
        }
    }
    return response
}

const fetchBaseQueryWithRetry = retry(baseQuery, {maxRetries: 0});

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQueryWithRetry,
    tagTypes: ["CARS"],
    endpoints: () => ({})
})

 