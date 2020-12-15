function printsum(arr)
{
    sum=0
    
arr.forEach(element => {
        sum+=element
        
});
console.log("sum of first "+arr.length+"numbers is  is " +sum);
}
arr=[1];
for(let index=2;index<=100;index++){
    arr.push(index);

}
printsum(arr);