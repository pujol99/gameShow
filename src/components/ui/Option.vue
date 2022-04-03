<template>
    <div v-if="message">
        <button
            @click="onClick"
            class="option"
            :class="{
                active: !sceneLoading,
                disabled: disabled,
            }"
        >
            {{ message }}
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "Option",
    props: {
        index: Number,
        message: String,
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapGetters({ sceneLoading: "stages/isSceneLoading" }),
    },
    methods: {
        ...mapActions({ nextStage: "stages/nextStage" }),
        onClick() {
            // if button is active
            if (!this.disabled) {
                this.$store.commit("data/saveSceneDecision", this.index);
                this.nextStage();
            }
        },
    },
};
</script>
