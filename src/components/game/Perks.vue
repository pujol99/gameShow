<template>
    <div>
        <div class="card-container">
            <div class="card-body">
                <div v-for="perk in roundPerks" :key="perk" class="perk">
                    {{perk}}
                </div>
            </div>
            <div class="card-action">
                <Close @click="popStage()"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters({
            getLabel: "data/getLabel",
            roundPerks: "data/getParticipantPerksRound",
            currentStage: "stages/getCurrentStage"
        }),
    },
    methods: {
        ...mapActions({ popStage: "stages/popStage" })
    },
};
</script>
