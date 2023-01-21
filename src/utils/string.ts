
export const transformToStringScore = (score: number, size?:number): string =>{
    const places = size ?? 2
    return String(score).padStart(places, '0')
}

const StringUtil = {
    transformToStringScore
}

export default StringUtil