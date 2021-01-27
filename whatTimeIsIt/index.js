const whatTimeIsIt = time => {
  // do code here
  let hour = time.split(" ")[0].split(":")[0];
  let minute = time.split(" ")[0].split(":")[1];
  let waktu = time.split(" ")[1];
  let minuteAwal = minute.split("")[0];
  let minuteAkhir = minute.split("")[1];

  let str1 = [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eightteen", "nineteen"];
  let str2 = ["", "", "twenty", "thirty", "forty", "thirty", "fifty"]
  if (time === "12:00 pm") return "It's noon"
  if (time === "12:00 am") return "It's midnight"
  if (waktu === "pm") {
    if (minute > 19) return `It's ${str1[hour]} past ${str2[minuteAwal]} ${str1[minuteAkhir]} in the afternoon`
    else return `It's ${str1[hour]} past ${str1[minute]} in the afternoon`
  } else {
    if (minute > 19) return `It's ${str1[hour]} past ${str2[minuteAwal]} ${str1[minuteAkhir]} in the morning`
    else return `It's ${str1[hour]} past ${str1[minute]} in the morning`
  }

  }


// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(whatTimeIsIt("12:00 pm"), "It's noon")
test(whatTimeIsIt("3:49 pm"), "It's three past forty nine in the afternoon")
test(whatTimeIsIt('12:00 am'), "It's midnight")
test(whatTimeIsIt("5:31 am"), "It's five past thirty one in the morning")
test(whatTimeIsIt("9:11 am"), "It's nine past eleven in the morning")