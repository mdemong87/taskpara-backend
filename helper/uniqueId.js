function uniqueId(){
    var otp='';
    var number=['0','1','2','3','4','5','6','7','8','9'];
    var length=number.length;
    for(var i=0; i<7; i++){
        var randoomNumber=Math.floor(Math.random()*length);
        otp+=number[randoomNumber];
    }
    return otp;
    
}


module.exports=uniqueId;