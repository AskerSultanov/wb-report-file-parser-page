var requiredSkusFieldsName = [
  "skuName",
  "qty",
  "returnAmount",
  "retailAmount",
  "taxableAmount",
  "sellerPayoutAmount",
  "deliveryCost",
  "deductionOrPayment",
  "averageAdvertisingCost",
  "storageCost",
  "acceptance",
  "fines",
  "profit",
  "costPrice",
  "otherExpenses",
  "tax",
  "profitMargin",
  "finalProfit",
];

var getRequiredSkusFieldsName = (skus) =>
  skus.map((sku) => {
    return {
      skuName: sku.skuName,
      qty: sku.qty,
      returnAmount: sku.returnAmount,
      retailAmount: sku.retailAmount,
      taxableAmount: sku.taxableAmount,
      sellerPayoutAmount: sku.sellerPayoutAmount,
      deliveryCost: sku.deliveryCost,
      deductionOrPayment: sku.deductionOrPayment,
      averageAdvertisingCost: sku.averageAdvertisingCost,
      storageCost: sku.storageCost,
      acceptance: sku.acceptance,
      fines: sku.fines,
      profit: sku.profit,
      costPrice: sku.costPrice,
      otherExpenses: sku.otherExpenses,
      tax: sku.tax,
      profitMargin: sku.profitMargin,
      finalProfit: sku.finalProfit,
    };
  });

export { getRequiredSkusFieldsName, requiredSkusFieldsName };
