function iterativeSearch(numbers, target){
    var mid = Math.floor(numbers.length / 2);
    var left = numbers.slice(0, mid);
    var right = numbers.slice(mid);

    if (target <= left[left.length-1])
    {
        for (var l of left)
        {
            if (l == target)
            {
                return true;
            }
        }
    }
    else if (target >= right[0])
    {
        for (var r of right)
        {
            if (r == target)
            {
                return true;
            }
        }
    }

    return false;
}

function recursiveSearch(numbers, target){
    if(target < numbers[0] || target > numbers[numbers.length-1])
    {
        return false;
    }    
    
    if(numbers.length === 1 && numbers[0] === target)
    {
        return true;
    }

    var mid = Math.floor(numbers.length / 2);
    var left = numbers.slice(0, mid);
    var right = numbers.slice(mid);

    if(target < right[0])
    {
        return recursiveSearch(left, target);
    }
    else
    {
        return recursiveSearch(right, target);
    }
}

module.exports = { iterativeSearch, recursiveSearch }