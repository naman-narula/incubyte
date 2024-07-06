export function add(expression: string): number {
  if (expression.length === 0) {
    return 0;
  }
  let delimiter = /[,\n]/;
  if (expression.startsWith('//')) {
    const delimterEndsAt = expression.indexOf('\n');
    let delimiterString = expression.substring(2, delimterEndsAt);
    if (delimiterString.length > 1) {
      delimiterString = delimiterString.slice(1, -1);
    }
    delimiterString = generateStringForRegex(delimiterString);
    delimiter = new RegExp(`${delimiterString}`);
    // expression starts after \n
    expression = expression.substring(delimterEndsAt + 1);
  }

  const operands = expression
    .split(delimiter)
    .map((ele) => Number.parseInt(ele))
    .filter((ele) => ele <= 1000);
  const negativeNumbers = operands.filter((ele) => ele < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.toString()}`
    );
  }
  return operands.reduce((sum, operand) => {
    return sum + operand;
  }, 0);
}

function generateStringForRegex(delimiter: string): string {
  // delimiter could be a * which is special character. Hence \\
  let result = `\\${delimiter[0]}{${delimiter.length}}`;
  return result;
}
