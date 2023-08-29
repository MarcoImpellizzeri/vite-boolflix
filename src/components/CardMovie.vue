<script>
import { store, mapVote } from '../store';
import LangFlag from 'vue-lang-code-flags';

export default {
    components: {
        LangFlag,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        mapVote
    }
}
</script>

<template>
    <div v-for="(movie, i) in store.moviesList" :key="`'movie'${i}`">
        <div class="card text-bg-dark mx-3">
            <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
                class="card-img rounded-0" alt="">
            <div class="card-img-overlay overflow-y-auto rounded-0">
                <p v-if="movie.name" class="card-text"><b>Titolo:</b>{{ movie.name }}</p>
                <p v-if="movie.title" class="card-text"><b>Titolo:</b>{{ movie.title }}</p>
                <p v-if="movie.original_title" class="card-text"><b>Titolo in lingua originale:</b> {{
                    movie.original_title }}</p>
                <p v-if="movie.original_name" class="card-text"><b>Titolo in lingua originale:</b> {{
                    movie.original_name }}</p>
                <p v-if="movie.original_language" class="card-text"><b>lingua originale:</b> <lang-flag
                        :iso="movie.original_language" /></p>
                <!-- uso parseInt per rendere il numero intero -->
                <p v-if="movie.vote_average" class="card-text"><b>Voto:</b>
                    <!-- ciclo for su un totale di 5 volte che sono le stelle totali -->
                    <span v-for="star in 5">
                        <!-- 
                        questa espressione controlla se il numero di stelle attuali è minore o uguale al voto mappato
                        e in base al numero visualizza stelle piene o vuote
                    -->
                        <i v-if="star <= mapVote(parseInt(movie.vote_average))" class="fa-solid fa-star"></i>
                        <i v-else class="fa-regular fa-star"></i>
                    </span>
                </p>
                    <p v-if="movie.overview" class="card-text">{{ movie.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>