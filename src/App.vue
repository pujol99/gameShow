<template>
    <Welcome />
    <Game />
</template>

<script>
import Welcome from "./views/Welcome.vue";
import Game from "./views/Game.vue";

export default {
    components: {
        Welcome,
        Game
    },
};
</script>
