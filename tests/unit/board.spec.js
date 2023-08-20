import { mount } from "@vue/test-utils";
import Board from "../../src/components/ui/Board";

test("Board length test", async () => {
    const wrapper = mount(Board, {
        propsData: {
            puzzle: "Tarta de pancetas, queso batido y arita",
        },
    });
    console.log(wrapper.vm.formattedPuzzle);
    expect(wrapper.vm.formattedPuzzle.length).toBe(4);
});
