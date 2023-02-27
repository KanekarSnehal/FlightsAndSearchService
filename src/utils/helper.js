const comapreTime = (timeString1, timeString2) => {
    return new Date(timeString1).getTime() > new Date(timeString2).getTime();
}

module.exports = {
    comapreTime
}