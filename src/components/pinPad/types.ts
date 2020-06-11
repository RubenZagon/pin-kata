export interface PinPadObject {
    textOnDisplay: string;
    password: string;
    attemptsCounter: number;
}

export type messageDisplay = 'OK' | 'ERROR' 