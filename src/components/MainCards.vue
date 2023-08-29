<script>
import { store } from '../store';
import CardMovie from './CardMovie.vue'
import CardShow from './CardShow.vue'

export default {
    components: {
        CardMovie,
        CardShow
    },
    data() {
        return {
            store,
        }
    },
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
}
</style>