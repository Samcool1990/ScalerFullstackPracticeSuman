var arr = [
    "ONE",
    "TWO",
    "THREE"
]

arr[2] = 3
console.log(arr)

arr.push(4)
console.log(arr)

arr.unshift(0)
console.log(arr)

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

// To append
arr.splice(1,1,'Fifty')  
console.log(arr)

// To Delete
arr.splice(1,1)
console.log(arr)