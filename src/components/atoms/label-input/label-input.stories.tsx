import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LabelInput } from "./label-input";

export default {
  title: "atoms/label-Input",
  component: LabelInput,
  decorators: [
    (Story) => (
      <div style={{ margin: "10em 1em" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LabelInput>;

const Template: ComponentStory<typeof LabelInput> = (args) => (
  <LabelInput {...args} />
);

export const LabelInputs = Template.bind({});

LabelInputs.args = {
  placeholder: "text input",
};
