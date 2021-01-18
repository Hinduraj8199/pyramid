
var n = 4;


function pyramid(n){
    for(var i = 1; i<=n ; i++){
        console.log(".".repeat(n-i)+".o."+"o.".repeat(i-1)+".".repeat(n-i));
    
    }

}
function inverse_pyramid(n){
    for(var i = n ; i>=1 ; i--){
        console.log(".".repeat(n-i)+".o."+"o.".repeat(i-1)+".".repeat(n-i));
    }
}

function rhombus(){
    pyramid(n);
    inverse_pyramid(n);
}
console.log(n+ " pyramid");
pyramid(n);
console.log("\n")

console.log(n+ " Inverse pyramid");
inverse_pyramid(n);

console.log("\n")
console.log(" Rhombus");
rhombus();