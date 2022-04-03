<template>
    <div class="popup" :class="{ popupActive: activated, popupInactive: deactivated }">
        <div class="popup-content">
            <h5>{{ message }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "Popup",
    data() {
        return {
            POPUP_TIME: 2,
            activated: false,
            deactivated: false,
        };
    },
    props: ["type", "message"],
    methods: {
        activate() {
            this.activated = true;
            this.deactivated = false;
            var that = this;
            setTimeout(function () {
                that.deactivate();
            }, this.POPUP_TIME*1000);
        },
        deactivate() {
            this.activated = false;
            this.deactivated = true;
        },
    },
};
</script>
