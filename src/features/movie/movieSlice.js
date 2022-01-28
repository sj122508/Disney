import { createSlice} from "@reduxjs/toolkit";

const initialState ={
    movies: []
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) =>{
            state.movies = action.payload;
        }
    }
})


export const {setMovies} = movieSlice.actions; // Action
export const selectMovies = (state) => state.movie.movies; // State
export default movieSlice.reducer; // Dispatch
