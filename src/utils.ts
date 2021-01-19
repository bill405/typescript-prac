export const dateStringToDate = (dateString: string): Date => {
    // 28/10/2018
    const dateParts = dateString.split('/').map((value: string):number => {
        return parseInt(value);
    });

    return new Date(dateParts[2], dateParts[1] -1, dateParts[0]);
};

import { DateTime } from 'luxon';

export const dateToString = (dateString: string): any => {
    // '2021-01-17T05:22:32.000Z'
    
   const date =  DateTime.fromISO(dateString); 
   
   const test = date.toLocaleString(DateTime.DATE_FULL)
   console.log(test);
   
   return date.toMillis()

    
}

// const date = dateToString('2021-01-17T05:22:32.000Z');
// console.log(date);


