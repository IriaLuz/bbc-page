import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "@components";

export default {
  title: "atoms/button",
  component: Checkbox,
  decorators: [
    (Story) => (
      <div style={{ margin: "10em 1em" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (arg) => (
  <Checkbox {...arg} />
);

export const checkboxExample = Template.bind({});
