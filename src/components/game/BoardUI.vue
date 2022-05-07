<template>
    <div>
        <div class="card-container">
            <div class="card-body">
                <div class="board" v-for="phrase in formattedPuzzle" :key="phrase">
                    <p
                        class="letter"
                        :class="{ void: letter === ' ' }"
                        v-for="letter in phrase"
                        :key="letter"
                    >
                        {{ letter }}
                    </p>
                </div>
            </div>
            <div class="card-action"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters({
            getLabel: "data/getLabel",
            getPuzzle: "data/getPuzzle",
        }),
        formattedPuzzle: function () {
            //Golpeo las manos y me froto tobillos y rodillas
            // _GOLPEO_LAS_
            //__MANOS_Y_ME__
            //FROTO_TOBILLOS
            // _Y_RODILLAS_
            let puzzle = this.getPuzzle
            let prevIterator = 0
            let formattedPuzzle = []
            for(const space of [12, 14, 14, 12]) {
                let iterator = space + prevIterator;
                console.log(iterator);
                while (puzzle[iterator] !== " ") iterator--;
                formattedPuzzle.push(puzzle.slice(prevIterator, iterator+1).toUpperCase())
                prevIterator = iterator+1
            }
            return formattedPuzzle
        }
    },
    methods: {
        ...mapActions({ popStage: "stages/popStage" }),
    },
};
</script>
