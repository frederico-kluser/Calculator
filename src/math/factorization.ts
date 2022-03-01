const primeFactorization = (number: number) => {
  if (number < 0) {
    throw new Error('number must be a positive integer');
  }
  if (number < 2) {
    return [];
  }
  const factors = [];
  let divisor = 2;
  while (number > 1) {
    if (number % divisor === 0) {
      factors.push(divisor);
      number /= divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

export default primeFactorization;

primeFactorization(8); //?