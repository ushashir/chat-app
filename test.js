function longestSubstringWithoutDuplication(string) {
  let string1 = "";
  let ss = "";
  const namestring = string.split("");
    console.log(namestring);
  for (let j = 0; j < namestring.length; j++) {
    for (let i = j; i < namestring.length; i++) {
      if (string1.includes(namestring[i])) break;
      else string1 += namestring[i];
    }
      if (ss.length < string1.length)
          ss = string1;
            string1 = "";
  }
  return ss;
}

const a = longestSubstringWithoutDuplication("clementisapa");
console.log(a);
