<template>
    <button @click="nextStage()">{{ getLabel("continue") }}</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({ getLabel: "data/getLabel" }),
    },
    methods: {
        ...mapActions({ nextStage: "stages/nextStage" }),
    },
};
</script>
