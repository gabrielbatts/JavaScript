function divisivel(num){
    if (num <=100){
        if (num){
            if( num % 3 == 00 && num % 5 == 0){
                console.log('FizzBuzz')
            }
            else if(num % 3 == 0){
                console.log('Fizz')
            }
            else if (num % 5 == 0){
                console.log('Buzz')
            }
            else {
                console.log(num)
            }            
        }
    }
    else{
        console.log('O número tem que ser entre 1 e 100')
    }
}

console.log(divisivel(500))