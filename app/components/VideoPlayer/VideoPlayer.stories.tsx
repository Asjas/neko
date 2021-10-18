import { ComponentStory, ComponentMeta } from "@storybook/react";

import { VideoPlayer } from "./VideoPlayer";

export default {
  title: "Example/VideoPlayer",
  component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>;

const Template: ComponentStory<typeof VideoPlayer> = (args) => <VideoPlayer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
};
