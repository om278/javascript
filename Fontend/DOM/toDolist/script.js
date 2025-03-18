let sr=0
function addtask() {
    let input=document.querySelector("input").value
    // console.log(input);
    document.querySelector("input").value=""
    let tr=document.createElement("tr")
    let td=document.createElement("td")
    let datasr=document.createElement("td")
    ++sr
    tr.append(datasr,td )
    datasr.append(sr)
    td.append(input)
    let datatb=document.querySelector("table")
    datatb.append(tr)
    // console.log(tr);
    
}