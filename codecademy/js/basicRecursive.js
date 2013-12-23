var power = function(base, exponent){
  if(exponent === 0){
          return(1);
  } else{
    for(var i=0; i < exponent; i++){
      result = power(base, exponent-1) * base;
    }    
  }
  return(result);
};
console.log(power(2,4)===16);
console.log(power(2,5)===32);
console.log(power(2,2)===4);
