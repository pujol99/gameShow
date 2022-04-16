<template>
    <div>
        <SceneVisuals />
        <SceneUI />
        <Welcome v-if="currentStage === 'Welcome'"/>
        <Rules v-if="currentStage === 'Rules'"/>
        <Title v-if="currentStage === 'Title'" :title="getRoundTitle"/>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            getLabel: "data/getLabel",
            getRoundTitle: "stages/getRoundTitle",
            currentStage: "stages/getCurrentStage"
        }),
        ...mapState({
        })
    },
};
</script>
