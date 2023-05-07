let parseCount = a => {
    if (Number.isNaN(Number.parseFloat(a))) {
        throw new Error (`Невалидное значение`);
    }
        return Number.parseFloat(a);

}

let validateCount = a => {
    try {
        if(parseCount(a) != NaN) {
        return parseCount(a);
        } 
    } catch(error) {
        return error;
    }
} 

class Triangle {
    constructor (a, b, c) {
        if (a + b < c || a + c < b || c + b < a){
            throw new Error (`Треугольник с такими сторонами не существует`);
        }
        this.a = a;
        this.b = b;
        this.c =c;
    }

    get perimeter () {
        return this.a + this.b + this.c; 
    }

    get area () {
        let p = this.perimeter / 2;
        return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

let getTriangle = (a, b, c) => {
    try {
       return new Triangle (a, b, c);
    } catch (error) {
        return {
            get perimeter () {
                return ('Ошибка! Треугольник не существует')
            },
            get area () {
                return ('Ошибка! Треугольник не существует')
            }
        }
    }
}
