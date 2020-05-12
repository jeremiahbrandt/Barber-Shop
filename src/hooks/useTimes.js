const times = () => {
    const times = []

    let index = 0
    for(let hour=8; hour<=16; hour++) {
        for(let minute=0; minute<60; minute+=15) {
            const newMinute = minute
            if(newMinute < 10){newMinute = 0 + minute.toString()}
            times[index] = `${hour}:${newMinute}`
            index++
        }
    }
    return times
}

export default times