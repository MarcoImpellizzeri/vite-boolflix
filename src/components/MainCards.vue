<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            moviesList: [],
            store,
        }
    },
    watch: {
        "store.searchMovies": function (searchMovies) {
            this.moviesList = [];
            const url = `https://api.themoviedb.org/3/search/movie?api_key=40a56ebbdeaca35e7a4e5112a4d2ae72&query=${store.searchMovies}&language=it-IT`

            axios.get(url).then((response) => {

                this.moviesList = response.data.results;
                console.log(this.moviesList);
            })
        }
    },
}
</script>

<template>
    <div class="container">
        <ul>
            <li v-for="(movie, i) in moviesList" :key="`'movie'${i}`">{{ movie.title }}
                <ul>
                    <li>{{ movie.original_title }}</li>
                    <li>{{ movie.original_language }}</li>
                    <li>{{ movie.vote_average }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style lang="scss"></style>