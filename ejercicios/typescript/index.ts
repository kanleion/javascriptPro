function add(a:number, b: number): number{
    return a + b;
}

const sum = add(4,6);

//funciones regresando otras funciones
//(number) => number esto nos indica que retorna una función

function createAdder(a: number): (number) => number{
    return function(b:number){
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6)

//Paramétros opcionales
// antes de los puntos un signo de ? para decirle que el segundo argumento puede ser undefined o string
function fullName(firstName: string, lastName?: string): string {
    return `${firstName}${lastName}`;
}

const richard = fullName('Richard');

//Interfaces declaración
//Las interfaces definen la forma de un objeto

enum Color{
    Rojo = "Rojo",
    Verde = "Verde"
}

interface Rectangulo {
    ancho: number,
    alto: number
    color?: Color,
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6
};

function area( r: Rectangulo){
     return r.alto * r.ancho
}

const areaRect = area(rect);
console.log( areaRect);

rect.toString = function(){
    return this.color ? `Un rectangulo ${this.color}` : `Un rectángulo`
}

console.log(rect.toString());

