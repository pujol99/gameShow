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
            `./assets/gltf/${this.sceneConfig.name}/baked.jpg`
        );
        bakedTexture.flipY = false;

        //Materials
        const bakedMaterial = new MeshBasicMaterial({ map: bakedTexture });
        bakedTexture.encoding = sRGBEncoding;

        gltfLoader.load(`./assets/gltf/${this.sceneConfig.name}/scene.glb`, gltf => {
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
            gltf.scene.children
                .filter(child => child.name.includes("_"))
                .forEach(child =>
                    this.setPrizePos({
                        pos: child.position,
                        name: child.name.substring(1),
                    })
                );
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
                // this.sceneConfig.update(this.gltf);
                // // Update uniforms
                // const elapsedTime = this.clock.getElapsedTime();
                // this.screenMaterial.uniforms.uTime.value = elapsedTime;
                // this.monitorMaterial.uniforms.uTime.value = elapsedTime;
            }
        },
        setAllMaterial(gltf, material) {
            gltf.scene.traverse(child => {
                child.material = material;
            });
        },
    },
};
</script>
