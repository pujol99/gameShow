<template>
    <About />
    <Scenes />
    <Survey />
    <Final />
</template>

<script>
import About from "../src/views/About.vue";
import Scenes from "../src/views/Scenes.vue";
import Survey from "../src/views/Survey.vue";
import Final from "../src/views/Final.vue";

export default {
    name: "Game",
    components: {
        About,
        Scenes,
        Survey,
        Final,
    },
};
</script>
