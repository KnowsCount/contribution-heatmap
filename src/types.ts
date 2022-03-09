// each one of these is a `data-level`
export type Level = 0 | 1 | 2 | 3 | 4

// this will be the pattern wherewith we generate
// data later on... we need to seperate count and level.
export interface Day {
	date: string
	count: number
}
