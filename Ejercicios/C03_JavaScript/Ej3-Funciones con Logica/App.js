const calcularPrecioFinal = (monto, medioPago) => {

  if (monto < 200) return monto;

  if (monto >= 200 && monto <= 400) {
    if (medioPago === "E") return monto * 0.7;
    if (medioPago === "D") return monto * 0.8;
    if (medioPago === "C") return monto * 0.9;
  }

  if (monto > 400) return monto * 0.6;
};


console.log(`Monto: $150 | Pago: E | Final: $${calcularPrecioFinal(150, "E")}`);
console.log(`Monto: $300 | Pago: E | Final: $${calcularPrecioFinal(300, "E")}`);
console.log(`Monto: $300 | Pago: D | Final: $${calcularPrecioFinal(300, "D")}`);
console.log(`Monto: $300 | Pago: C | Final: $${calcularPrecioFinal(300, "C")}`);
console.log(`Monto: $500 | Pago: E | Final: $${calcularPrecioFinal(500, "E")}`);
console.log(`Monto: $450 | Pago: D | Final: $${calcularPrecioFinal(450, "D")}`);
console.log(`Monto: $120 | Pago: C | Final: $${calcularPrecioFinal(120, "C")}`);
console.log(`Monto: $1000 | Pago: D | Final: $${calcularPrecioFinal(1000, "D")}`);