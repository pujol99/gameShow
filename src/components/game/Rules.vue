<template>
    <div>
        <div class="card-container">
            <div class="card-title">
                <h1>{{ getLabel("rules_title") }}</h1>
            </div>
            <div class="card-body">
                <div class="rule">
                    <p>{{ getLabel("rules_1") }}</p>
                </div>
                <div class="rule">
                    <p>{{ getLabel("rules_2") }}</p>
                </div>
            </div>
            <div class="card-action">
                <Continue nextStage="Throw"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({ getLabel: "data/getLabel", }),
    },
};
</script>