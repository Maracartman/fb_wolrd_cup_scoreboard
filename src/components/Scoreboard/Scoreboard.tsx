import { Match } from 'src/entities/Match/Match'
import { TeamScore } from '../TeamScore/TeamScore'
import { Box, Grid } from '@mui/material'
import { useTranslations } from 'src/contexts/translations'
import './scoreboard.css'
interface ScoreboardProps {
    match?: Match
}

export const Scoreboard = ({ match }: ScoreboardProps) => {
    const { scoreboardCopy } = useTranslations()
    const homeTeamScoreProps = match?.homeTeamScore ?? {}
    const awayTeamScoreProps = match?.awayTeamScore ?? {}
    return <Grid className='scoreboard-container' xs={12}>
        <Box className='scoreboard-title'>
            { scoreboardCopy }
        </Box>
        <Box className='team-scores-container'>
            <TeamScore {...homeTeamScoreProps} home/>
            <TeamScore {...awayTeamScoreProps}/>
        </Box>
    </Grid>
}