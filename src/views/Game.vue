<template>
    <div v-if="currentScene('Game')">
        <SceneVisuals />
        <Rules v-if="!rulesReaded"/>
        <Title v-if="rulesReaded && !roundPresented" :title="getRoundTitle"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
            rulesReaded: "stages/rulesReaded",
            getLabel: "data/getLabel",
            getRoundTitle: "stages/getRoundTitle",
        }),
    },
};
</script>
