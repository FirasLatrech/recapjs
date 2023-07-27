
function palindrom(ch){
  ok=true
  for(i=0; i<ch.length;i++){
    if (ch[i]!=ch[ch.length-i-1]){
      ok=false
      break
    }
  }
console.log(ok)
}
palindrom("radsar")