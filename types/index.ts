export interface Position {
    title: string
    start: string
    end: string | null
}

export interface Job {
    company: string
    location: string
    positions: Array<Position>
    start: string
    end: string | null
    description: string
    highlights: Array<string>
}