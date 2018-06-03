console.log('Hey app!');

class Coche {
  private distanciaRecorrida: number = 4;
  color: string;

  constructor(public esHibrido: boolean, color: string = 'rojo') {
    this.color = color;
  }

  /* This function should not be included into constructor
  getConsumoGas(): string {
    return this.esHibrido ? 'Muy Bajo' : '!Muy alto!';
  }  
  */

  // This function is included into constructor
  getConsumoGas = () => this.esHibrido ? 'Muy Bajo' : '!Muy alto!';

  drive(distancia: number): void {
    this.distanciaRecorrida =+ distancia;
  }

  static bocina(): string {
    return 'GUUOUNG';
  }

  get distancia(): number {
    return this.distanciaRecorrida;
  }
}

let coche = new Coche(true, 'verde');

console.log('Coche: ', coche);
console.log('Consumo: ', coche.getConsumoGas());
console.log('Distancia: ', coche.distancia);