export function add(expression: string): number {
  if (expression.length === 0) {
    return 0;
  }
  let delimiter = /[,\n]/;
  if (expression.startsWith('//')) {
    const delimterEndsAt = expression.indexOf('\n');
    // delimiterString = [*][%]
    const delimiterString = expression.substring(2, delimterEndsAt);
    delimiter = new RegExp(resolveRegexString(delimiterString));
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
function getDelimiters(delimiter: string): string[] {
  return delimiter.split(/[\[\]]/).filter((ele) => ele.length > 0);
}

function resolveRegexString(delimiterString: string): string {
  //delimiters = ["*","%"]
  const delimiters = getDelimiters(delimiterString);
  let stringsForRegexp: { anyLength: string[]; single: string[] } = {
    anyLength: [],
    single: []
  };
  delimiters.forEach((ele) => {
    if (ele.length > 1) {
      stringsForRegexp.anyLength.push(generateStringForRegex(ele));
    } else {
      stringsForRegexp.single.push(ele);
    }
  });

  let resolvedRegexString = '';
  if (stringsForRegexp.single.length) {
    resolvedRegexString = `[${stringsForRegexp.single.join('|')}]`;
  }
  if (stringsForRegexp.anyLength.length) {
    resolvedRegexString += `|${stringsForRegexp.anyLength.join('|')}`;
  }
  return resolvedRegexString;
}
