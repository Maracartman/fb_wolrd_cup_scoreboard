import React from 'react'


import './scoreboard.css'
import { Match } from 'src/entities/Match/Match'
import { TeamScore } from '../TeamScore/TeamScore'
import { Box } from '@mui/material'
import { useTranslations } from 'src/contexts/translations'

interface ScoreboardProps {
    match?: Match
}

export const Scoreboard = ({ match }: ScoreboardProps) => {
    const { scoreboardCopy } = useTranslations()
    const homeTeamScoreProps = match?.homeTeamScore ?? {}
    const awayTeamScoreProps = match?.awayTeamScore ?? {}
    return <Box className='scoreboard-container'>
        <Box className='scoreboard-title'>
            { scoreboardCopy }
        </Box>
        <Box className='team-scores-container'>
            <TeamScore {...homeTeamScoreProps} home/>
            <TeamScore {...awayTeamScoreProps}/>
        </Box>
    </Box>
}