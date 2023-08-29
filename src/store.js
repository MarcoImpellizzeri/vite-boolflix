import axios from 'axios';
import { reactive } from 'vue'

export const store = reactive({
    searchMoviesShows: "",
    moviesList: [],
    showList: [],
})

// funzione per fare un array di film
export function filterMoviesShows() {
    store.moviesList = [];

    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=40a56ebbdeaca35e7a4e5112a4d2ae72&query=${store.searchMoviesShows}&language=it-IT`

    axios.get(movieUrl).then((response) => {

        store.moviesList = response.data.results;
        console.log(store.moviesList);
    })

    store.showList = [];

    const showUrl = `https://api.themoviedb.org/3/search/tv?api_key=40a56ebbdeaca35e7a4e5112a4d2ae72&query=${store.searchMoviesShows}&language=it-IT`

    axios.get(showUrl).then((response) => {

        store.showList = response.data.results;
        console.log(store.showList);
    })
}

// funzione che cambia i voti da 1 a 10 in voti da 1 a 5
export function mapVote(originalVote) {
    return Math.round(originalVote / 2);
}
