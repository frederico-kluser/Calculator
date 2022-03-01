export const machineLearningModelCost = (outputArr: number[], exprectionArr: number[]) => {
    const sum = outputArr.reduce((acc, curr, i) => {
        return acc + (curr - exprectionArr[i]) ** 2;
    }, 0);

    return sum;
};

machineLearningModelCost([1, 2], [2, 3]); //? 