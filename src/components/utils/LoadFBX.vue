<template>
    <Aura ref="aura"/>
    <FbxModel
        v-for="model in models"
        :key="model"
        :src="`./assets/models/${model.path}.fbx`"
        @load="onLoad"
        :scale="model.scale || { x: 0.01, y: 0.01, z: 0.01 }"
        :position="model.position || { x: 0, y: 0, z: 0 }"
        :rotation="model.rotation || { y: -Math.PI * 0.5 }"
    />
</template>

<script>
import { AnimationMixer, Clock } from "three";
export default {
    props: {
        models: Array,
    },
    mounted() {
        this.isLoaded = false
        this.animations = [];
    },
    methods: {
        update() {
            this.animations.forEach(function (anim) {
                anim.animation.update(anim.clock.getDelta());
            });

            this.$refs.aura.update()
        },
        onLoad(object) {
            var animation = new AnimationMixer(object);
            
            animation.clipAction(object.animations[0]).play();
            var clock = new Clock();

            if(this.animations.length === 0) this.$refs.aura.init(this.models[0].position)

            this.animations.push({ animation, clock });
            
            if (this.animations.length === this.models.length)
                this.isLoaded = true;
        },
    },
};
</script>
