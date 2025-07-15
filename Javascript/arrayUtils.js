// Find the second largest number in an array
function findSecondLargest(arr) {
    if (arr.length < 2) return null;
    let max = -Infinity, secondMax = -Infinity;
    
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }
    return secondMax;
}

// Remove duplicates from array while preserving order
function removeDuplicates(arr) {
    const seen = new Set();
    return arr.filter(item => !seen.has(item) && seen.add(item));
}

// Chunk array into smaller arrays of specified size
function chunkArray(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, 
        (_, i) => arr.slice(i * size, i * size + size)
    );
}

// Flatten nested arrays
function flattenArray(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
    );
}

module.exports = {
    findSecondLargest,
    removeDuplicates,
    chunkArray,
    flattenArray
};
