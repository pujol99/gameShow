<template>
    <div>
        <SceneVisuals />
        <Round v-if="currentStage === 'Round'"/>
        <Welcome v-if="currentStage === 'Welcome'"/>
        <Rules v-if="currentStage === 'Rules'"/>
        <Title v-if="currentStage === 'Title'" :title="getRoundTitle"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SceneVisuals from "./views/SceneVisuals";
import Round from "./views/Round";
import Rules from "./views/Rules";
import Title from "./views/Title";
import Welcome from "./views/Welcome";
export default {
    computed: {
        ...mapGetters({
            getRoundTitle: "stages/getRoundTitle",
            currentStage: "stages/getCurrentStage"
        }),
    },
    components: {
        SceneVisuals,
        Round,
        Rules,
        Title,
        Welcome,
    }
};
</script>
