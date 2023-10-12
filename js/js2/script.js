let time = +prompt("Saat necedir?");

let timePm = 17;
let timeAm = 12;

if (time <= timeAm) {
  alert("sabahiniz xeyir!");
} else if (time > timeAm && time < timePm) {
  alert(" Gunortaniz xeyir!");
} else {
  alert("Axsaminiz xeyir!");
}
