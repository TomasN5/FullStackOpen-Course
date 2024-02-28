console.log('Hola mundo')

const t = [1,2,3,4,5]

const [first,second, ...rest] = t

console.log(first,second)
console.log(...rest)


const object1 ={
    name : "Arto Hellas",
    age: 35,
    education: 'PhD'
}

object1['secret number'] = 123456

console.log(object1)


const sum = (p1,p2) =>{
    console.log (p1)
    console.log(p2)

    return p1+p2
}

const result = sum(1,5)

console.log(result)

const tSquared = t.map (p =>p *p)
console.log(tSquared) 