// D A T E in JS : 
// JavaScript Date objects represent a single moment in time in a platform-independent format. 
// Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

// JavaScript date is fundamentally specified as the time in milliseconds


var date = new Date();
console.log(date); //OUTPUT : 2025-07-20T03:58:37.755Z
console.log(date.toString()); //OUTPUT :Sun Jul 20 2025 09:29:32 GMT+0530 (India Standard Time)


console.log(date.toDateString()); //OUTPUT : Sun Jul 20 2025
console.log(date.toISOString()); //OUTPUT : 2025-07-20T04:02:37.246Z
console.log(date.toJSON()); //OUTPUT : 2025-07-20T04:02:37.246Z


console.log(date.toLocaleDateString()); //OUTPUT : 20/7/2025
console.log(date.toLocaleString()); //OUTPUT : 20/7/2025, 9:32:37 am
console.log(date.toLocaleTimeString()); //OUTPUT : 9:32:37 am
console.log(date.toTimeString()); //OUTPUT : 09:32:37 GMT+0530 (India Standard Time)
console.log(date.toUTCString()); //OUTPUT : Sun, 20 Jul 2025 04:02:37 GMT



// console.log(typeof date ); //OUTPUT : object 
// Date is an Object in javascript

// let mynewDate1 = new Date (2025, 0, 20) //OUTPUT : 20/1/2025, 12:00:00 am,
// let mynewDate2 = new Date (2025, 0, 20, 6, 30)//OUTPUT : 20/1/2025, 6:30:00 am,
// let mynewDate3 = new Date (2025-0-20)//OUTPUT : 1/1/1970, 5:30:02 am,
// let mynewDate4 = new Date ("2025-0-20")//OUTPUT : Invalid Date,
// let mynewDate5 = new Date ("2025-7-20")//OUTPUT : 20/7/2025, 12:00:00 am,
// let mynewDate6 = new Date ("20-7-2025") //OUTPUT : Invalid Date,
// let mynewDate7 = new Date ("7-20-2025")//OUTPUT : 20/7/2025, 12:00:00 am,
// let mynewDate8 = new Date (2025-7-20 , 6,30)//OUTPUT : 30/7/1998, 12:00:00 am
// console.log([mynewDate1,'\n', mynewDate2,'\n',  mynewDate3,'\n',  mynewDate4,'\n',  mynewDate5,'\n',  mynewDate6,'\n',  mynewDate7 ,'\n',mynewDate8].toLocaleString());


// T I M E in JS 

//timestamp 


// let myTimestamp = Date.now();
// console.log(myTimestamp);

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getMonth()+1); // 0-11 for 12 months starting from No. 0  as first month
// console.log(newDate.getTime());
// console.log(newDate.getDay());

// console.log(newDate.toLocaleString('default', {
//     weekday : 'long',
//     day : "numeric"
// }));

 
