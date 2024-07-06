export function add(expression: string): number | undefined {
  if (expression.length === 0) {
    return 0;
  } else if (expression.length === 1) {
    return Number.parseInt(expression);
  }

  let operands = expression.split(',');

  if (operands.length === 2) {
    return Number.parseInt(operands[0]) + Number(operands[1]);
  }
}