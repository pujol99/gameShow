<template>
    <Renderer ref="renderer" resize="window" orbitCtrl>
        <PerspectiveCamera :position="{ y:2, z: 3 }"/>
        <Scene ref="scene" background="#000000">
            <AmbientLight :intensity="0.8" />
            <Loader
                ref="loader"
                :sceneConfig="{
                    gltf: {
                        name: 'room',
                        update: function (gltf) {},
                    },
                    fbx: null
                }"
            />
        </Scene>
    </Renderer>
</template>

<script>
import { mapGetters } from "vuex";
import { sRGBEncoding } from "three";
export default {
    data() {
        return {
            ANIM_TIME: 1.0,
        };
    },
    mounted() {
        this.scene = this.$refs.scene;
        this.renderer = this.$refs.renderer;
        this.renderer.renderer.outputEncoding = sRGBEncoding;

        this.$store.commit("stages/setScene", this.scene);
        this.$store.commit("stages/setRenderer", this.renderer);

        this.renderer.onBeforeRender(() => {
            this.$refs.loader.update();
        });
    },
    computed: {
        ...mapGetters({ gltf: "stages/getGLTF" }),
    },
};
</script>
