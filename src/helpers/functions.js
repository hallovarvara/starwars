export const transformKeyToName = (key) => key
  .split('')
  .map((l, index) => {
    let newLetter;
    if (index < 1) {
      newLetter = l.toUpperCase();
    } else {
      newLetter = /[*A-ZА-Я]/g.test(l)
        ? ` ${l.toLowerCase()}`
        : l
    }
    return newLetter
  })
  .join('');