<script>
import { store, filterMoviesShows } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        filterMoviesShows
    }
}
</script>

<template>
    <header>
        <div class="container-fluid p-4">
            <h1 class="text-danger text-uppercase m-0 fw-bold">Boolflix</h1>
            <div>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Cerca un film o una serie"
                        aria-describedby="button-addon2" v-model="store.searchMoviesShows">
                    <button class="btn btn-secondary" type="button" id="button-addon2" @click="filterMoviesShows">
                        Cerca
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.container-fluid {
    display: flex;
    justify-content: space-between;
    background-color: black;
    align-items: center;

    .input-group {
        width: 0;
        min-width: 280px;

        .form-control {
            border: 0;
            box-shadow: none;
        }
    }
}
</style>
