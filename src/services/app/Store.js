import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { postApi } from "../Post";




export const Store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer
    },
    //Middleware 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),

})

setupListeners(Store.dispatch)