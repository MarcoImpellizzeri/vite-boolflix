<script>
import { store } from '../store';
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
        // funzione che cambia i voti da 1 a 10 in voti da 1 a 5
        mapVote(originalVote) {
            return Math.round(originalVote / 2);
        }
    }

}
</script>

<template>
    <div class="card text-bg-dark" v-for="(movieShow, i) in store.moviesShowsList" :key="`'movieShow'${i}`">
        <img v-if="movieShow.poster_path" :src="`https://image.tmdb.org/t/p/w500${movieShow.poster_path}`"
            class="card-img rounded-0" alt="">
        <div class="card-img-overlay">
            <p v-if="movieShow.name" class="card-text"><b>Titolo:</b>{{ movieShow.name }}</p>
            <p v-if="movieShow.title" class="card-text"><b>Titolo:</b>{{ movieShow.title }}</p>
            <p v-if="movieShow.original_title" class="card-text"><b>Titolo in lingua originale:</b> {{
                movieShow.original_title }}</p>
            <p v-if="movieShow.original_name" class="card-text"><b>Titolo in lingua originale:</b> {{
                movieShow.original_name }}</p>
            <!-- uso parseInt per rendere il numero intero -->
            <p v-if="movieShow.vote_average" class="card-text"><b>Voto:</b>
                <!-- ciclo for su un totale di 5 volte che sono le stelle totali -->
                <span v-for="star in 5">
                    <!-- 
                        questa espressione controlla se il numero di stelle attuali è minore o uguale al voto mappato
                        e in base al numero visualizza stelle piene o vuote
                    -->
                    <i v-if="star <= mapVote(parseInt(movieShow.vote_average))" class="fa-solid fa-star"></i>
                    <i v-else class="fa-regular fa-star"></i>
                </span>
            </p>
            <p v-if="movieShow.overview" class="card-text">{{ movieShow.overview }}</p>
        </div>
    </div>
</template>

<style lang="scss">
.card {
    width: 400px;

    img {
        width: 400px;
        border-radius: 0;
    }

    .card-img-overlay {
        display: none;
        width: 400px;

    }

    &:hover .card-img-overlay {
        display: block;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .fa-star {
        color: rgb(255, 189, 7);
    }
}
</style>