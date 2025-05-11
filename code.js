async function Count(number,key){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
           if(number==key){
            resolve('Success')
           }
           else{
            reject('Failed')
           }
        },100)
    })
}

async function KeyCountAsync(array,key){
    var finalcount=0;
    for(number of array){
        await Count(number,key).then((outcome)=>{
            finalcount++
        }).catch((outcome)=>{
            finalcount+=0
        })
    }
    // console.log(finalcount)
    return finalcount
}
