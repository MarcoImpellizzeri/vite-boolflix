<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">
        <ul class="list-unstyled" v-for="(movieShow, i) in store.moviesShowsList" :key="`'movieShow'${i}`">
            <li class="title" v-if="movieShow.name">{{ movieShow.name }}</li>
            <li class="title" v-if="movieShow.title">{{ movieShow.title }}</li>
            <li v-if="movieShow.original_title">{{ movieShow.original_title }}</li>
            <li v-if="movieShow.original_name">{{ movieShow.original_name }}</li>
            <li v-if="movieShow.original_language">{{ movieShow.original_language }}</li>
            <li v-if="movieShow.vote_average">{{ movieShow.vote_average }}</li>
        </ul>
    </div>
</template>

<style lang="scss">
.title {
    font-weight: bold;
}
</style>