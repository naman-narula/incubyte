export function add(expression: string): number {
  if (expression.length === 0) {
    return 0;
  }

  const operands = expression.split(/[,\n]/).map((ele) => Number.parseInt(ele));
  return operands.reduce((sum, operand) => {
    return sum + operand;
  }, 0);
}