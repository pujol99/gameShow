<template>
    <div class="card-container">
        <div class="card-title">
            <h1>{{ getLabel("rules_title") }}</h1>
        </div>
        <div class="card-body">
            <div class="rule" v-show="ruleIndex === 0">
                <p>{{ getLabel("rules_1") }}</p>
            </div>
            <div class="rule" v-show="ruleIndex === 1">
                <p>{{ getLabel("rules_2") }}</p>
            </div>
        </div>
        <div class="card-action">
            <Accept toAccept="setRulesReaded" v-if="ruleIndex === nRules - 1"/>
            <button class="continueButton" v-if="ruleIndex !== nRules - 1 && ruleIndex > 0" @click="ruleIndex--">
                {{ getLabel("back") }}
            </button>
            <button class="continueButton" v-if="ruleIndex !== nRules - 1" @click="ruleIndex++">
                {{ getLabel("next") }}
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            ruleIndex: 0,
            nRules: 0
        }
    },
    mounted() {
        this.nRules = document.querySelectorAll('.rule').length;
    },
    computed: {
        ...mapGetters({ getLabel: "data/getLabel", }),
    },
};
</script>