var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
var res = tags.reduce((acc, i) =>{
    if (acc.hasOwnProperty(i)) {
        acc[i] += 1
    }else {
        acc[i] = 1
    }
    return acc
},{})
console.log(res)

var numbers = [1,2,3,45,32,56,61, 23,12,2,34,5,6,3,76,67,87,76]
var numbers2 = [1,45,32,3,4,2,56,76,67,87,89,8,56,54]
var conclusion = []
for (var i = 0; i < numbers.length; i++){
    if (numbers2.includes(numbers[i])){
        conclusion.push(numbers[i])
    }
}
console.log(conclusion)
