const replaceStr = (str, index, char) => {
  const strAry = str.split("");
  strAry[index] = char;
  return strAry.join("");
};

let ladderLength = function (beginWord, endWord, wordList) {
  let dict = new Set(...wordList);
  if (dict.has(endWord) == null) {
    console.log("为空了");
    return 0;
  }
  console.log("陆续执行");
  let beginSet = new Set(),
    endSet = new Set(),
    tmp = new Set(),
    visited = new Set();
  beginSet.add(beginWord);
  endSet.add(endWord);
  let len = 1;
  console.log(beginSet, "###", endSet);
  while (!beginSet.size == 0 && !endSet.size == 0) {
    if (beginSet.size > endSet.size) {
      tmp = beginSet;
      beginSet = endSet;
      endSet = tmp;
    }
    tmp.clear();
    for (let word of beginSet) {
      console.log("---", word, word.length, word[1]);
      for (let i = 0; i < word.length; i++) {
        let old = word[i];
        console.log("CC", old);
        console.log("????", "a".charCodeAt(0), "z".charCodeAt(0));
        let _a = "a".charCodeAt(0);
        let _z = "z".charCodeAt(0);
        let c = _a;
        for (; c < _z; c++) {
          console.log("等吗", old.charCodeAt(0), c);

          if (old.charCodeAt(0) == c) continue;
           // word[i]= c;
            replaceStr(word,i,String.fromCharCode(c));
            console.log("hasWord", endSet.has(word));
        //   if(endSet.has(word) != null)
        //   {
        //       return len+1;
        //   }
        console.log("endSet.has(word)",endSet.has(word),endSet,word)
          if(visited.has(word) == null && dict.has(word) != null){
              tmp.add(word);
              visited.add(word);
          }
        }
        word[i] = old;
      }
    }
    beginSet = tmp;
    len++;
    //  for(let string )
  }
  console.log("END", len);
  return 0;
};
