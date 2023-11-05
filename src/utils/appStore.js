
import { configureStore } from "@reduxjs/toolkit"
import CardReducer from './cartSlice'
const appStore = configureStore({
    reducer: {
        cart: CardReducer,
    }
});

export default appStore