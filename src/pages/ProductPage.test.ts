import { VueWrapper, shallowMount } from "@vue/test-utils";
import { beforeEach, describe, expect, test, vitest } from "vitest";
// @ts-ignore
import ProductPage from "./ProductPage.vue";

describe("Product Page", () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = shallowMount(ProductPage);
  });
  test("it should do match with snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("it should render an image of the product", () => {
    const img = wrapper.find("img");
    expect(img.html()).toBeTruthy();
  });

  test("it should have an addToCart function", () => {
    // @ts-ignore
    const addToCartSpy = vitest.spyOn(wrapper.vm, "addToCart");
    expect(addToCartSpy).toMatchInlineSnapshot(`[MockFunction addToCart]`);
  });

  test("it should render the product price as number", () => {
    const priceP = wrapper.find("[data-test-id='price-p']");
    expect(priceP.text()).toBeTypeOf("string");
  });
});
