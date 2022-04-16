<template>
    <Renderer ref="renderer" resize="window">
        <PerspectiveCamera
            ref="camera"
            :position="cameraPosition"
            :lookAt="cameraLookAt"
        />
        <Scene ref="scene" background="#000000">
            <AmbientLight :intensity="0.8" />
            <Loader ref="loader" :sceneConfig="{ gltf: { name: 'room' } }" />
        </Scene>
    </Renderer>
</template>

<script>
import { mapGetters } from "vuex";
import { sRGBEncoding, Vector3 } from "three";
import { gsap } from "gsap";
export default {
    data() {
        return {
            cameraPosition: { x: 2, y: 3, z: 0 },
            cameraLookAt: { x: 0, y: 0, z: 0 },
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
        ...mapGetters({
            stage: "stages/getCurrentStage",
            gltf: "stages/getGLTF",
            getCameraPos: "data/getCameraPos",
            centerPos: "data/getCameraPosCenter",
        }),
    },
    watch: {
        stage(newValue, oldValue) {
            console.log(newValue);
            if (newValue === "Throw") {
                this.startRound();
            }
        },
    },
    methods: {
        startRound() {
            const pos = this.getCameraPos;
            const center = this.centerPos;

            const posVector = new Vector3(pos.x, pos.y, pos.z);
            const centerVector = new Vector3(center.x, center.y, center.z);

            const posVectorLookAt = new Vector3(
                (pos.x + center.x) / 2,
                (pos.y + center.y) / 2 - 0.3,
                (pos.z + center.z) / 2
            );

            this.swap(this.cameraPosition, posVector);
            this.twoSwaps(this.cameraLookAt, centerVector, posVectorLookAt);
        },
        swap(from, to) {
            gsap.to(from, {
                duration: this.ANIM_TIME,
                x: to.x,
                y: to.y,
                z: to.z,
            });
        },
        twoSwaps(from, to, nextTo) {
            var that = this;
            gsap.to(from, {
                duration: this.ANIM_TIME,
                x: to.x,
                y: to.y,
                z: to.z,
                onComplete: function () {
                    that.swap(from, nextTo);
                },
            });
        },
    },
};
</script>
