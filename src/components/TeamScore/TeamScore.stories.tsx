import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TeamScore, TeamScoreProps } from './TeamScore';

const teamScoreProps: TeamScoreProps = {
  home: true,
  team: {
    country: "Venezuela",
    flagHref:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1200px-Flag_of_Venezuela.svg.png",
  },
  score: 10,
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TeamScore',
  component: TeamScore,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof TeamScore>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TeamScore> = (args) => <TeamScore {...args} />

export const  Sample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = teamScoreProps;
