import { sumBy } from "@helper"

export const calcChecksum = (arr: number[]) => {
	return sumBy(
		arr,
		(value, index) => (value ?? 0) * index,
	)
}
