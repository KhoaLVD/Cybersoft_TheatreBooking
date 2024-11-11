import { configureStore } from "@reduxjs/toolkit";
import bookingTicketReducer from "./../MovieTicketBooking/Homepage/duck/reducer"

const store = configureStore({
    reducer: {
        bookingTicketReducer: bookingTicketReducer,
    }
})

export default store;