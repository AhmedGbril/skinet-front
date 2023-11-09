//variable union type 
let data: number | string;

interface ICar {
    color: string,
    model: string,
    topspeed?: number
}

const car1: ICar = {
    color: "blue",
    model: "bmw"
}
const car2: ICar = {
    color: "red",
    model: "marceedes",
    topspeed: 100
}

const multiply = (x: number, y: number): number => {
    return x * y;
}