import React from 'react';
import { Box, Container} from '@mui/material';
import './team-score.css';
import { Team } from 'src/types/Team';
import { Score } from '../Score/Score';
import { useTranslations } from 'src/contexts/translations';

export interface TeamScoreProps {
  team: Team,
  score: number
  home?: boolean
}

export const TeamScore = ({
  team,
  score,
  home = false
}: TeamScoreProps) => {
  const { homeCopy, visitorCopy } = useTranslations()
  const teamStatus = home ? homeCopy : visitorCopy
  return (
    <Container className='team-score-container'>
      <Box className={'ts-data-box ts-status'}>{teamStatus}</Box>
      <Box className={'ts-data-box country-name'}>
        {team.flagHref && (<img className='ts-flag' alt='Country flag' src={team.flagHref}/>)}
          {team.country}
      </Box>
      <Box className='ts-data-box'><Score score={score}/></Box>
    </Container>
  );
};
