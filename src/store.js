import axios from 'axios';
import { reactive } from 'vue'

export const store = reactive({
    searchMoviesShows: "",
    moviesShowsList: [],
})

// funzione per fare un array di film
export function filterMoviesShows() {
    store.moviesShowsList = [];

    const url = `https://api.themoviedb.org/3/search/multi?api_key=40a56ebbdeaca35e7a4e5112a4d2ae72&query=${store.searchMoviesShows}&language=it-IT`

    axios.get(url).then((response) => {

        store.moviesShowsList = response.data.results;
        console.log(store.moviesShowsList);
    })
}

