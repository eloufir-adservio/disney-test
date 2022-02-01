export declare module ApiTypes {


    export interface Hotel {
        hotel_code: string;
        hotel_name: string;
        hotel_rating: string;
        hotel_category: string;
        hotel_description: string;
    }
    export interface Room {
        room_code: string;
        room_name: string;
        room_price: number;
        room_img: string,
        room_description: string[]
    }

    export interface SearchResult {
        Hotels: Hotel[];
    }

}

