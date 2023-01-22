import React from 'react';
import { Box, Container} from '@mui/material';
import './team-score.css';
import { Score } from '../Score/Score';
import { useTranslations } from 'src/contexts/translations';
import { TeamScore as TeamScoreProps } from 'src/types/TeamScore';

export const TeamScore = ({
  team,
  score,
  home = false
}: TeamScoreProps) => {
  const { homeCopy, awayCopy } = useTranslations()
  const teamStatus = home ? homeCopy : awayCopy
  return (
    <Container className='team-score-container'>
      <Box className={'ts-data-box ts-status'}>{teamStatus}</Box>
      <Box className={'ts-data-box country-name'}>
        {!team ?
          "---"
        : <>
        {team.flagImage && (<img className='ts-flag' alt='Country flag' src={team.flagImage}/>)}
          {team.country}
        </>
        }
      </Box>
      <Box className='ts-data-box'><Score score={team && score ? score : 0}/></Box>
    </Container>
  );
};
