
function sort(numbers) {
    if(numbers.length == 1){
        return numbers;
    }

    var mid = Math.floor(numbers.length / 2);
    var left = numbers.slice(0, mid);
    var right = numbers.slice(mid);

    return merge(sort(left), sort(right));
}

function merge(left, right) {
    var merged = [];
    while(left.length > 0 || right.length > 0){
        if(left.length > 0 && right.length > 0){
            if(left[0] < right[0]){
                merged.push(left.shift());
            }
            else {
                merged.push(right.shift());
            }
        }
        else if(left.length > 0){
            merged.push(left.shift());
        }
        else {
            merged.push(right.shift());
        }
    }

    return merged;
}

module.exports = sort; 