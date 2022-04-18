<template>
    <Renderer ref="renderer" resize="window">
        <PerspectiveCamera
            ref="camera"
            :position="cameraPosition"
            :lookAt="cameraLookAt"
        />
        <Scene ref="scene" background="#000000">
            <Loader ref="loader" :sceneConfig="{ gltf: { name: 'room' } }" />
        </Scene>
    </Renderer>
</template>

<script>
import { mapGetters } from "vuex";
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
            getParticipantPos: "data/getParticipantPos",
            getPrizesPosObject: "data/getPrizesPosObject",
        }),
    },
    watch: {
        stage(newValue, oldValue) {
            if (newValue === "Throw") {
                this.setParticipantView("Center")
            }
            else if (newValue === "Prize") {
                this.getClosestPrize()
            }
        },
    },
    methods: {
        setParticipantView(where){
            this.swapCameraPos(this.cameraPosition, this.getParticipantPos);
            this.swapCameraPos(this.cameraLookAt, this.getCameraPos(where));
        },
        getClosestPrize(){
            let closestPrize = null;
            let minDistance = 9999;
            for (const key in this.getPrizesPosObject) {
                let distance = this.getParticipantPos.distanceTo(this.getPrizesPosObject[key])
                if(distance < minDistance){
                    minDistance = distance
                    closestPrize = key
                }
            }
            console.log(closestPrize);
        },
        swapCameraPos(from, to) {
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
