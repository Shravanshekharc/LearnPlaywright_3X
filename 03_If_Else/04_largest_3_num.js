let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
let c = Number(process.argv[4]);
if (a>b && a > c)
{
    console.log( a + "Is greatest")
}
else if ( b > a && b >c)
{
    console.log( b + "Is greatest")
}
else
{
    console.log( c + "Is Greatest")
}