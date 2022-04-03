<template>
    <div>
        <div class="title">
            <Option :message="information.title" disabled />
        </div>
        <div class="options">
            <Option
                v-for="(option, index) in information.options"
                :key="option"
                :message="option"
                :index="index"
            />
        </div>
    </div>
</template>

<script>
import Option from "./Option";
export default {
    name: "Options",
    props: ["information"],
    components: {
        Option,
    },
};
</script>
