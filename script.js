const alunasGama = ["Paula", "Maria", "Thállen", "Clara"]

//Operador spread (...)
const alunasXp = [...alunasGama, "Simara"] //retorna todos os itens do array
//alunasGama além dos itens do proprio array.


// map: ele itera cada elemento do array
alunasXp.map(aluna => console.log(aluna))

//Filter: ele filtra numeros dentro do array com condições dadas (como um if)
const numeros = [34, 45, 67, 90, 55, 76]

console.log(numeros.filter(numero => numero%2 !=0))

//sort: altera o array original em ordem crescente
const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

//trocando para decrescente
const numerosOrdenadosDecrescente = numeros.sort((a,b)=> b-a)
console.log(numerosOrdenadosDecrescente)

//reduce: reduz nosso array a um resultado de uma operação matemática
const numbers = [1,34,35]
//soma todos os numeros do array numbers +5. Logo o valorAnterior e valorAtual
//são os valores do numbers passando um a um. PS: se eu não passar nada no segundo
//argumento (5), ele retorna apenas a soma do array.
const somaValores = numbers.reduce((valorAnterior,valorAtual)=>{
	return valorAnterior + valorAtual
},5)