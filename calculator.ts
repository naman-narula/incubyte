export function add(expression: string): number | undefined {
  if (expression.length === 0) {
    return 0;
  } else if (expression.length === 1) {
    return Number.parseInt(expression);
  }
}