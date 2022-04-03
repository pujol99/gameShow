<template>
    <div v-if="currentScene('Welcome')">
        <div class="card-container">
            <div class="card-title">
                <h1>{{ getLabel("welcome_title") }}</h1>
            </div>
            <div class="card-body">
                <p>{{ getLabel("welcome_description") }}</p>
            </div>
            <div class="card-action">
                <Continue />
            </div>
            <div id="flag-space">
                <Flag/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Continue from "../components/ui/Continue.vue";
import Flag from "../components/ui/SelectFlag";
export default {
    components: {
        Continue,
        Flag,
    },
    computed: {
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
            getLabel: "data/getLabel",
        }),
    },
};
</script>