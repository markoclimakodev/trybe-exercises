/**  
 11 - Use if/else to write a code that starts with two different values in two different variables: the cost of a product and its sale price.
From the values, the code should calculate the profit (i.e. the sale price minus the cost of the product) of the company when selling one thousand products.
*/

  let productCost = 23.5;
  let salePrice = 43.5;
  let totalProducdSold = 1000;
  
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  };
  
  if (totalProducdSold !== 0) {
    let profit = (salePrice - productCost) * totalProducdSold;
    console.log(
      `Lucro no total de: ${new Intl.NumberFormat('pt-BR', options).format(
        profit
      )}`
    );
  } else {
    console.log('oi');
  }