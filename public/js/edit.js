const id = document.querySelector('#sleeplog-id').value;

const updateSleepLog = async (event) => {
    event.preventDefault();
    /* Whole data id's */
    const createDate = document.querySelector('#date-created').value;
    const amWakeUp = document.querySelector('#am-wake-time').value;
    const firstNap = document.querySelector('#nap-1').value;
    const napTimeInBed = document.querySelector('#nap-time-in-bed').value;
    const napTimeAsleep = document.querySelector('#nap-time-asleep').value;
    const napTimeAwake = document.querySelector('#nap-time-awake').value;
    const napTotalDuration = document.querySelector('#nap-total-duration').value;
    const bedTime = document.querySelector('#bedtime').value;
    const bedTimeinBed = document.querySelector('#bed-time-time-in-bed').value;
    const bedTimeAsleep = document.querySelector('#bedtime-time-asleep').value;
    const bedTimeAwake = document.querySelector('#bedtime-time-awake').value;
    const bedTimeTotal = document.querySelector('#bedtime-total-duration').value;
    const feeding = document.querySelector('#feed').value;
    const response = await fetch(`/api/sleepchart/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            createDate,
            amWakeUp,
            firstNap,
            napTimeInBed,
            napTimeAsleep,
            napTimeAwake,
            napTotalDuration,
            bedTime,
            bedTimeinBed,
            bedTimeAsleep,
            bedTimeAwake,
            bedTimeTotal,
            feeding
            }),
        headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
        response.json(response);
        document.location.replace(`/childprofile/${id}`);
    } else {
        alert('Failed to Update your sleep log chart!');
    }
};

document.querySelector('#update-btn').addEventListener('click', updateSleepLog);

const deleteSleepLog = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/sleepchart/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        document.location.replace(`/childprofile/${id}`);
    } else {
        alert('Failed to DELETE!')
    }
};

document.querySelector('#delete-btn').addEventListener('click', deleteSleepLog);