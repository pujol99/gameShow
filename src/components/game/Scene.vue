<template>
    <div v-if="currentStage(sceneName)">
        <SceneVisuals :config="config[sceneName]" />
        <SceneUi :information="options" />
    </div>
</template>

<script>
import { config } from "./configuration";
import { mapGetters } from "vuex";
export default {
    props: ["sceneName"],
    data() {
        return {
            config: config,
        };
    },
    computed: {
        ...mapGetters({
            currentStage: "stages/isCurrentStage",
            getLabel: "data/getLabel",
        }),
        options() {
            // Labels for this specific scene
            return {
                description: this.getLabel(`${this.sceneName}_desc`),
                title: this.getLabel(`${this.sceneName}_title`),
                options: this.getLabel(`${this.sceneName}_options`),
            };
        },
    },
};
</script>
