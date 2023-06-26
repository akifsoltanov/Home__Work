function getTime(millisecond) {

    let time, year, month, week, day, hours, min, sec = 0;

    sec = parseInt(millisecond / 1000);

    min = parseInt(sec / 60);

    hours = parseInt(min / 60);

    day = parseInt(hours / 24);

    Week = parseInt(day / 7);

    month = parseInt(day / 30);

    years = parseInt(month / 12);

    time = `${year} year ${month} month ${week} week ${day} day ${hours} hours ${min} minute ${sec} second`

    return time;
}

console.log(getTime(1000000))