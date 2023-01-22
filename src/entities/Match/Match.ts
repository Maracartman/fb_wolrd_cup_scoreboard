import { TeamScore } from "src/types";
import { Team } from "src/types/Team";

export class Match {
    private _totalScore: number = 0;
   
    private _homeTeamScore: TeamScore;
   
    private _visitorTeamScore: TeamScore;

    private _countries = Array<String>(2)
    
    constructor(homeTeam: Team, awayTeam: Team, scores?: { home: number, away: number}) {
        const homeScore = scores?.home ?? 0
        const awayScore = scores?.away ?? 0
        this._totalScore = homeScore + awayScore
        this._homeTeamScore = { team: homeTeam, score: homeScore}
        this._visitorTeamScore = { team: awayTeam, score: awayScore}
        this._countries[0] = homeTeam.country
        this._countries[1] = awayTeam.country
    }

    public get homeTeamScore(): TeamScore {
        return this._homeTeamScore;
    }
    public set homeTeamScore(value: TeamScore) {
        this._homeTeamScore = value;
    }

    public get visitorTeamScore(): TeamScore {
        return this._visitorTeamScore;
    }
    public set visitorTeamScore(value: TeamScore) {
        this._visitorTeamScore = value;
    }

    public get totalScore(): number {
        return this._totalScore;
    }
    public registerGoals(countryName: string, numberOfGoals?: number): boolean {
        const countryIndex = this._countries.indexOf(countryName)
        if(countryIndex >= 0){
            const total = numberOfGoals ?? 1
            this._totalScore += total
            if(this.homeTeamScore.team.country === countryName){
                this.homeTeamScore.score += total
            } else {
                this.visitorTeamScore.score += total
            }
            return true
        }
        return false
    }
    

}