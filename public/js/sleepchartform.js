const sleepChartForm = async (event) => {
    event.preventDefault();
    const amWakeUp = document.querySelector('#amWakeup').value;
    const firstNap = document.querySelector('#firstNap').value;
    const napTimeAsleep = document.querySelector('#sleepTime').value;
    const napTimeAwake = document.querySelector('#awakeTime').value;
    const napDuration = document.querySelector('#napDuration').value;
    const bedtime = document.querySelector('#bedtime').value;
    const bedtimeTimeInBed = document.querySelector('#timeAsleep').value;
    const bedtimeAwake = document.querySelector('#timeAwake').value;
    const bedtimeTotalDuration = document.querySelector('#bedtimeDuration').value;
    const feedings = document.querySelector('#feedings').value;
    const napTimeInBed = document.querySelector('#bedTime').value;


    if (amWakeUp && firstNap && napTimeInBed && napTimeAsleep && napTimeAwake && napDuration && bedtime && bedtimeTimeInBed && bedtimeAwake && bedtimeTotalDuration && feedings) {
        const response = await fetch ('/api/sleepchart', {
            method: 'POST',
            body: JSON.stringify({ amWakeUp, firstNap, napTimeInBed, napTimeAsleep, napTimeAwake, napDuration, bedtime, bedtimeTimeInBed, bedtimeAwake, bedtimeTotalDuration, feedings}),
            headers: { 'Content-Type': 'application/json'},
        });
        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to submit form');
        }
    }
};

document.querySelector('.sleepchart-form').addEventListener('submit', sleepChartForm);
