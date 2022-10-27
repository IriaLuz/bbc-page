import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "@atoms";

export default {
  title: "atoms/checkbox",
  component: Checkbox,

  decorators: [
    (Story) => (
      <div style={{ margin: "10em 1em" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = () => (
  <Checkbox label="This is a label" type="checkbox" />
);

export const checkboxExample = Template.bind({});
