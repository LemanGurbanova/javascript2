let year
if ( year % 4 == 0 ){
    console.log("yes");
    if (year % 100 == 0){
        console.log("yes");
        if(year % 400 == 0 ){
            console.log("yes");
        }
        else{
            console.log("no");
        }
    }
else {
        console.log("no");
    }
}
    

