<template>
    <Renderer ref="renderer">
        <Camera :position="{ x: 0, y: 0, z: 100 }" />
        <Scene ref="scene">
            <NoisyImage
                v-for="lang in langs"
                :key="lang"
                :src="`./assets/images/${lang.type}.png`"
                :width="120"
                :z-coef="5"
                :position="{ x: lang.pos, y: 0, z: 0 }"
                @click="setLanguage(lang.type)"
                @pointerOver="onMouseOver"
            />
        </Scene>
    </Renderer>
</template>

<script>
import { mapActions } from "vuex";
import NoisyImage from "troisjs/src/components/noisy/NoisyImage.js";
export default {
    components: { NoisyImage },
    data() {
        return {
            langs: [
                {
                    type: "CAT",
                    pos: 45,
                },
                {
                    type: "ENG",
                    pos: -45,
                },
            ],
        };
    },
    methods: {
        ...mapActions({ setLanguage: "data/setLanguage" }),
        onMouseOver: function ({ over, component }) {
            component.mesh.position.z = over ? 7 : 0;
            document.getElementById("flag-space").style.cursor = over ? "pointer" : "default";
        },
    },
};
</script>w