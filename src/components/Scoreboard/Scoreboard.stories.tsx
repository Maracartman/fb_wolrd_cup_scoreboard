import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import matchSamples from 'src/__tests__/examples/matches.json'
import { Scoreboard } from './Scoreboard';
import { Match } from 'src/entities/Match/Match';

const mapSampleToMatch = (matchSample: { home: any; away: any } ): Match => new Match(matchSample.home, matchSample.away, 
    { home: matchSample.home.score, away: matchSample.away.score})

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Scoreboard',
  component: Scoreboard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Scoreboard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Scoreboard> = (args) => <Scoreboard {...args} />

export const WithNoActiveMatch = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithNoActiveMatch.args = {
};

export const withAMatchPassed = Template.bind({});
withAMatchPassed.args = {
    match: mapSampleToMatch(matchSamples[1])
};
