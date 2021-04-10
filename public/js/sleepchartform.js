const sleepChartForm = async (event) => {
    event.preventDefault();
    const amWakeUp = document.querySelector('#amWakeup').value.trim();
    const firstNap = document.querySelector('#firstNap').value.trim();
    const napTimeInBed = document.querySelector('#bedTime').value.trim();
    const napTimeAsleep = document.querySelector('#sleepTime').value.trim();
    const napTimeAwake = document.querySelector('#awakeTime').value.trim();
    const napDuration = document.querySelector('#napDuration').value.trim();
    const bedtime = document.querySelector('#bedtime').value.trim();
    const bedtimeTimeInBed = document.querySelector('#timeAsleep').value.trim();
    const bedtimeAwake = document.querySelector('#timeAwake').value.trim();
    const bedtimeTotalDuration = document.querySelector('#bedtimeDuration').value.trim();
    const feedings = document.querySelector('#feedings').value.trim();
    
    const napTimeInBed = document.querySelector('#bedTime').value.trim();
    const feedings = document.querySelector('#feedings').value.trim();
    if (amWakeUp && firstNap && napTimeInBed && napTimeAsleep && napTimeAwake && napDuration && bedtime && bedtimeTimeInBed && bedtimeAwake && bedtimeTotalDuration && feedings) {
        const response = await fetch ('/api/users', {
            method: 'POST',
            body: JSON.stringify({amWakeUp, firstNap, napTimeInBed, napTimeAsleep, napTimeAwake, napDuration, bedtime, bedtimeTimeInBed, bedtimeAwake, bedtimeTotalDuration, feedings}),
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
