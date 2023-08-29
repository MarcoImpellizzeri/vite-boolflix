<script>
import { store } from '../store';
import Card from './Card.vue'

export default {
    components: {
        Card
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">
        <Card />
    </div>
</template>

<style lang="scss">
.container {
    overflow-x: auto;
    display: flex;
}
</style>