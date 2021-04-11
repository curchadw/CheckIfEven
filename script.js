const even = (num) =>{
  //if num passed in is 0, automatically gets returned true
  if (num === 0 ){
    return true
  //if num passed in is 1, automatically gets returned false
  }else if (num === 1) {
    return false
  }else{
    //Whats going on here is you are recursively subtracting from the number passed in until it meets one of the conditions above.
    return even(num-2)
  }

 

}


//sum up the values of an array recursively