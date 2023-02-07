

export const getPercentageRatio = (count: number, value: number) => {
    return Math.ceil((value / count) * 100);
}