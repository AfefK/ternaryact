const nameIn = document.querySelector("#inputname");
const ageIn = document.querySelector("#inputage");
const licenceAge = document.querySelector("#licenceAge");
const genderIn = document.querySelector("#genders");
const nameOut = document.querySelector("#name");
const ageOut = document.querySelector("#age");
const licenceAgeOut = document.querySelector("#licenceageout");
const genderOut = document.querySelector("#gender");
const resultOut = document.querySelector("#result");
const subBtn = document.querySelector("#success");

const test = () => {
  subBtn.disabled = !(nameIn.value && ageIn.value && licenceAge.value);
};

test();

function styleResult() {
  if (ageIn.value >= 18 && ageIn.value < 75) {
    if (licenceAge.value >= 2) {
      resultOut.style.textDecoration = "underline";
    } else {
      resultOut.style.textDecoration = "none";
    }
    if (genderIn.value === "f") {
      resultOut.style.color = "pink";
    } else {
      resultOut.style.color = "blue";
    }
  } else {
    resultOut.style.color = "red";
  }
}

function result() {
  styleResult();
  nameOut.innerText = nameIn.value;
  ageOut.innerText = ageIn.value;
  licenceAgeOut.innerText = licenceAge.value;
  genderOut.innerText = genderIn.value === "f" ? "female" : "male";
  resultOut.innerText =
    ageIn.value >= 18 && ageIn.value < 75
      ? licenceAge.value >= 2
        ? genderIn.value === "f"
          ? "female expert"
          : "male expert"
        : genderIn.value === "f"
        ? "female driver"
        : "male driver"
      : "not a driver";
}

nameIn.addEventListener("input", test);
ageIn.addEventListener("input", test);
licenceAge.addEventListener("input", test);
genderIn.addEventListener("input", test);

subBtn.addEventListener("click", result);
