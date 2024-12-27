export const currencyFormatter = (total) => {
    const formatter = Intl.NumberFormat("en-IN", {
        currency: "INR",
        style: "currency",
    });

    return formatter.format(total);
}