import MatchList from 'src/entities/MatchList/MatchList'
import { Match } from 'src/entities/Match/Match'
import { Team } from 'src/types'
import Matches from 'src/__tests__/examples/matches.json'
import Teams from 'src/__tests__/examples/teams.json'

export const getAllMatches = async (): Promise<MatchList> => {
    const matchList = new MatchList()
    Matches.forEach(match => {
        const homeTeam: Team = Teams[match.home.country as keyof typeof Teams]
        const awayTeam: Team = Teams[match.away.country as keyof typeof Teams]

        matchList.insert(new Match(homeTeam, awayTeam,{
            home: match.home.score,
            away: match.away.score
        }))
    })
    return matchList
}