<template>
    <div>
        <div class="card-container">
            <div class="card-title">
                <h1>{{ getLabel("welcome_title") }}</h1>
            </div>
            <div class="card-body">
                <p>{{ getLabel("welcome_body") }}</p>
            </div>
            <div class="card-action">
                <Continue nextStage="Rules"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            getLabel: "data/getLabel",
        }),
    },
};
</script>
