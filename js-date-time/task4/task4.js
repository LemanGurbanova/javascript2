let year
for(year = 2014; year <=2050; year++){
    date = new Date(year + ' 01 , 01');
    if(date.getDay()=== 0){
        console.log(date);
    }
}
