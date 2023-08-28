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
        <ul>
            <li v-for="(movie, i) in store.moviesList" :key="`'movie'${i}`">{{ movie.title }}
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