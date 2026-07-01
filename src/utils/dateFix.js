export function releaseDate(relDate){
    const currentDate = new Date()
    const timeShift = Math.trunc((currentDate - new Date(relDate))/60000)  //outputs in mins

    if (timeShift < 1){
        return(`${Math.trunc(timeShift*60)} seconds ago`)
    }else if(timeShift > 1 && timeShift < 60){
        return(`${Math.trunc(timeShift)} mins ago`)
    }else if(timeShift > 60 && (timeShift/60) < 24){
        return(`${Math.trunc(timeShift/60)} hours `)
    }else{
        return(`${Math.trunc((timeShift/60)/24)} days ago`)
    }
}