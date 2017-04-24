var Coche = (function () {
    //Constructor
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = "Blanco";
        if (modelo == null) {
            this.modelo = "BMV Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    //Metodos get y set
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
})();
var coche = new Coche("Renault Clio");
coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.frenar();
console.log("Color de coche 1 es: " + coche.getColor());
console.log("Velocidad de coche 1 es: " + coche.getVelocidad());
console.log("El modelo de coche 1 es: " + coche.getModelo());
/*
var coche2 = new Coche();
coche2.setColor("AZUL");

console.log("Color de coche 2 es: " + coche2.getColor());

var coche3 = new Coche();
coche3.setColor("VERDE");

console.log("Color de coche 3 es: " + coche3.getColor());
*/ 
