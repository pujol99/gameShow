<template>
    <EffectComposer ref="effect">
      <RenderPass />
    </EffectComposer>
</template>

<script>
import { gsap } from "gsap";
import { vs, fs } from "/public/assets/shaders/loadingScreen";
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { mapActions } from "vuex";
export default {
    data() {
        return {
            FADETIME: 1.0,
            vs: vs,
            fs: fs
        };
    },
    mounted() {
        this.effect = this.$refs.effect;

        this.loadingScreen = new ShaderPass({
            uniforms: {
                uAlpha: { value: 1.0 },
                uTime: { value: 0.0 },
            },
            vertexShader: this.vs,
            fragmentShader: this.fs
        })
        this.effect.addPass(this.loadingScreen)
    },
    methods: {
        ...mapActions({ loadingFinish: "stages/loadingFinish" }),
        finish() {
            var that = this;
            gsap.to(this.loadingScreen.material.uniforms.uAlpha, {
                duration: this.FADETIME,
                value: 0.0,
                onComplete: function () {
                    that.loadingFinish()
                    that.loadingScreen.enabled = false
                },
            });
        },
        update() {
            this.loadingScreen.material.uniforms.uTime.value = this.effect.composer.clock.elapsedTime;
        },
    },
};
</script>
