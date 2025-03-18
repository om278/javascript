let sr = 0;
let arr = [];
function addtask() {
  let input = document.querySelector("input").value;
  document.querySelector("input").value = "";

  let obj = {
    id: ++sr,
    task: input,
    status: false,
  };
  arr.push(obj);
  let datatb = document.querySelector(".tbody");
  datatb.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");
    let srno = document.createElement("td");
    srno.innerText = arr[i].id;
    let task = document.createElement("td");
    task.innerText = arr[i].task;
    let stadata = document.createElement("td");
    stadata.innerText = arr[i].status
      ? "Task Is complate"
      : "Task is inComplate";
    tr.append(srno, task, stadata);
    datatb.append(tr);
  }
}
