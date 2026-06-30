const arr = [1,2,3,4]

const unique = [...new Set(arr)];

const arr2 =[1,1,1,2,3,4,5]

const map = new Map();

for(const num of map) {
    map.set(num, (map.get(num) || 0) + 1)
}

Math.max(...arr);

let max = arr[0];
for(const n of arr) {
    if(n > max) max = n
}
const phone_book = ["119", "1195524421"];

phone_book.sort();
for(let i=0; i<phone_book.length-1; i++) {
    if(phone_book[i+1].startsWith(phone_book[i])){
        return false;
    }
}

const stack = []
for(const c of s) {
    if(c === "{") {
        stack.push(c)
    }else {
        if(stack.length ===0) return false;
        stack.pop();
    }
}

return stack.length ===0;

let queue = priorities.map((p,i)=>({p,i}))

