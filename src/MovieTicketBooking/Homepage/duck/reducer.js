import data from './../danhSachGhe.json'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listSeat: data,
    listSeatSelected: [],
}

const bookingTicketReducer = createSlice({
    name: "bookingTicketReducer",
    initialState,
    reducers: {
        setBookingSeat: (state, action) => {
            const {payload} = action;
            
            //Thêm xoá ghế vào trong danh sách đặt
            const index = state.listSeatSelected.findIndex((seat) => seat.soGhe === payload.soGhe);
            if (index === -1) {
                state.listSeatSelected.push(payload);
            } else {
                state.listSeatSelected.splice(index, 1);
            }
        }
    }
})

export const { setBookingSeat } = bookingTicketReducer.actions;

export default bookingTicketReducer.reducer;