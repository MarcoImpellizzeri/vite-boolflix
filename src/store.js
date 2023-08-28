import axios from 'axios';
import { reactive } from 'vue'

export const store = reactive({
    searchMovies: "",
    moviesList: [],
})

export function filterMovies() {
    store.moviesList = [];

    const url = `https://api.themoviedb.org/3/search/movie?api_key=40a56ebbdeaca35e7a4e5112a4d2ae72&query=${store.searchMovies}&language=it-IT`

    axios.get(url).then((response) => {

        store.moviesList = response.data.results;
        console.log(store.moviesList);
    })
    console.log("funzione invocata");
}