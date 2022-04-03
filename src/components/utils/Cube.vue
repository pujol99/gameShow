<template>
    <div>
        
    </div>
</template>

<script>
import {
    CubeTextureLoader,
} from "three";

export default {
    props: ['name'],
    methods: {
        init(scene) {
            const cubeTextureLoader = new CubeTextureLoader();
            scene.scene.background = cubeTextureLoader.load([
                `./assets/textures/${this.name}/px.jpg`,
                `./assets/textures/${this.name}/nx.jpg`,
                `./assets/textures/${this.name}/py.jpg`,
                `./assets/textures/${this.name}/ny.jpg`,
                `./assets/textures/${this.name}/pz.jpg`,
                `./assets/textures/${this.name}/nz.jpg`,
            ]);
        }
    }
}
</script>