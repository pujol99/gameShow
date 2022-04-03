<template>
    <Renderer ref="renderer" resize="window">
        <Camera
            ref="camera"
            :lookAt="{ x: 0, y: 1.5, z: 0 }"
            :position="{
                x: 1.2156695694719077,
                y: 0.2993947225727276,
                z: 4.048672963352252,
            }"
        />
        <Scene ref="scene" background="#000000">
            <AmbientLight :intensity="0.2" />
            <Cube ref="cube" name="night"/>
            <PointLight :intensity="0.5" :position="{ x: 0, y: 3, z: 0 }" />
            <LoadBlender ref="blender" path="scene2" />
            <LoadFBX
                ref="fbx"
                :models="[
                    {
                        path: 'Standing Arguing',
                        props: {
                            position: { x: -1, y: 0, z: 1 },
                            rotation: { y: Math.PI * 0.5 },
                            scale: { x: 0.01, y: 0.01, z: 0.01 },
                        },
                    },
                    {
                        path: 'Standing Arguing',
                        props: {
                            position: { x: 1, y: 0, z: 1 },
                            rotation: { y: -Math.PI * 0.5 },
                            scale: { x: 0.01, y: 0.01, z: 0.01 },
                        },
                    },
                ]"
            />
        </Scene>
    </Renderer>
</template>

<script>
import LoadBlender from "../utils/LoadBlender.vue";
import LoadFBX from "../utils/LoadFBX.vue";
import Cube from "../utils/Cube.vue";
export default {
    components: {
        LoadBlender,
        LoadFBX,
        Cube,
    },
    mounted() {
        this.renderer = this.$refs.renderer;
        this.scene = this.$refs.scene

        this.blender = this.$refs.blender;
        this.fbx = this.$refs.fbx;
        this.cube = this.$refs.cube;

        this.init();
    },
    methods: {
        init() {
            this.cube.init(this.scene)
            this.blender.init(this.scene);
            this.fbx.init();

            this.renderer.onBeforeRender(this.update);
        },
        update() {
            this.fbx.update();
        },
    },
};
</script>
