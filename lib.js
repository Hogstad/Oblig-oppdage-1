// Hovedfunksjon
function isDateValid(date) {
    let day = date.slice(0,2);
    // dele opp dato (xx).xx.xxxx
    let month = date.slice(3,5);
    // dele opp mnd. xx.(xx).xxxx
    let year = date.slice(6,10);
    // dele opp år. xx.xx.(xxxx)

    return (isLength(date)&&
        thirdAndSixth(date)&&
        isYear(date)&&
        isMonth(date)&&
        isDay(date));
}

// Function that checks if the length is 10
function isLength(date) {
    return (date.length === 10) 
}
// sjekker om dato er = 10 siffer. Date(datoen som blir skriv inn/hentet inn).Length(antall siffer i koden) === (x)

// Function that checks if there is a dot in the third and sixth position
function thirdAndSixth(date) {
    return (date.charAt(2) === '.' && date.charAt(5) === '.') 
}
// (date.charAT(2)=== '.' sjekker om det er "." i xx(.)xx.xxxx)
// (date.charAT(6)=== '.' sjekker om det er "." i xx.xx(.)xxxx)

// Function that checks in years is 0000 or greater
function isYear(date) {
    let year = date.slice(6,10);
    return (year.length === 4 && year >= '0000' && year <= '9999')
}
// let year = date.slice(6,10) (henter info fra xx.xx.(xxxx))
// return (year.length === 4(Definerer antall siffer i året) && year >= '0000' && year <= '9999')(Og sjekker om aret er innenfor 0000-9999)

// Function that checks per month is from 01 to 12
function isMonth(date) {
    let month = date.slice(3,5);
    return month >= '01' && month <= '12' ? true : false;
}
// let month = date.slice(3,5); (Henter info fra xx.(xx).xxxx)
// return month >= '01' && month <= '12' ? true : false; (sjekker om mnd er innenfor 01-12 så retunerer med "True" er den utenfor så retunerer verdien med "false")

// Day is from 01 to and including 28 in addition: 29 is allowed for February if it is leap year
function isDay(date) {
    let day = date.slice(0,2);
    let month = date.slice(3,5);
    let year = date.slice(6,10);
    return checkDay1To28(day) || (checkLeapYear(year) && month === '02' && (day >= '01' && day <= '29')) || check31(day, month) || check30NotFeb(date);
}
//return checkDay1To28(day) : Her sjekkes det om dag er innenfor 01-28
//(checkLeapYear(year) && month === '02' && (day >= '01' && day <= '29')) : Her sjekkes det om det er skuddår, mnd er februar og om dagen er mindre enn 29.
//|| check31(day, month) : sjekker om (xx).(xx).xxxx er et gyldig verdi innenfor mnd.
//check30NotFeb(date); : sjekker om (xx.xx).xxxx og et utenfor xx.(xxfeb).xxxx

// Function that checks during the day is from 01 to 28
function checkDay1To28(day) {
    return (day >= '01' && day <= '28')
}
// return (day >= '01' && day <= '28') Her sjekkes det om dag er innenfor 01-28. hjelpefungsjon som bruker i andre funsjoner

// Function that checks if there is a leap year
function checkLeapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
//return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// (year % 4 == 0) && (year % 100 != 0) (hvis x kan deles jevnt med y) && (hvis x ikke kan deles jevnt med z) = Skuddår
// ||(year % 400 == 0); eller hvis x kan deles jevnt med y; så er det skuddår.

// Function that checks day 31 is valid
function check31(day, month) {
    return (day === '31' && month === '01' ||
        day === '31' && month === '03' ||
        day ==='31' && month === '05' ||
        day === '31' && month === '07' ||
        day === '31' && month === '08' ||
        day === '31' && month === '10' ||
        day === '31' && month === '12')
}
// day === '31' && month === '01'. Funsjon som sjekker om (xx).(xx).xxxx er et gyldig verdi innenfor mnd.

// Function that checks day is 30 and month is not February
function check30NotFeb(date) {
    let day = date.slice(0,2);
    let month = date.slice(3,5);
    return (day >= '01' && day <= '30') && month != '02';
}
// return (day >= '01' && day <= '30') && month != '02'; funsjon som sjekker om (xx.xx).xxxx og et utenfor xx.(xxfeb).xxxx