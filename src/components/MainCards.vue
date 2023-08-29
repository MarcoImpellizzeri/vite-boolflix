<script>
import { store } from '../store';
import LangFlag from 'vue-lang-code-flags';

export default {
    components: {
        LangFlag
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        // funzione che cambia i voti da 1 a 10 in voti da 1 a 5
        mapVote(originalVote) {
            return Math.round(originalVote / 2);
        }
    }
}
</script>

<template>
    <div class="container py-4">
        <ul class="list-unstyled" v-for="(movieShow, i) in store.moviesShowsList" :key="`'movieShow'${i}`">
            <li v-if="movieShow.poster_path"><img :src="`https://image.tmdb.org/t/p/w185${movieShow.poster_path}`" alt="">
            </li>
            <li v-if="movieShow.name"><b>Titolo:</b> {{ movieShow.name }}</li>
            <li v-if="movieShow.title"><b>Titolo:</b> {{ movieShow.title }}</li>
            <li v-if="movieShow.original_title"><b>Titolo in lingua originale:</b> {{ movieShow.original_title }}</li>
            <li v-if="movieShow.original_name"><b>Titolo in lingua originale:</b> {{ movieShow.original_name }}</li>
            <li v-if="movieShow.original_language"><b>Ligua:</b><lang-flag :iso="movieShow.original_language" /></li>
            <!-- uso parseInt per rendere il numero intero -->
            <li v-if="movieShow.vote_average"><b>Voto:</b>
                <!-- ciclo for su un totale di 5 volte che sono le stelle totali -->
                <span v-for="star in 5">
                    <!-- 
                        questa espressione controlla se il numero di stelle attuali è minore o uguale al voto mappato
                        e in base al numero visualizza stelle piene o vuote
                    -->
                    <i v-if="star <= mapVote(parseInt(movieShow.vote_average))" class="fa-solid fa-star"></i>
                    <i v-else class="fa-regular fa-star"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.fa-star {
    color: rgb(255, 189, 7);
}
</style>