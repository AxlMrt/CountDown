import React from 'react';

export default function CountDown() {
  const actualYear = new Date().getFullYear();
  const countdownDate = new Date(`Jan 1, ${actualYear + 1} 0:0:0`);
  const [time, setTime] = React.useState(countdownDate - new Date().getTime());
  const [updateSeconds, setUpdateSeconds] = React.useState(false);
  const [updateMinutes, setUpdateMinutes] = React.useState(false);
  const [updateHours, setUpdateHours] = React.useState(false);
  const [updateDays, setUpdateDays] = React.useState(false);

  const updateEachSecond = () => {
    setUpdateSeconds(!updateSeconds);
    setTimeout(() => {
      setUpdateSeconds(!updateSeconds);
    }, 500);
  };

  const updateEachMinute = () => {
    setUpdateMinutes(!updateMinutes);
    setTimeout(() => {
      setUpdateMinutes(!updateMinutes);
    }, 500);
  };

  const updateEachHour = () => {
    setUpdateHours(!updateHours);
    setTimeout(() => {
      setUpdateHours(!updateHours);
    }, 500);
  };

  const updateEachDay = () => {
    setUpdateDays(!updateDays);
    setTimeout(() => {
      setUpdateDays(!updateDays);
    }, 500);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(countdownDate - new Date().getTime());

      if (time % 1000 < 1000 && time % 1000) {
        updateEachSecond();
      }

      if (time % (1000 * 60) < 1000 && time % (1000 * 60)) {
        updateEachMinute();
      }

      if (time % (1000 * 60 * 60) < 1000 && time % (1000 * 60 * 60)) {
        updateEachHour();
      }

      if (time % (1000 * 60 * 60 * 24) < 1000 && time % (1000 * 60 * 60 * 24)) {
        updateEachDay();
      }
    }, 500);

    return () => clearInterval(interval);
  }, [time, updateSeconds, updateMinutes, updateHours, updateDays]);

  return runTime(time, updateSeconds, updateMinutes, updateHours, updateDays);
}

const runTime = (time, updateSeconds, updateMinutes, updateHours, updateDays) => {
  return {
		days: {
			value: Math.floor(time / (1000 * 60 * 60 * 24)),
			updated: updateDays,
		},
		hours: {
			value: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
			updated: updateHours,
		},
		minutes: {
			value: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
			updated: updateMinutes,
		},
		seconds: {
			value: Math.floor((time % (1000 * 60)) / 1000),
			updated: updateSeconds,
		},
	};
};
