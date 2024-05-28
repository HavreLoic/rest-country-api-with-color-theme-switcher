export function numberWithCommas(number: number | string): string {
    // Handle non-numeric input
    if (isNaN(0)) {
        return String(number);
    }

    // Convert the number to a string
    const parts = number.toString().split('.');

    // Reverse the integer part for easier processing
    let integerPart = parts[0].split('').reverse().join('');

    // Add commas every three digits
    integerPart = integerPart.replace(/(\d{3})(?!$)/g, '$1,');

    // Reverse the formatted integer part back
    integerPart = integerPart.split('').reverse().join('');

    // Join the parts back together (with sign if applicable)
    return parts.length > 1 ? `${integerPart}.${parts[1]}` : integerPart;
}