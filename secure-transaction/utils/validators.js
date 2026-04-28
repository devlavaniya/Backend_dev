exports.checkTransactionLimit = (amount) => {
    const max = parseFloat(process.env.MAX_TRANSACTION_AMOUNT);
    return amount <= max;
};