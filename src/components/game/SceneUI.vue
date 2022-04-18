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
                <div
                    class="throw-content"
                    :class="{ 'throw-content-disabled': !canThrow }"
                    @click="onThrow"
                >
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
import { Vector3 } from "three";
export default {
    data() {
        return {};
    },
    mounted() {},
    computed: {
        canThrow() {
            return this.stage === "Throw";
        },
        ...mapGetters({
            stage: "stages/getCurrentStage",
            gltf: "stages/getGLTF",
            getCameraPos: "data/getCameraPos",
            getPrizesPosObject: "data/getPrizesPosObject",
        }),
    },
    methods: {
        ...mapActions({ setStage: "stages/setStage" }),
        onThrow() {
            if (this.canThrow) {
                this.rotateWheel(Math.PI * 0.75);
                let up = new Vector3(0, 1, 0);
                for (const key in this.getPrizesPosObject) {
                    this.rotateAboutPoint(
                        this.gltf.children.filter(child => child.name === key)[0],
                        this.getCameraPos("Center"),
                        up,
                        Math.PI * 0.75
                    );
                }
            }
        },
        rotateWheel(angle) {
            let wheel = this.gltf.children.filter(child => child.name === "Wheel")[0];
            var that = this;
            let newPos = wheel.rotation.y + angle;
            gsap.to(wheel.rotation, {
                duration: 2.0,
                y: newPos,
                onComplete: function () {
                    that.setStage("Prize");
                },
            });
        },
        rotateAboutPoint(obj, point, axis, theta, pointIsWorld) {
            pointIsWorld = pointIsWorld === undefined ? false : pointIsWorld;

            if (pointIsWorld) {
                obj.parent.localToWorld(obj.position); // compensate for world coordinate
            }

            obj.position.sub(point); // remove the offset
            obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
            obj.position.add(point); // re-add the offset

            if (pointIsWorld) {
                obj.parent.worldToLocal(obj.position); // undo world coordinates compensation
            }

            obj.rotateOnAxis(axis, theta); // rotate the OBJECT
        },
    },
};
</script>
