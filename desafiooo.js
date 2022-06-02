let n;
let i;
let m=0;

for(i=1;i<=5;i++){
    n = parseInt(prompt("Ingrese el dato "+i+" de 5"));

    m = m+n; //acumulador
}

console.log("La suma total es: ${m}");
console.log("El promedio es: ${m/5}");
