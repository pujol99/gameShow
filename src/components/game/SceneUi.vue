<template>
    <div class="scene-ui">
        <!-- Scene introduction -->
        <div v-if="sceneLoading" class="description">
            <h1>{{ information.description }}</h1>
        </div>
        <!-- Scene title -->
        <div class="title">
            <Option :message="information.title" disabled />
        </div>
        <!-- Scene footer -->
        <div class="footer" id="footer">
            <!-- Icons -->
            <div class="icons" :class="{ active: !sceneLoading }">
                <span class="info hided" id="mood">
                    <b>{{ moodFormatted }}</b>
                    <span id="emotion">{{currentEmotion}}</span>
                </span>
                <button @click="isExpanded = !isExpanded" class="material-icons icon hided">
                    {{ icon }}
                </button>
                <button class="material-icons icon hided" @click="this.$store.commit('stages/nextCamera')">360</button>
            </div>
            <!-- Scene Options -->
            <div class="options" :class="{ expanded: isExpanded }">
                <Option v-for="(option, index) in information.options" :key="option" :message="option" :index="index" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: ["information"],
    data() {
        return {
            isExpanded: true,
            emotions: ["😪", "😟", "😐", "😀", "😎"]
        };
    },
    watch: {
        sceneReporting(newValue, oldValue) {
            if (newValue === true) {
                document.getElementById("footer").remove();
            }
        },
    },
    computed: {
        ...mapGetters({
            sceneLoading: "stages/isSceneLoading",
            sceneReporting: "stages/isSceneReporting",
            currentCamera: "stages/getSceneCamera",
            mood: "data/getMood",
            getLabel: "data/getLabel",
        }),
        moodFormatted: function () {
            return `${this.getLabel("mood")}: ${Math.floor(this.mood * 100)}%`;
        },
        currentEmotion: function(){
            // Map mood[0~1] to emotions[1~4]
            return this.emotions[Math.floor( this.mood * this.emotions.length )]
        },
        icon: function () {
            return this.isExpanded ? "expand_more" : "expand_less";
        },
    },
};
</script>
