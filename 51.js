let masiv = []
let count = 13
let x = 53
let y = 23
if (x>y) 
{
    max = x
    min = y
} 
else 
{
    max = y
    min = x
}
for (let i = 1; i <= count; i++) 
{ 
    masiv.push(Math.floor(Math.random() * (max - min)) + min) 
}    
console.log(masiv)