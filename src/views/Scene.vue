<template>
    <div v-if="currentStage(sceneName)">
        <slot></slot>
        <!-- <Options :information="options" /> -->
    </div>
</template>

<script>
// import Options from "../components/ui/Options.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        // Options,
    },
    props: ["sceneName"],
    computed: {
        ...mapGetters({currentStage: "stages/isCurrentStage",  getLabel: "data/getLabel"}),
        options() {
            return {
                title: this.getLabel(`${this.sceneName}_title`),
                options: this.getLabel(`${this.sceneName}_options`),
            };
        },
    },
};
</script>
