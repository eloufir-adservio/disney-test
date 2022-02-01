import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {ApiTypes} from '../../types';
import {getRooms, selectedHotel} from './bookingAPI';
import {hotelRes} from '../../mocked-data';

export interface BookingState {
    step: number
    steps: string[]
    resultSearch: ApiTypes.Hotel[];
    loading: boolean,
    selectedHotel: ApiTypes.Hotel | null,
    rooms: ApiTypes.Room[] | null,
    selectedRoom: ApiTypes.Room | null,
    roomsIsLoading: boolean,
    arrivalDate: number | null
    departureDate: number | null
}

const initialState: BookingState = {
    step: 0,
    steps: ["Choose Hotel", "Choose Room", "Recap", "Finish"],
    resultSearch: [],
    loading: false,
    selectedHotel: null,
    rooms: null,
    selectedRoom: null,
    roomsIsLoading: false,
    departureDate: null,
    arrivalDate: null
};


export const searchHotelAsync = createAsyncThunk(
    'booking/searchHotel',
    async ({arrivalDate, departureDate}: {arrivalDate: number | null, departureDate: number | null}) => {
        if (arrivalDate && departureDate) {
            return await selectedHotel();
        } else {
            return []
        }
    }
);

export const getRoomsAsync = createAsyncThunk(
    'booking/getRooms',
    async (hotel: ApiTypes.Hotel) => {
        return await getRooms(hotel);
    }
);

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setArrivalDate: (state, action: PayloadAction<number | null>) => {
            state.arrivalDate = action.payload;
            if (state.departureDate && state.arrivalDate && state.arrivalDate >= state.departureDate) {
                state.departureDate = null
            }
        },
        setDepartureDate: (state, action: PayloadAction<number | null>) => {
            state.departureDate = action.payload;
        },
        selectHotel: (state, action: PayloadAction<ApiTypes.Hotel>) => {
            state.selectedHotel = action.payload;
            state.step++;
        },
        selectRoom: (state, action: PayloadAction<ApiTypes.Room>) => {
            state.selectedRoom = action.payload;
        },
        nexStep: (state) => {
            state.step++;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(searchHotelAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchHotelAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.resultSearch = action.payload;
                state.rooms = null
                state.selectedRoom = null
                state.step = 0
            })
            .addCase(getRoomsAsync.pending, (state) => {
                state.roomsIsLoading = true;
            })
            .addCase(getRoomsAsync.fulfilled, (state, action) => {
                state.roomsIsLoading = false;
                state.rooms = action.payload;
                state.selectedRoom = state.rooms?.length > 0 ? state.rooms[0] : null
            });
    },
});

export const { selectHotel, selectRoom, setArrivalDate, setDepartureDate, nexStep } = bookingSlice.actions;

export const selectArrivalDate = (state: RootState) => state.booking.arrivalDate;
export const selectDepartureDate = (state: RootState) => state.booking.departureDate;
export const selectHotels = (state: RootState) => state.booking.resultSearch;
export const selectSearchLoading = (state: RootState) => state.booking.loading;
export const selectStep = (state: RootState) => state.booking.step;
export const selectSteps = (state: RootState) => state.booking.steps;
export const selectSelectedHotel = (state: RootState) => state.booking.selectedHotel;
export const selectSelectedRoom = (state: RootState) => state.booking.selectedRoom;
export const selectRooms = (state: RootState) => state.booking.rooms;
export const selectRoomsIsLoading = (state: RootState) => state.booking.roomsIsLoading;


export default bookingSlice.reducer;
