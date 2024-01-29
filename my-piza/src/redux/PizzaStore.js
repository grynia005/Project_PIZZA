import { configureStore } from '@reduxjs/toolkit'
import { countReducer } from './countSlice'
import { menuReducer } from './menuSlice'
import { cartReducer } from './cartSlice'
import { userReducer } from './User'

const store = configureStore({
    reducer: {
        counter: countReducer,
        menu: menuReducer,
        cart: cartReducer,
        user: userReducer
    },
})

export {store}