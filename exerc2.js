function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay();
    const dayObj = {0: 'Weekend', 1: 'Weekday', 2: 'Weekday', 3: 'Weekday', 4: 'Weekday', 5: 'Weekday', 6: 'weekend'
};
return dayObj[day];
}

console.log(isWeekend());