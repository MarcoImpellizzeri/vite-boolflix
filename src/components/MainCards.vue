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
}
</script>

<template>
    <div class="container py-4">
        <ul class="list-unstyled" v-for="(movieShow, i) in store.moviesShowsList" :key="`'movieShow'${i}`">
            <li v-if="movieShow.poster_path"><img :src="`https://image.tmdb.org/t/p/w185${movieShow.poster_path}`" alt=""></li>
            <li v-if="movieShow.name"><b>Titolo:</b> {{ movieShow.name }}</li>
            <li v-if="movieShow.title"><b>Titolo:</b> {{ movieShow.title }}</li>
            <li v-if="movieShow.original_title"><b>Titolo in lingua originale:</b> {{ movieShow.original_title }}</li>
            <li v-if="movieShow.original_name"><b>Titolo in lingua originale:</b> {{ movieShow.original_name }}</li>
            <li v-if="movieShow.original_language"><b>Ligua:</b><lang-flag :iso="movieShow.original_language" /></li>
            <li v-if="movieShow.vote_average"><b>Voto:</b> {{ movieShow.vote_average }}</li>
        </ul>
    </div>
</template>

<style lang="scss">

</style>