export function formatNumber(value) {
    if (value >= 1000000) {
        return (value / 1000000).toFixed(2) + 'M';
    } else if (value >= 1000) {
        return (value / 1000).toFixed(2) + 'K';
    } else {
        return value
    }
}

export function formatNumberWithCommas(number) {
    return number.toLocaleString();
}
