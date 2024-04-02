
const checkString = (string, length) => string.length <= length;
checkString ('проверяемая строка', 20);


const checkPalindrom = (string) => {
  if (!string?.trim().length) {
    return false;
  }

  const normalizeString = string.replaceAll(' ', '').toUpperCase();
  const reverseString = normalizeString.split('').reverse().join('');
  return normalizeString === reverseString;
};
checkPalindrom ('топот');

const returnsNumbers = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};


returnsNumbers ('2023 год');

const MS_PER_MINUTE = 60000;
const isMeetingDuringWork = (workStart, workEnd, meetingStart, meetingDuration) => {
  const workStartDate = new Date(`March 9, 2024 ${workStart}`);
  const workEndDate = new Date(`March 9, 2024 ${workEnd}`);
  const meetingStartDate = new Date(`March 9, 2024 ${meetingStart}`);
  const meetingEndDate = new Date(meetingStartDate.getTime() + meetingDuration * MS_PER_MINUTE);

  return meetingStartDate >= workStartDate && meetingEndDate <= workEndDate;
};

isMeetingDuringWork('08:00', '09:0', '8:55', 4);
isMeetingDuringWork('8:0', '10:0', '8:0', 120);
isMeetingDuringWork('08:00', '14:30', '14:00', 90);
isMeetingDuringWork('14:00', '17:30', '08:0', 90);
isMeetingDuringWork('8:00', '17:30', '08:00', 900);
