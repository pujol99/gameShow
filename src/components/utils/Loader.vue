<template>
    <LoadingScreen ref="loadingScreen" />
    <LoadGLTF ref="gltf" :sceneConfig="sceneConfig.gltf" v-if="sceneConfig.gltf" />
    <LoadFBX ref="fbx" :models="sceneConfig.fbx" v-if="sceneConfig.fbx"/>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: {
        sceneConfig: Object,
    },
    computed: { ...mapGetters({ isSceneLoading: "stages/isSceneLoading" }) },
    mounted() {
        this.loadingScreen = this.$refs.loadingScreen;

        this.objects = [this.$refs.gltf, this.$refs.fbx].filter(object => object);
    },
    methods: {
        update() {
            this.objects.forEach(element => element.update());

            if (this.isSceneLoading) this.loadingScreen.update();

            if (this.isSceneLoading && this.isLoaded()) this.loadingScreen.finish();
        },
        isLoaded() {
            return (!this.$refs.gltf || this.$refs.gltf.isLoaded) && (!this.$refs.fbx || this.$refs.fbx.isLoaded)
        },
    },
};
</script>
