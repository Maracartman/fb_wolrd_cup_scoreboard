import { Team, TeamScore } from 'src/types'
import { Match } from '../Match/Match'
import MatchList from './MatchList'
import matchesSample from 'src/__tests__/examples/matches.json'

describe("MatchList test suite", () => {
   
    const mapSampleToMatch = (matchSample: { home: any; away: any } ): Match => new Match(matchSample.home, matchSample.away, 
        { home: matchSample.home.score, away: matchSample.away.score})
    it('creates a new Match list with no match set yet', () => {
        const matchList = new MatchList()
        
        expect(matchList).toBeDefined()
    })

    it('inserts a match after the match list gets created and it\'s the head', () => {
        const matchList = new MatchList()
        const mexicoVCanadaMatch = mapSampleToMatch(matchesSample[0])

        const result = matchList.insert(mexicoVCanadaMatch)

        expect(result).toBeTruthy()
        expect(matchList.head?.match).toEqual(mexicoVCanadaMatch)
    })

    it("replaces the head by the second match since it has a higher score (Descendant order)", () => {
        const matchList = new MatchList()
        const mexicoVCanadaMatch = mapSampleToMatch(matchesSample[0])
        const spainVBrasilMatch = mapSampleToMatch(matchesSample[1])

        matchList.insert(mexicoVCanadaMatch)
        matchList.insert(spainVBrasilMatch)

        expect(matchList.head?.match).toEqual(spainVBrasilMatch)
        expect(matchList.head?.next?.match).toEqual(mexicoVCanadaMatch)
    })

    it("sorts the matches based on the score and by insertion order descendant", () => {
        const matchList = new MatchList()
        const mexicoVCanadaMatch = mapSampleToMatch(matchesSample[0])
        const spainVBrasilMatch = mapSampleToMatch(matchesSample[1])
        const uruguayVItaliaMatch = mapSampleToMatch(matchesSample[2])

        matchList.insert(mexicoVCanadaMatch)
        matchList.insert(spainVBrasilMatch)
        matchList.insert(uruguayVItaliaMatch)

        const headNode = matchList.head
        const secondNode = headNode?.next
        const thirdNode = secondNode?.next

        expect(headNode?.match).toEqual(uruguayVItaliaMatch)
        expect(secondNode?.match).toEqual(spainVBrasilMatch)
        expect(thirdNode?.match).toEqual(mexicoVCanadaMatch)
    })
})