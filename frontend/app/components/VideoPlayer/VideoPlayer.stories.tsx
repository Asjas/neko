/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory, ComponentMeta } from "@storybook/react";

import VideoPlayer from "./VideoPlayer";

export default {
  title: "Example/VideoPlayer",
  component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>;

const Template: ComponentStory<typeof VideoPlayer> = (args) => <VideoPlayer {...args} />;

export const Primary = Template.bind({});
