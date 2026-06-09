// Sum of all elements
arr = [1,2,3,4,56,56]
const sumOfArray = arr.reduce((acc, cuu) => acc += cuu, 0)
console.log(sumOfArray, 'This is result');

//Find maximum value
maxArr = [508,4,5,6,4,333,54]
const maxValue = maxArr.reduce((acc, cur) => { return cur > acc ? cur : acc} ,maxArr[0])
console.log(maxValue, 'this is max value');

//Count Occurrence of elements
occuArr = ["a", "b", "c", "d", "d", "c"]
const occu = occuArr.reduce((acc, cur) => {acc[cur] = (acc[cur] || 0) +1; return acc }, {})
console.log(occu, 'This is occurrence')

//Remove Duplicates
arrayOfDuplicates = [1,2,3,4,5,6,7,8,1,2,3,4]
const DuplicatesArray = arrayOfDuplicates.reduce((acc, cur) => {
    if(acc.includes(cur)){

    }
    else{
        acc.push(cur)
    }
    return acc;
}, [])
console.log(DuplicatesArray, "this is array")

//Find Duplicates
arrayOfDuplicates = [1,2,3,4,5,6,7,8,1,2,3,4]
const findDuplicates = (arrayOfDuplicates) => {
    const resultObj = {}
    const duplicateElements = []
    for (let value of arrayOfDuplicates){
        if(!resultObj[value]){
            resultObj[value] = 1
        }
        else{
            resultObj[value] += 1
        }
    }
    const keysofresultObj = Object.keys(resultObj);
    for(let key of keysofresultObj){
        if(resultObj[key] > 1){
            duplicateElements.push(Number(key))
        }
    }
    return duplicateElements;
}
console.log(findDuplicates(arrayOfDuplicates))


function setDuplicates(arr){
    const allValues = new Set()
    const duplicates = new Set()
    for (let value of arr){
        if(allValues.has(value)){
            duplicates.add(value)
        }
        else{
            allValues.add(value)
        }
    }
    return [...duplicates]
}
console.log(setDuplicates([1,2,3,4,5,6,7,8,1,2,3,4]), 'Final result');

const duplicateArray = [1,2,3,4,12,3,4]
const removeDuplicates = new Set(duplicateArray)
console.log(removeDuplicates,'Thisis removing of duplicates');