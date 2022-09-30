import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextBox } from "@atoms";

export default {
  title: "atoms/text-box",
  component: TextBox,

  decorators: [
    (Story) => (
      <div style={{ margin: "10em 1em" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = () => {
  const [count, setCount] = React.useState(0);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
  };
  return (
    <TextBox
      placeholder="Add your opinion here"
      onChange={onChange}
      count={count}
    />
  );
};

export const TextBoxExample = Template.bind({});
