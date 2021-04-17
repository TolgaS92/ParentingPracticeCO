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
    const user_data = {
        date_created: createDate,
        am_wake_time: amWakeUp,
        nap1: firstNap,
        nap_time_in_bed: napTimeInBed,
        nap_time_asleep: napTimeAsleep,
        nap_time_awake: napTimeAwake,
        nap_total_duration: napTotalDuration,
        bedtime: bedTime,
        bed_time_time_in_bed: bedTimeinBed,
        bedtime_time_asleep: bedTimeAsleep,
        bedtime_time_awake: bedTimeAwake,
        bedtime_total_duration: bedTimeTotal,
        feed: feeding
    };
    const response = await fetch(`/api/sleepchart/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user_data),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
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