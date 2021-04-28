class articoliCartoleria {
    constructor(marca, modello, costo) {
        this.marca = marca;
        this.modello = modello;
        this.costo = costo;
        this.prezzoVendita = function () {
            return costo * 2;
        }
    }   
}

class Penna extends articoliCartoleria {
    constructor (marca, modello, costo, colore){
        super(marca, modello, costo);
        this.colore = colore;
    }
} 

class Gomma extends articoliCartoleria{
    constructor (marca, modello, costo, dimensione, forma){
        super(marca, modello, costo);
        this.dimensione = dimensione;
        this.forma = forma;
    }
}