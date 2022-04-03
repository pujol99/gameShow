<template>
    <div v-if="currentScene('Final')">
        <div class="card-container">
            <div class="card-title">
                <h1>{{ getLabel("final_title") }}</h1>
            </div>
            <div class="card-body">
                <p>{{ getLabel("final_description") }}</p>
            </div>
            <div class="card-action">
                <button @click="reloadPage()">
                    {{ getLabel("final_restart") }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
            getLabel: "data/getLabel",
        }),
    },
    methods: {
        reloadPage() {
            window.location.reload();
        },
    },
};
</script>
