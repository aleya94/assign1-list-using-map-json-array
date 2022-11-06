import {studentInformation} from './students.js';

studentInformation.map((student) => {
    let fullSentence = `My name is ${student.name} and my email address is ${student.email} and I am from ${student.state}`;

    console.log (fullSentence)
})
