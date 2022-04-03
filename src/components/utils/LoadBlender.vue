<template>
    <div>
        
    </div>
</template>

<script>
import { TextureLoader, MeshBasicMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
export default {
    props: {
        path: String
    },
    methods: {
        init(scene) {
            //Loaders
            const textureLoader = new TextureLoader();
            const dracoLoader = new DRACOLoader();
            const gltfLoader = new GLTFLoader();
            dracoLoader.setDecoderPath("/assets/draco/");
            gltfLoader.setDRACOLoader(dracoLoader);

            //Textures 
            const bakedTexture = textureLoader.load(
                `/assets/scenes/${this.path}/baked.jpg`
            );
            bakedTexture.flipY = false;

            //Materials
            const bakedMaterial = new MeshBasicMaterial({
                map: bakedTexture,
            });
            const lightMaterial = new MeshBasicMaterial({
                color: 0xffffe5,
            });

            gltfLoader.load(`/assets/scenes/${this.path}/scene.glb`, gltf => {
                gltf.scene.traverse(child => {
                    child.material = bakedMaterial;
                });

                gltf.scene.children.filter(
                    child => child.name.includes("Light")
                ).forEach(child => child.material = lightMaterial);

                scene.add(gltf.scene);
            });
        },
    },
};
</script>
