<template>
    <div></div>
</template>

<script>
import {
    TextureLoader,
    MeshBasicMaterial,
    Clock,
    ShaderMaterial,
    sRGBEncoding,
    Vector2,
    VideoTexture,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { mapGetters, mapActions } from "vuex";
export default {
    props: {
        sceneConfig: Object,
    },
    data() {
        return {
            isLoaded: false,
            clock: new Clock(),
        };
    },
    mounted() {
        //Loaders
        const textureLoader = new TextureLoader();
        const dracoLoader = new DRACOLoader();
        const gltfLoader = new GLTFLoader();
        dracoLoader.setDecoderPath("./assets/draco/");
        gltfLoader.setDRACOLoader(dracoLoader);

        //Textures
        const bakedTexture = textureLoader.load(
            `./assets/scenes/${this.sceneConfig.name}/baked.jpg`
        );
        bakedTexture.flipY = false;
        const screenTexture = textureLoader.load("./assets/images/screen.png");
        screenTexture.flipY = false;
        const monitorTexture = textureLoader.load("./assets/images/monitor.png");

        //Materials
        const bakedMaterial = new MeshBasicMaterial({ map: bakedTexture });
        bakedTexture.encoding = sRGBEncoding;
        const lightMaterial = new MeshBasicMaterial({ color: 0xffffff });

        gltfLoader.load(`./assets/scenes/${this.sceneConfig.name}/scene.glb`, gltf => {
            this.setAllMaterial(gltf, bakedMaterial);
            this.setMaterialIncludes(gltf, "Light", lightMaterial);

            this.setRedPos(gltf.scene.children.filter(child => child.name === "Red")[0].position)
            this.setBluePos(gltf.scene.children.filter(child => child.name === "Blue")[0].position)
            this.setYellowPos(gltf.scene.children.filter(child => child.name === "Yellow")[0].position)
            this.setCenterPos(gltf.scene.children.filter(child => child.name === "Center")[0].position)

            this.addScene(gltf.scene);
            this.isLoaded = true;
        });
    },
    computed: { ...mapGetters({ gltf: "stages/getGLTF", getCameraPos: "data/getCameraPos" }) },
    methods: {
        ...mapActions({
            addScene: "stages/addGLTFScene",
            setRedPos: "data/setRedPos",
            setYellowPos: "data/setYellowPos",
            setBluePos: "data/setBluePos",
            setCenterPos: "data/setCenterPos",
        }),
        update() {
            if (this.isLoaded) {
                // this.sceneConfig.update(this.gltf);
                // // Update uniforms
                // const elapsedTime = this.clock.getElapsedTime();
                // this.screenMaterial.uniforms.uTime.value = elapsedTime;
                // this.monitorMaterial.uniforms.uTime.value = elapsedTime;
            }
        },
        setMaterialIncludes(gltf, type, material) {
            gltf.scene.children
                .filter(child => child.name.includes(type))
                .forEach(child => (child.material = material));
        },
        setMaterial(gltf, type, material) {
            gltf.scene.children
                .filter(child => child.name === type)
                .forEach(child => (child.material = material));
        },
        setAllMaterial(gltf, material) {
            gltf.scene.traverse(child => {
                child.material = material;
            });
        },
    },
};
</script>
