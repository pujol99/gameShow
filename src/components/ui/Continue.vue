<template>
    <button class="continueButton" @click="!this.disabled && nextStage()">
        {{ getLabel("continue") }}
    </button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapGetters({ getLabel: "data/getLabel" }),
    },
    methods: {
        ...mapActions({ nextStage: "stages/nextStage" }),
    },
};
</script>
