const Calculadora = () => {

    const somar = (x, y) => {
        return x + y

    }

    const subtrair = (x, y) => x - y 
  
    function multiplicar( x,y ) {
        return x * y 
    }

    let dividir = (x,y) => x / y

    const chamarDivisao = (funcaoDeDividir) => {
        return funcaoDeDividir(30, 3) 
    }

     return (
         <div>
             <h1> O resultado da soma : {somar(30, 6)} </h1>
             <h1> O resultado da subtração : {subtrair(30, 6)} </h1>
             <h1> O resultado da multiplicação : {multiplicar(30, 6)} </h1>
             <h1> O resultado da divisão : {chamarDivisao(dividir)} </h1>
             <h1> O que vai  da divisão com outra função é : {
                  chamarDivisao(
                       (x,y) => {
                        return x/y
                       } 
                  )
             }
             {
                // mudando o valor da variável dividir 
                dividir = (x,y) => x^y
             }
              </h1>
              <h1> O resultado da potência é: {dividir(2, 3)} </h1>

         </div>
     

     )

            }
 

    export default Calculadora 