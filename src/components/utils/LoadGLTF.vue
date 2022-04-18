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

        //Materials
        const bakedMaterial = new MeshBasicMaterial({ map: bakedTexture });
        bakedTexture.encoding = sRGBEncoding;

        gltfLoader.load(`./assets/scenes/${this.sceneConfig.name}/scene.glb`, gltf => {
            this.setAllMaterial(gltf, bakedMaterial);

            // Retrieve camera positions
            for (const key in this.getCameraPosObject) {
                this.setCameraPos({
                    pos: gltf.scene.children.filter(child => child.name === key)[0]
                        .position,
                    name: key,
                });
            }

            // Retrieve prizes positions
            for (const key in this.getPrizesPosObject) {
                this.setPrizePos({
                    pos: gltf.scene.children.filter(child => child.name === key)[0]
                        .position,
                    name: key,
                });
            }
            
            this.addScene(gltf.scene);
            this.isLoaded = true;
        });
    },
    computed: {
        ...mapGetters({
            gltf: "stages/getGLTF",
            getCameraPosObject: "data/getCameraPosObject",
            getPrizesPosObject: "data/getPrizesPosObject",
        }),
    },
    methods: {
        ...mapActions({
            addScene: "stages/addGLTFScene",
            setCameraPos: "data/setCameraPos",
            setPrizePos: "data/setPrizePos",
        }),
        update() {
            if (this.isLoaded) {
                console.log();
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
