const leftRow = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

const rightRow = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

const left = document.querySelector("#leftRow")
const right = document.querySelector("#rightRow")

leftRow.map((e, i) => {
    e.map((el, ind) => {
        //console.log(el);
        let div = document.createElement("div");
        div.innerText = el;
        left.append(div)
    });

});
rightRow.map((e, i) => {
    e.map((el, ind) => {
        //console.log(el);
        let div = document.createElement("div");
        div.innerText = el;
        right.append(div)
    });

});