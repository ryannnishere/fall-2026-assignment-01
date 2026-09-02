export function getInventoryValue(
 inventory: Array<[string, number, number]>, 
): number {
    // Return an inventory array that has been filtered to values with a quantity greater than 5, then reduce that array down to their total value combined.
    return inventory
        .filter(([, quantity]) => quantity > 5)
        .reduce((total, [, quantity, price]) => total + quantity * price, 0);
}
