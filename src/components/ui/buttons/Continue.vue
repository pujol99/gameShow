<template>
    <button class="continueButton" @click="!this.disabled && setStage(nextStage)">
        {{ getLabel("continue") }}
    </button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    props: {
        nextStage: String,
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapGetters({ getLabel: "data/getLabel" }),
    },
    methods: {
        ...mapActions({ setStage: "stages/setStage" }),
    },
};
</script>
