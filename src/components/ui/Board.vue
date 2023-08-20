<template>
    <div>
        <div class="card-container">
            <div class="card-body">
                <div class="board" v-for="phrase in formattedPuzzle" :key="phrase">
                    <p
                        class="letter"
                        v-for="letter in phrase"
                        :class="{ void: letter === ' ', secret: letter === '*' }"
                        :key="letter"
                    >
                        {{ letter }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["puzzle"],
    computed: {
        formattedPuzzle: function () {
            let formattedPuzzle = [];
            let that = this;
            splitText();
            cleanText();
            return formattedPuzzle;

            function splitText() {
                let left = 0;
                for (const space of [12, 14, 14, 12]) {
                    let right = space + left;
                    if (right > that.puzzle.length) {
                        formattedPuzzle.push(that.puzzle.slice(left, that.puzzle.length).toUpperCase());
                        break;
                    }
                    while (that.puzzle[right] !== " ") right--;
                    formattedPuzzle.push(that.puzzle.slice(left, right + 1).toUpperCase());
                    left = right + 1;
                }
            }

            function cleanText() {
                let index = 0;
                for (const space of [12, 14, 14, 12]) {
                    let spacesLeft = space - formattedPuzzle[index].length;
                    if (spacesLeft === -1) {
                        formattedPuzzle[index] = formattedPuzzle[index].slice(0, -1);
                    }
                    let subIndex = 0;
                    while (spacesLeft > 0) {
                        if (subIndex % 2 === 0) formattedPuzzle[index] = " " + formattedPuzzle[index];
                        else formattedPuzzle[index] = formattedPuzzle[index] + " ";
                        spacesLeft--;
                        subIndex++;
                    }
                    index++;
                }
            }
        },
    },
};
</script>
