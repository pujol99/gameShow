<template>
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

        this.objects = [this.$refs.gltf, this.$refs.fbx].filter(object => object);
    },
    methods: {
        update() {
            this.objects.forEach(element => element.update());
        },
        isLoaded() {
            return (!this.$refs.gltf || this.$refs.gltf.isLoaded) && (!this.$refs.fbx || this.$refs.fbx.isLoaded)
        },
    },
};
</script>
