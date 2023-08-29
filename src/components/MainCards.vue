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
    <div class="my-container px-5 pt-5 pb-4 g-2">
        <CardMovie />
    </div>
    <div class="my-container px-5 pt-5 pb-4 g-2">
        <CardShow />
    </div>
</template>

<style lang="scss" scoped>
.my-container {
    overflow-x: auto;
    display: flex;
}
</style>