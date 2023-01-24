import { useEffect, useState } from 'react'
import {  Grid, Container,Button } from '@mui/material'
import { Scoreboard } from 'src/components/Scoreboard/Scoreboard'
import { Match } from 'src/entities/Match/Match'
import teamsSample from 'src/__tests__/examples/teams.json'
import * as MatchService from 'src/services/match'
import MatchList from 'src/entities/MatchList/MatchList'
import { Team, TeamScore } from 'src/types'
import { useTranslations } from 'src/contexts/translations'
import './scoreboard-page.css'

type MatchRowProps = {
    home: TeamScore,
    away: TeamScore
}

const ScoreboardPage = () => {
    const { endMatchCopy, randomMatchCopy } = useTranslations()
    const [ongoingMatch, setOngoingMatch] = useState<Match | undefined>(undefined)
    const [matchList, setMatchList] = useState<MatchList | null>(null)

    useEffect(() => {
     MatchService.getAllMatches()
        .then(matchList => setMatchList(matchList))   
    }, [])

    const MatchRow = ({
        home,
        away,
    }: MatchRowProps) => {
        return <Grid xs={12} className='summary-row-container' item>
            <div className='match-row-team-container home-score-container'>
                {home.team?.flagImage && <div className='flag-container'>
                    <img src={home.team.flagImage} alt='Home Team Flag' className='match-row-flag' />
                </div>}
                <div className='country-name-container'>
                    {home.team?.country}
                </div>
                <div className='score-container '>
                    { home.score}
                </div>
            </div>
            <div className='match-row-team-container'>
                {away.team?.flagImage && <div className='flag-container'>
                <img src={away.team.flagImage} alt='Away Team Flag' className='match-row-flag' />
                </div>}
                <div className='country-name-container'>
                    {away.team?.country}
                </div>
                <div className='score-container'>
                    { away.score}
                </div>
            </div>
        </Grid>
    }

    /**
     * Of course, this should be replaced by something like a stream service
     * that can be subscribed in order to get the scores over the the time (match)
     */
    const showARandomMatch = () => {
        const shuffledArray = Object.values(teamsSample).sort(() => 0.5 - Math.random()); 
        const [homeTeam, awayTeam]: Team[] = shuffledArray.slice(0, 2);
        const homeScore = Math.floor(Math.random() * 10) + 1
        const awayScore = Math.floor(Math.random() * 10) + 1
        const match = new Match(homeTeam, awayTeam, {
            home: homeScore,
            away: awayScore
        })
        setOngoingMatch(match)
    }

    const finishAndAddToMatchList = () => {
        const newMatchList = matchList
        /**
         * The insert use the linked list capability to determine
         * the actual position (sorted by score and match date)
         */
        newMatchList?.insert(ongoingMatch as Match)
        setMatchList(newMatchList)
        setOngoingMatch(undefined)
    }

    return <Grid container className='scoreboard-page'>
        <Container>
        <Grid xs={12} item>
            <Scoreboard match={ongoingMatch} />
        </Grid>
        </Container>
        <Grid xs={12}>
            <Container className='control-panel'>
                <Button variant='contained'color='success' onClick={showARandomMatch}>
                    { randomMatchCopy }
                </Button>

                <Button variant='text' disabled={!ongoingMatch} onClick={finishAndAddToMatchList}>
                    { endMatchCopy }
                </Button>
            </Container>
        </Grid>
        {matchList && <Container className='summary-container'>
            {matchList.toArray().map((match: Match) => <MatchRow 
                home={match.homeTeamScore} 
                away={match.awayTeamScore}/>)}
        </Container>
        }
    </Grid>
}

export default ScoreboardPage