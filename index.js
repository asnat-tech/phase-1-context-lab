//* Your Code Here */
function createEmployeeRecord(employeeData) {
    return {
    firstName: employeeData[0],
    familyName: employeeData[1],
    title: employeeData[2],
    payPerHour: employeeData[3],
    timeInEvents: [],
    timeOutEvents: []
};
}
//function to add a createEmployeeRecords
function createEmployeeRecords(arrayOfArrays){
    return arrayOfArrays.map(createEmployeeRecord);

}

//Function to find an employee record by their first name in an array of employee records
function findEmployeeByFirstName(firstname,employeeRecord){
return employeeRecord.find((record) => record.firstName === firstname);

}
let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
return this
}
// Function to calculate the hours worked on a specific date for an employee
function hoursWorkedOnDate(date,employeeRecord){
    
 const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
 const timeOutEvent = employeeRecord.timeOutEv

}
// Function to calculate the wages earned on a specific date for an employeefunction wagesEarnedOnDate
function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked 
  }
// Function to calculate the total wages earned for an employee
function allWagesFor() {

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 
    return payable
}
}
//function to calculate the total payroll for an array of employee records
function calculatePayroll(employeeRecords) {
  const totalPayroll = employeeRecords.reduce((total, record) => total + allWagesFor.call(record), 0);
  return totalPayroll;
}
function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payPerHour = employeeRecord.payPerHour;
    const wagesEarned = hoursWorked * payPerHour;
    return wagesEarned;
  }