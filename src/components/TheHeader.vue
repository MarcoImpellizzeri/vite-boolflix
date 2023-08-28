<script>
import { store, filterMovies } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        filterMovies
    }
}
</script>

<template>
    <header>
        <div class="container-fluid p-4">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Cerca un film o una serie"
                    aria-describedby="button-addon2" v-model="store.searchMovies">
                <button class="btn btn-secondary" type="button" id="button-addon2" @click="filterMovies">
                    Button
                </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.container-fluid {
    display: flex;
    justify-content: end;
    background-color: black;

    .input-group {
        width: 0;
        min-width: 300px;

        .form-control {
            border: 0;
            box-shadow: none;
        }
    }
}
</style>
