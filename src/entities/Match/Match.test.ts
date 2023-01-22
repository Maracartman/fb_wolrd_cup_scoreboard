import { Team } from 'src/types'
import { Match } from './Match'

describe('Match class test suite', () => {
    const awayTeam: Team = {
            country: 'Germany'
        }
    const homeTeam: Team = {
            country: 'Brasil'
        }

    beforeEach(() => {
    })
    it('creates a new match with the initial scores', () => {
        const match = new Match(homeTeam,awayTeam)

        expect(match.totalScore).toBe(0)
        expect(match.homeTeamScore.score).toBe(0)
        expect(match.awayTeamScore.score).toBe(0)
    })

    it("returns operation completed when a goal registration is made for a valid match's team", () => {
        const match = new Match(homeTeam,awayTeam)

        const result = match.registerGoals("Germany")
        expect(result).toBeTruthy()
    })

    it("returns operation fails when a goal registration is made for a invalid match's team", () => {
        const match = new Match(homeTeam,awayTeam)

        const result = match.registerGoals("Netherlands")
        expect(result).toBeFalsy()
    })

    it('adds multiple goals for both team when it is registered to the match', () => {
        const match = new Match(homeTeam,awayTeam)

        match.registerGoals(awayTeam.country, 7)

        match.registerGoals(homeTeam.country)

        expect(match.homeTeamScore.score).toBe(1)
        expect(match.awayTeamScore.score).toBe(7)
    })

    it('accumulate all goals as the total of the match', () => {
        const match = new Match(homeTeam,awayTeam)

        match.registerGoals(awayTeam.country, 7)

        match.registerGoals(homeTeam.country)

        expect(match.totalScore).toBe(8)
    })
})