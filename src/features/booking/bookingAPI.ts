import {roomsRes, hotelRes} from '../../mocked-data';
import {ApiTypes} from '../../types';

export const selectedHotel = async () => {
    await new Promise((resolve) => setTimeout(() => {resolve(true)}, 1200))
    return hotelRes
}

export const getRooms = async (hotel: ApiTypes.Hotel) => {
    await new Promise((resolve) => setTimeout(() => {resolve(true)}, 1200))
    return roomsRes
}
