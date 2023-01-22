import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TeamScore } from './TeamScore';
import type { TeamScore as TeamScoreProps} from 'src/types'

const teamScoreProps: TeamScoreProps = {
  team: {
    country: "Venezuela",
    flagImage:
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


export const NoTeamDefinedSample = Template.bind({})

NoTeamDefinedSample.args = {
  home: true,
  team: undefined,
}

export const  awayTeamSample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
awayTeamSample.args = teamScoreProps;

export const HomeSample = Template.bind({})

HomeSample.args = {
  home: true,
  team: {
    country: "Spain",
    flagImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",
  },
  score: 5,
}
