<template>
    <div v-if="currentScene('Survey')">
        <Form
            :propQuestions="surveyQuestions"
            :title="getLabel('survey_title')"
            saveFunction="saveSurveyDecisions"
        />
    </div>
</template>

<script>
import Form from "../components/ui/Form.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        Form,
    },
    computed: {
        surveyQuestions() {
            return {
                s1: {
                    title: this.getLabel("s1_title"),
                    options: this.getLabel("survey_options"),
                },
                s2: {
                    title: this.getLabel("s2_title"),
                    options: this.getLabel("survey_options"),
                },
            };
        },
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
            getLabel: "data/getLabel",
        }),
    },
};
</script>
