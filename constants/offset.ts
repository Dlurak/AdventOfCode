export type Offset = [number, number];

export const ORTHONAL_OFFSETS: Record<
	'top' | 'bottom' | 'left' | 'right',
	Offset
> = {
	bottom: [0, 1],
	top: [0, -1],
	left: [-1, 0],
	right: [1, 0],
};

export const DIAGONAL_OFFSETS: Record<
	`${'bottom' | 'top'}${'Right' | 'Left'}`,
	Offset
> = {
	bottomRight: [1, 1],
	bottomLeft: [-1, 1],
	topRight: [1, -1],
	topLeft: [-1, -1],
};

export const OFFSETS = {
	...ORTHONAL_OFFSETS,
	...DIAGONAL_OFFSETS,
};
