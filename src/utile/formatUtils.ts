export function addCommas(num: number | string | null | undefined, postfix?: string): string {
  if (num === null || num === undefined) {
    return '';
  }

  const parsedNum = parseFloat(num.toString());
  if (Number.isNaN(parsedNum)) {
    return '';
  }

  return parsedNum.toLocaleString() + (postfix || '');
}
