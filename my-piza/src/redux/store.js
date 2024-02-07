import { configureStore } from '@reduxjs/toolkit'
import { countReducer } from './slice/countSlice'
import { menuReducer } from './slice/menuSlice'
import { cartReducer } from './slice/cartSlice'
import { userReducer } from "./slice/userSlice";

const store = configureStore({
    reducer: {
        counter: countReducer,
        menu: menuReducer,
        cart: cartReducer,
        user: userReducer
    },
})

export {store}