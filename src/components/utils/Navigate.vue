<template>

</template>

<script>
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls.js";
export default {
    data() {
        return {
            controls: null,
            up: false,
            down: false,
            camera: null
        }
    },
    methods: {
        init(camera, canvas) {
            this.camera = camera
            this.controls = new FirstPersonControls(
                camera,
                canvas
            );
            this.controls.enableDamping = true;
            this.controls.constrainVertical = true;
            this.controls.verticalMax = Math.PI - Math.PI / 4;
            this.controls.verticalMin = Math.PI / 4;
            this.controls.lookSpeed = 0.01;

            document.addEventListener("keydown", this.onDocumentKeyDown, false);
            document.addEventListener("keyup", this.onDocumentKeyUp, false);
        },
        update(delta) {
            this.controls.update(delta * 10);

            if (this.up) this.camera.position.y += 0.02;
            if (this.down) this.camera.position.y -= 0.02;
        },
        onDocumentKeyDown(event) {
            if (event.which == 81) {
                this.up = true;
            } else if (event.which == 69) {
                this.down = true;
            }
        },
        onDocumentKeyUp(event) {
            if (event.which == 81) {
                this.up = false;
            } else if (event.which == 69) {
                this.down = false;
            }
        },
    },
};
</script>
