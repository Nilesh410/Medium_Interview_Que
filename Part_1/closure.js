function countcounter()
{
    let count=0 //count in the lexical scope of countcounter
    return function()
    {
        count++
        return count  //innerfunction access count from the countcounter outer function scope
    }
}
let result=countcounter() //result is closure
console.log(result())   //result:1
console.log(result())   //result:2
