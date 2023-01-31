//Write a program that outputs the top n elements from a list.
// largest(2, [7, 6, 5, 4, 3, 2, 1])
// Expected output: // => [6,7]

/*
 --------------Pseudo code----------
step-1: seriazlize elements of array assending order
      [1,2,3,4,5,6,7]-done

step-2: start a for loop and skip element based on number 
   const skipedValue=  array.length - num

   when lopped value bigger than skiped value then it push current indexed value in new element

   if skipedValue > looped value 
        newArray.push = arr[index] 
f       inally return newArray
*/


function largest(n, array) {
    // Find the n highest elements in a list
    if (array.length > 0) {
        const assendingArray = array.sort((a, b) => a - b);
        const skipedValue = array.length - n
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (i > skipedValue - 1) {
                newArray.push(assendingArray[i])
            }
        }
        return newArray
    }

    return [];
}

const result = largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])

console.log(result);