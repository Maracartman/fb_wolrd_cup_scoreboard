import { TeamScore } from "src/types";
import { Team } from "src/types/Team";

export class Match {
    private _totalScore: number = 0;
   
    private _homeTeamScore: TeamScore;
   
    private _awayTeamScore: TeamScore;

    private _countries = Array<String>(2)
    
    constructor(homeTeam: Team, awayTeam: Team, scores?: { home: number, away: number}) {
        const homeScore = scores?.home ?? 0
        const awayScore = scores?.away ?? 0
        this._totalScore = homeScore + awayScore
        this._homeTeamScore = { team: homeTeam, score: homeScore}
        this._awayTeamScore = { team: awayTeam, score: awayScore}
        this._countries[0] = homeTeam.country
        this._countries[1] = awayTeam.country
    }

    public get homeTeamScore(): TeamScore {
        return this._homeTeamScore;
    }
    public set homeTeamScore(value: TeamScore) {
        this._homeTeamScore = value;
    }

    public get awayTeamScore(): TeamScore {
        return this._awayTeamScore;
    }
    public set awayTeamScore(value: TeamScore) {
        this._awayTeamScore = value;
    }

    public get totalScore(): number {
        return this._totalScore;
    }
    public registerGoals(countryName: string, numberOfGoals?: number): boolean {
        const countryIndex = this._countries.indexOf(countryName)
        if(countryIndex >= 0){
            const total = numberOfGoals ?? 1
            this._totalScore += total
            if(this._homeTeamScore && this._homeTeamScore.team?.country === countryName){
                this._homeTeamScore.score = (this._homeTeamScore?.score || 0) + total
            } else {
                this._awayTeamScore.score = (this._awayTeamScore?.score || 0) + total
            }
            return true
        }
        return false
    }
    

}