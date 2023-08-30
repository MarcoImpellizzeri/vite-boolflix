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
    <div v-for="(all, i) in store.allList" :key="`'all'${i}`">
        <div class="card text-bg-dark mx-2" v-if="all.poster_path !== null">
            <img v-if="all.poster_path" :src="`https://image.tmdb.org/t/p/w342${all.poster_path}`"
                class="card-img rounded-0" alt="">
            <div class="card-img-overlay overflow-y-auto rounded-0">
                <p v-if="all.name" class="card-text"><b>Titolo:</b>{{ all.name }}</p>
                <p v-if="all.title" class="card-text"><b>Titolo:</b>{{ all.title }}</p>
                <p v-if="all.original_title" class="card-text"><b>Titolo in lingua originale:</b> {{
                    all.original_title }}</p>
                <p v-if="all.original_name" class="card-text"><b>Titolo in lingua originale:</b> {{
                    all.original_name }}</p>
                <p v-if="all.original_language" class="card-text"><b>lingua originale:</b> <lang-flag
                        :iso="all.original_language" /></p>
                <!-- uso parseInt per rendere il numero intero -->
                <p v-if="all.vote_average" class="card-text"><b>Voto:</b>
                    <!-- ciclo for su un totale di 5 volte che sono le stelle totali -->
                    <span v-for="star in 5">
                        <!-- 
                        questa espressione controlla se il numero di stelle attuali è minore o uguale al voto mappato
                        e in base al numero visualizza stelle piene o vuote
                    -->
                        <i v-if="star <= mapVote(parseInt(all.vote_average))" class="fa-solid fa-star"></i>
                        <i v-else class="fa-regular fa-star"></i>
                    </span>
                </p>
                <p v-if="all.overview" class="card-text">{{ all.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>