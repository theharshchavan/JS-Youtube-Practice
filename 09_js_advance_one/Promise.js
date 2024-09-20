// const promiseOne = new Promise(function(reslove,reject){
//     setTimeout(function(){
//         console.log("async task is completed");
//         reslove()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('promise consumed');
    
// })

// 


const promise = new Promise(function(reslove,reject){
    setTimeout(function(){
        let time = false
        if(!time){
            reslove({username: "Harsh", Password: "123"})
        } else{
            reject('someting wents wrong')
        }
    },1000)
})

promise.then((user)=> {
    console.log(user);
    return user.username
}).then((username)=> {
    console.log(username);
}).catch((error)=> {
    console.log(error);
}).finally(()=> {
    console.log('task is completed');
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.