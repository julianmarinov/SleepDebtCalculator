function getSleepHours(day) {
    // first, let's make sure the input is not empty nor null:
    if (!day) {
        console.log('Input cannot be empty. Please enter a day of the week.');
        return;
    }
    // we convert the input to lower case in order to avoid errors:
    day = day.toLowerCase();
    // These are hard coded hours of sleep per day. In the future, this information will be imported.
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 6;
    } else if (day === 'wednesday') {
        return 7;
    } else if (day === 'thursday') {
        return 5;
    } else if (day === 'friday') {
        return 6;
    } else if (day === 'saturday') {
        return 10;
    } else if (day === 'sunday') {
        return 8;
    } else {
        // In case the input doesn't match any of the week days:
        console.log('This is not a day of the week. Is the spelling right?');
        return 0;
    }
}

function getActualSleepHours() {
    return +
            getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday') +
        getSleepHours('sunday');
}

// As a default we add 8 hours per day, but we will later pass a specific number of hours from the calculateSleepDebt function.
function getIdealSleepHours(idealHours = 8) {
    return idealHours * 7
}

function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(7); // Input ideal hours of sleep here
    console.log('The ideal weekly sleep hours for you are ' + idealSleepHours + '.');
    console.log('You actually slept ' + actualSleepHours + ' hours last week.');
    if (actualSleepHours === idealSleepHours) {
        console.log('In this case, you got the perfect amount of sleep for you! Good job!')
    } else if (actualSleepHours < idealSleepHours) {
        console.log('In this case, you got less than the right amount of sleep for you! Get some rest and you will feel better!')
        console.log('You need ' + (idealSleepHours - actualSleepHours) + ' additional hour(s) of sleep weekly.')
    } else if (actualSleepHours > idealSleepHours) {
        console.log('In this case, you got more than the right amount of sleep for you! This can actually make you feel more tired!')
        console.log('You need to sleep ' + (actualSleepHours - idealSleepHours) + ' more hour(s) on a weekly basis.')
    }
}

calculateSleepDebt()