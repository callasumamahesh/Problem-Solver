console.log('Solving...')

// Using concat method
const concatFlatArray = (item) => {
    let result = []
    for(let singleArray of item){
        if(Array.isArray(singleArray)){
            result = result.concat(concatFlatArray(singleArray))
        }
        else{
            result.push(singleArray)
        }
    }
    return result;
}
//Concat repeatedly creates new arrays.


//Recursive Approach
const recursiveApproach = (nestedArray, result = []) => {
    for (let array of nestedArray){
        if(Array.isArray(array)){
            recursiveApproach(array, result)
        }
        else{
            result.push(array)
        }
    }
    return result;
}


const spreadApproach = (nestedArray) => {
    const spread = [...nestedArray]
    const result = [];
    while(spread.length){
        const item = spread.pop()
        if(Array.isArray(item)){
            spread.push(...item)
        }
        else{
            result.push(item)
        }
    }
    return result.reverse()
}


flatArrayExample = [1,2,[3,4,[5,6,7]]]
console.log(concatFlatArray(flatArrayExample), "By using concat");
console.log(recursiveApproach(flatArrayExample), "Recursive code");
console.log(spreadApproach(flatArrayExample), "By using Spread");
console.log(flatArrayExample.flat(Infinity), "Flat Method")
