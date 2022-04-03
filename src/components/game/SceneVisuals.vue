<template>
    <Renderer ref="renderer" resize="window">
        <PerspectiveCamera
            ref="camera"
            :fov="70"
            :position="cameraPosition"
            :lookAt="cameraLookAt"
        />
        <Scene ref="scene" background="#000000">
            <AmbientLight :intensity="0.8" />
            <Cube ref="cube" :name="config.envMap" />
            <Loader
                ref="loader"
                :sceneConfig="{
                    gltf: config.gltf,
                    fbx: config.fbx,
                }"
            />
        </Scene>
    </Renderer>
</template>

<script>
import { mapGetters } from "vuex";
import { gsap } from "gsap";
import { sRGBEncoding } from "three";
export default {
    props: {
        config: Object,
    },
    data() {
        let cameraLookAts = this.config.cameraLookAts;
        let cameraPositions = this.config.cameraPositions;
        return {
            cameras: cameraPositions.length,
            cameraPositions,
            cameraPosition: Object.assign({}, cameraPositions[0]), // make indep. copy
            cameraLookAts,
            cameraLookAt: Object.assign({}, cameraLookAts[0]),
            ANIM_TIME: 1.0,
        };
    },
    mounted() {
        this.scene = this.$refs.scene;
        this.renderer = this.$refs.renderer;
        this.renderer.renderer.outputEncoding = sRGBEncoding;

        this.$store.commit("stages/setScene", this.scene);
        this.$store.commit("stages/setRenderer", this.renderer);

        if (this.config.envMap) this.$refs.cube.init(this.scene);

        this.renderer.onBeforeRender(() => {
            this.$refs.loader.update();
        });
    },
    watch: {
        camera(newValue, oldValue) {
            newValue = newValue % this.cameras;
            this.swap(this.cameraPosition, this.cameraPositions[newValue]);
            this.swap(this.cameraLookAt, this.cameraLookAts[newValue]);
        },
    },
    computed: {
        ...mapGetters({ camera: "stages/getSceneCamera", gltf: "stages/getGLTF" }),
    },
    methods: {
        swap(from, to) {
            gsap.to(from, {
                duration: this.ANIM_TIME,
                x: to.x,
                y: to.y,
                z: to.z,
            });
        },
    },
};
</script>
