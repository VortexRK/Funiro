export function addDotsForNumber(number) {
  const value = `${Math.trunc(number)}`;
  const helper = [];
  const { length } = value;

  if (number < 1e3) return number;

  if (number < 1e6) {
    helper.push(value.slice(-3))
    helper.push(value.slice(0, length - 3))
    helper.reverse()
    return helper.join('.');
  }

  if (number < 1e9) {
    helper.push(value.slice(-3))
    helper.push(value.slice(-6, -3))
    helper.push(value.slice(0, length - 6))
    helper.reverse()
    return helper.join('.');
  }

  if (number < 1e12) {
    helper.push(value.slice(-3))
    helper.push(value.slice(-6, -3))
    helper.push(value.slice(-9, -6))
    helper.push(value.slice(0, length - 9))
    helper.reverse()
    return helper.join('.');
  }
    helper.push(value.slice(-3))
    helper.push(value.slice(-6, -3))
    helper.push(value.slice(-9, -6))
    helper.push(value.slice(-12, -9))
    helper.push(value.slice(0, length - 12))
    helper.reverse()
    return helper.join('.');
}