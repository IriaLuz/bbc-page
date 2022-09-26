import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "@components";

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

const Template: ComponentStory<typeof Checkbox> = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <Checkbox
      checked={checked}
      label="This is a label"
      handleChange={handleChange}
    />
  );
};

export const checkboxExample = Template.bind({});
