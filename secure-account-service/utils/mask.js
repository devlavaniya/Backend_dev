exports.mask = (value) => {
    if (!value) return "";
    return "****" + value.slice(-4);
};