// happy coding 👻
console.log("hello world");
let sum:number =0;
let count:number=0;
for (let i = 2; i <30 ; i++) {
    let isPrime:boolean=true;
    if(i==2){
        sum+=1;
        count++;
        continue;
    }
    for (let j = 2; j <=Math.sqrt(i) ; j++) {
        if(i%j==0){
            isPrime=false;
            break;
        }
    }
    if(!isPrime){
        continue;
    }
    sum+=i;
    count++;

}
document.writeln(`${sum}`);