// Reverse words in a string
function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

// Count word frequency in a string
function countWords(str) {
    const words = str.toLowerCase().match(/[a-z]+/g) || [];
    return words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
}

// Generate slug from string
function generateSlug(str) {
    return str.toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
}

// Capitalize first letter of each word
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

module.exports = {
    reverseWords,
    countWords,
    generateSlug,
    capitalizeWords
};
