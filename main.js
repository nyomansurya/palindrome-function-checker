function palindrome(str) {
  let pun = /[\W_]/g;
  let plainText = str.toLowerCase().replace(pun, "");
  let reverseStr = plainText.split('').reverse().join('');

  if (plainText === reverseStr){
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("A man, a plan, a canal. Panama"));
