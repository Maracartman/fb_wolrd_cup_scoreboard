import { Team } from 'src/types'
import { Match } from './Match/Match'

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
        expect(match.visitorTeamScore.score).toBe(0)
    })

    it("returns operation completed when a goal registration is made for a valid match's team", () => {
        const match = new Match(homeTeam,awayTeam)

        const result = match.registerGoal("Germany")
        expect(result).toBeTruthy()
    })

    it("returns operation fails when a goal registration is made for a invalid match's team", () => {
        const match = new Match(homeTeam,awayTeam)

        const result = match.registerGoal("Netherlands")
        expect(result).toBeFalsy()
    })

    it('adds goal for both team when it is registered to the match', () => {
        const match = new Match(homeTeam,awayTeam)

        match.registerGoal(awayTeam.country)
        match.registerGoal(awayTeam.country)
        match.registerGoal(awayTeam.country)
        match.registerGoal(awayTeam.country)
        match.registerGoal(awayTeam.country)
        match.registerGoal(awayTeam.country)
        match.registerGoal(awayTeam.country)

        match.registerGoal(homeTeam.country)

        expect(match.homeTeamScore.score).toBe(1)
        expect(match.visitorTeamScore.score).toBe(7)
    })

    it('accumulate all goals as the total of the match', () => {
        const match = new Match(homeTeam,awayTeam)

        match.registerGoal(awayTeam.country)
        match.registerGoal(awayTeam.country)
        match.registerGoal(awayTeam.country)
        match.registerGoal(awayTeam.country)
        match.registerGoal(awayTeam.country)
        match.registerGoal(awayTeam.country)
        match.registerGoal(awayTeam.country)

        match.registerGoal(homeTeam.country)

        expect(match.totalScore).toBe(8)
    })
})