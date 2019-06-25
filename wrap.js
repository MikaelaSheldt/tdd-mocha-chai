/*
takes two arguments: a string, and a column number. The function returns the string, but with line breaks inserted at just the right places to make sure that no line is longer than the column number.
*/

const wrap = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text
  }

  const indexOfBlank = text.lastIndexOf(' ', maxLength)
  let split, offset
  if (indexOfBlank > -1) {
    split = indexOfBlank
    offset = 1
  } else {
    split = maxLength
    offset = 0
  }

  return text.substring(0, split) + '\n' + wrap(text.substring(split + offset), maxLength)
}

module.exports = wrap;
