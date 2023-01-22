import { Team } from "./Team"

export interface TeamScore {
    team?: Team,
    score?: number
    home?: boolean
}