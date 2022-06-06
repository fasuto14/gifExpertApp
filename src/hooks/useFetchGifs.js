import { useState } from "react"

export const useFetchGifts = () => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    return state;
}