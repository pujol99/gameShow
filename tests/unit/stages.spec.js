import { mount } from "@vue/test-utils";
import App from "../../src/App";
import About from "../../src/views/About";
import { store } from "../../src/store/index";

test("Get to second screen", async () => {
    const wrapper = mount(App, {
        global: {
            plugins: [store],
        },
    });
    await wrapper.find("button").trigger("click");

    expect(wrapper.html()).toContain("Sobre tu");
});

test("Popup activates in About (no selected options)", async () => {
    const wrapper = mount(About, {
        global: {
            plugins: [store],
        },
    });
    await wrapper.find("button").trigger("click");

    expect(wrapper.html()).toContain("popupActive");
});
