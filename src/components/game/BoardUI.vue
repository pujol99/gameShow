<template>
    <div>
        <div class="card-container">
            <div class="card-body">
                <div class="board" v-for="phrase in formattedPuzzle" :key="phrase">
                    <p class="letter" :class="{ void: letter === ' ' }" v-for="letter in phrase" :key="letter">
                        {{ letter }}
                    </p>
                </div>
            </div>
            <div class="card-action"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            getLabel: "data/getLabel",
            getPuzzle: "data/getPuzzle",
        }),
        formattedPuzzle: function () {
            //  Golpeo las manos y me froto tobillos y rodillas
            // _GOLPEO_LAS_
            //__MANOS_Y_ME__
            //FROTO_TOBILLOS
            // _Y_RODILLAS_
            let puzzle = this.getPuzzle;
            let formattedPuzzle = [];
            splitText();
            cleanText();
            return formattedPuzzle;

            function splitText(){
                let left = 0;
                for (const space of [12, 14, 14, 12]) {
                    let right = space + left;
                    if (right > puzzle.length) {
                        formattedPuzzle.push(puzzle.slice(left, puzzle.length).toUpperCase());
                        break;
                    }
                    while (puzzle[right] !== " ") right--;
                    formattedPuzzle.push(puzzle.slice(left, right + 1).toUpperCase());
                    left = right + 1;
                }    
            }

            function cleanText(){
                let index = 0;
                for (const space of [12, 14, 14, 12]) {
                    let spacesLeft = space - formattedPuzzle[index].length
                    if (spacesLeft === -1) {
                        formattedPuzzle[index] = formattedPuzzle[index].slice(0, -1)
                    }
                    let subIndex = 0
                    while(spacesLeft > 0){
                        if(subIndex%2 === 0) formattedPuzzle[index] = " " + formattedPuzzle[index]
                        else formattedPuzzle[index] = formattedPuzzle[index] + " "
                        spacesLeft--
                        subIndex++
                    }
                    index++
                }
            }
        },
    },
};
</script>
