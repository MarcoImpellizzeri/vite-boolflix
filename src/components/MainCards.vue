<script>
import { store, filterMoviesShowsStart } from '../store';
import CardMovie from './CardMovie.vue'
import CardShow from './CardShow.vue'
import CardsAll from './CardsAll.vue'

export default {
    components: {
        CardMovie,
        CardShow,
        CardsAll
    },
    data() {
        return {
            store,
        }
    },
    mounted() {
        filterMoviesShowsStart();
    }
}
</script>

<template>
    <h2>FILM</h2>
    <div class="my-container px-5 pt-5 pb-4 g-2">
        <CardMovie />
    </div>
    <h2>SERIE</h2>
    <div class="my-container px-5 pt-5 pb-4 g-2">
        <CardShow />
    </div>
    <h2>FILM E SERIE</h2>
    <div class="my-container px-5 pt-5 pb-4 g-2">
        <CardsAll />
    </div>
</template>

<style lang="scss" scoped>

h2 {
    padding: 2rem 0 0 4rem;
    color: white;
    font-weight: bold;
}
.my-container {
    overflow-x: auto;
    display: flex;

    &::-webkit-scrollbar {
        width: 12px;
        background-color: #000000;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #b10909;
        border-radius: 25px;
        border: 4px solid #000000;
    }
}
</style>