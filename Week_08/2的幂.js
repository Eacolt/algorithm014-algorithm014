var isPowerOfTwo = function(n) {

    if(n<1){
        return false;
    }

    let m = n & (n-1);
    if(m==0){
        return true;
    }else{
        return false;
    }

};
