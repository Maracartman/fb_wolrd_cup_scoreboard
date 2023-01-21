import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../assets/fonts/Ozone/Ozone-xRRO.ttf';

import { Score } from './Score';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Score',
  component: Score,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Score>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Score> = (args) => <>
<style>
{
  `@font-face {
    font-family: "Ozone";
    src: local("Ozone"),
    url("./assets/fonts/Ozone/Ozone-xRRO.ttf") format("truetype");
    font-weight: normal;
  }
  `
}
</style>
<Score {...args} />
</>;

export const DefaultWithNoScore = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultWithNoScore.args = {
};

export const withScore = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultWithNoScore.args = {
  score: 12
};
