var rollv, nameV, genderV, addressV;

function readFom() {
  rollv = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  console.log(rollv, nameV, genderV, addressV);
}
document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollv) //primary key
    .set({
      rollNo: rollv,
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data inserted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};
document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollv)
    .update({
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data Updated");
  //this makes box blank
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};
document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollv)
    .on("value", function (snap) {
      //listener will check
      //this makes data show in boxes
      //snap is a callback function here as it is calling inside a function
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
    });
};

document.getElementById("deletee").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollv)
    .remove();
  alert("Data Deleted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};
