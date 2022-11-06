import {studentInformation} from "./students.js";

studentInformation.map((naam, xyz, location, i) => {
    let fullSentence = `My name is ${naam.name} and my email adress is ${xyz.email} 
    and I am from ${location.state}`;

    console.log (fullSentence)
})
