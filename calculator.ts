export function add(expression: string): number {
  if (expression.length === 0) {
    return 0;
  }
  let delimiter = /[,\n]/;
  if (expression.startsWith('//')) {
    //delimiter could be a * which is special character. Hence \\
    delimiter = new RegExp(`\\${expression[2]}`);
    // expression starts after \n
    expression = expression.substring(4);
  }
  const operands = expression
    .split(delimiter)
    .map((ele) => Number.parseInt(ele));
  return operands.reduce((sum, operand) => {
    return sum + operand;
  }, 0);
}