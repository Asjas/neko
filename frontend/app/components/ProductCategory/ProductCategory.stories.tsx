/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProductCategory from "./ProductCategory";

export default {
  title: "Example/ProductCategory",
  component: ProductCategory,
} as ComponentMeta<typeof ProductCategory>;

const Template: ComponentStory<typeof ProductCategory> = (args) => <ProductCategory {...args} />;

export const Primary = Template.bind({});

const productCategory = {
  title: "Leopard",
  imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
  totalProducts: 20,
  imageAlt: "Leopard in the jungle",
};

Primary.args = {
  productCategory,
};
