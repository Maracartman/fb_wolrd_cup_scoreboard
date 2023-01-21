import React from 'react';
import { Box} from '@mui/material';
import './score.css';
import { transformToStringScore } from 'src/utils/string';

interface ScoreProps {
  score?: number
}

export const Score = ({
  score = 0
}: ScoreProps) => {
  const formattedScore = transformToStringScore(score)
  return (
    <Box className='score'>
     <div className='score-text'>
      {formattedScore}
     </div>
    </Box>
  );
};
