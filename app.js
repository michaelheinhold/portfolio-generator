const { profile } = require("console");

const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr)=> {
    profileDataArr.forEach((profileDataItem) => console.log(profileDataItem));
}

printProfileData(profileDataArgs);