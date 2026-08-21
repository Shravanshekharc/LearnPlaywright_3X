const data = require('fs').readFileSync(0, 'utf8');
//A: 90 - 100, B: 80 - 89, C: 70 - 79, D: 60 - 69, F: below 60
let mark = data
if (mark >= 90 && mark <= 100)
{
    console.log("A")
}
else if (mark >= 80 && mark < 90)
{
    console.log("B")
}
else if (mark >= 70 && mark < 80)
{
    console.log("C")
}
else if (mark >= 60 && mark < 70)
{
    console.log("D")
}
else
{
    console.log("F") 
}