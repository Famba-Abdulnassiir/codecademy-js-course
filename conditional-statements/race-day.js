/*
Race Day

Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this:registration-timeline

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.


*/

// Solution

let raceNumber = Math.floor(Math.random() * 1000);

isRegisteredEarly = false;
let runnerAge = 18;

//check if runner is adult and registered early if yes add 1000 to their race number.
if(runnerAge > 18 && isRegisteredEarly == true){
  raceNumber = raceNumber += 1000;
}

// Check age and registration time to determine race time.
if(runnerAge > 18 && isRegisteredEarly == true ){
  console.log(`Dear Runner you will start the race at 9:30 am and your runner's Number is ${raceNumber}`);
}
 else if(runnerAge > 18 && isRegisteredEarly == false) {
  console.log(`Dear Runner you will start the race at 11:00 am and your runner's Number is ${raceNumber}`);
} else if (runnerAge < 18){
  console.log(`Dear Runner you will start the race at 12:30 am and your runner's Number is ${raceNumber}`);
} else {
  console.log(`Dear Runner Please check the registration desk`);
}

