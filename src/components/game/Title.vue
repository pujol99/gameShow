<template>
    <div class="center">
        <div class="round-title">
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: ["title"],
    mounted() {
        //gsap to throw
    },
    computed: {
        ...mapGetters({ getLabel: "data/getLabel", }),
    },
};
</script>