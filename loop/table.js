function main(n) {
    if(typeof n!=="number" || !Number.isInteger(n) ||n<=0){
        throw new Error('Input must be a number')
    }
    //let n;

    
     for ( let i=1 ; i <= 10; i++) {
        const result =n*i;
        console.log(n + ' x ' + i + ' = ' + (n * i));
    }
   
};
module.exports=main;