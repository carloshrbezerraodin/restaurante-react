export const conversorMoeda = (valor: number) => {
  const valorFixado = valor.toFixed(2);
  return `R$ ${valorFixado}`
}