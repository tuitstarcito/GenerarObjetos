const makes = ['Chevrolet', 'Kia', 'Toyota', 'Volkswagen', 'Nissan'];
const colors = ['Azul', 'Rojo', 'Negro', 'Gris', 'Blanco'];
const years = [2018, 2019, 2020, 2021, 2022];

function Car(make, color, year) {
  this.make = make;
  this.color = color;
  this.year = year;
}

function construirAutos(cantidad) {
  for (let i = 1; i <= cantidad; i++) {
    const car = new Car(
      `${makes[random()]}`,
      `${colors[random()]}`,
      `${years[random()]}`
    );
    console.log(car);
    
  }
}

construirAutos(20);
function random() {
  return Math.floor(Math.random() * 5);
}
