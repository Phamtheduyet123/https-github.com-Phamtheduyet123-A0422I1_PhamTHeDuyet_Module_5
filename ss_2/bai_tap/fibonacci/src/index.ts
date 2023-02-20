function fibonacci(a:number):number {
        if(a==1 || a==2){
            return 1;
        }
        return fibonacci(a-1)+fibonacci(a-2);
}

let a:number=5;
let sum:number=0;
for (let i = 1; i <=a ; i++) {
    console.log(fibonacci(i));
   sum+=fibonacci(i);
}
console.log(`TOng so fibonacci la:${sum}`);