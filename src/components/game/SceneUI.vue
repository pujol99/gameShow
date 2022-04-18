<template>
    <div class="footer">
        <div class="subfooter">
            <div class="money">
                <h2>50$</h2>
            </div>
            <div class="totalMoney">
                <h5>450$</h5> 
            </div>
        </div>
        <div class="mainFooter">
            <div>
                <div class="perks">
                    <p>Perks</p> 
                </div>
            </div>
            <div class="throw">
                <div class="throw-content" :class="{ 'throw-content-disabled': !canThrow }" @click="canThrow && rotateWheel()">
                    <h3>Throw</h3>
                </div>
            </div>
            <div>
                <div class="vowels">
                    <div class="vowel">A</div>
                    <div class="vowel">E</div>
                    <div class="vowel">I</div>
                    <div class="vowel">O</div>
                    <div class="vowel">U</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { gsap } from "gsap";
export default {
    data() {
        return {
        };
    },
    mounted() {
    },
    computed: {
        canThrow() {
            return this.stage === 'Throw'
        },
        ...mapGetters({
            stage: "stages/getCurrentStage",
            gltf: "stages/getGLTF",
        }),
    },
    methods: {
        ...mapActions({ setStage: "stages/setStage" }),
        rotateWheel(){
            let wheel = this.gltf.children.filter(child => child.name === "Wheel")[0]
            var that = this;
            gsap.to(wheel.rotation, {
                duration: 2.0,
                y: Math.PI,
                onComplete: function () {
                    that.setStage("Prize")
                },
            });
        }
    },
};
</script>
