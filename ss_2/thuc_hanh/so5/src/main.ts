let money=1000;
const buyCar=(car:any)=>{
    return new Promise(((resolve ,rejects)=>{
        setTimeout(()=>{
            if(money>=1000){
                resolve("can by"+car);
            }
            else {
                rejects("Do not enough money");
            }
        },100);
    }))
}
money=1000001;
const promise = buyCar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})