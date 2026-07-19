//🟣 1. Promises



const fetchData = (): Promise<string>=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data received")
        },2000)
    })
}

fetchData().then(data=>console.log(data))




//🟢 2. Async / Await

const fetchData1 = async (): Promise<string> => {
    return "Hello async"
}

const getData = async () =>{
    const res = await fetchData1()
    console.log(res)
}
getData()





//🟡 3. Decorators

function Log(target:any) {
    console.log("Class created:",target.name)
}
@Log
class User {
    name="Udaifa"
}





//🔵 4. Metadata Reflection

import "reflect-metadata"

class User1 {
    constructor(public name:string) {}
}

const data= Reflect.getMetadata("design:paramtypes",User1)
console.log(data)