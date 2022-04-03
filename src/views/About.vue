<template>
    <div v-if="currentScene('About')">
        <Form
            :propQuestions="aboutQuestions"
            :title="getLabel('about_title')"
            saveFunction="saveAboutDecisions"
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
        aboutQuestions() {
            return {
                age: {
                    title: this.getLabel("about_age"),
                    options: ["10-", "11-15", "15-19", "20+"],
                },
                gender: {
                    title: this.getLabel("about_gender"),
                    options: this.getLabel("about_gender_options"),
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
