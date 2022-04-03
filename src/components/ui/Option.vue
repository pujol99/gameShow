<template>
    <button
        v-if="message"
        class="option hided"
        :class="{
            active: !sceneLoading,
            disabled: disabled,
        }"
        @click="onClick"
    >
        {{ message }}
    </button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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
        onClick() {
            if (!this.disabled) this.$store.commit("data/saveSceneDecision", this.index);
        },
    },
};
</script>
