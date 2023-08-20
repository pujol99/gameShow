<template>
    <button class="continueButton">
        {{ getLabel("close") }}
    </button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({ getLabel: "data/getLabel" }),
    },
};
</script>
