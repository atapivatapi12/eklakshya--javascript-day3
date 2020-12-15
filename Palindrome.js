function reverseString([...str]) {
    var str1=str.reverse();
    str1 = str1.join("");
    return str1
}
str='nayan'
var str1=reverseString(str);
console.log(str1)
if(str==str1){
    console.log(str + ' is a palindrome')
}
else{
    console.log(str + ' is not a palindrome')
}
