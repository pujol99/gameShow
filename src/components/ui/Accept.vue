<template>
    <button class="continueButton" @click="atAccept()">
        {{ getLabel("accept") }}
    </button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: ["toAccept"],
    computed: {
        ...mapGetters({
            getLabel: "data/getLabel",
        }),
    },
    methods: {
        atAccept(){
            this.$store.commit(`stages/${this.toAccept}`)
        },
    },
};
</script>
