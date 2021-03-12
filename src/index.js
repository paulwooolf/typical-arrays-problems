exports.min = function min(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let min = array[0];
        array.forEach(item => {
            if (item < min) {
                min = item;
            }
        })
        return min;
    }
    return 0;
}

exports.max = function max(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let max = array[0];
        array.forEach(item => {
            if (item > max) {
                max = item;
            }
        })
        return max;
    }
    return 0;
}

exports.avg = function avg(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        return array.reduce((acc, item) => acc += item) / array.length;
    }
    return 0;
}
