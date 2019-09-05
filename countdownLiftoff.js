let timeInSeconds = 60;

while (timeInSeconds >= 0) {
    if (timeInSeconds === 50) {
        console.log("Orbiter transfers from ground to internal power")
    } else if (timeInSeconds === 31) {
        console.log("Ground launch sequencer is go for auto sequence start")
    } else if (timeInSeconds === 16) {
        console.log("Activate launch pad sound suppression system")
    } else if (timeInSeconds === 10) {
        console.log("Activate main engine hydrogen burnoff system")
    } else if (timeInSeconds === 6) {
        console.log("Main engine start")
    } else if (timeInSeconds === 0) {
        console.log("Solid rocket booster ignition and liftoff!")
    } else {console.log("T-" + timeInSeconds + " seconds")};
    timeInSeconds -=1;
}