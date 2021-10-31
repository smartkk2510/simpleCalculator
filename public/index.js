var a = 0;
const getData = async (num) => {
  const data = await fetch(` https://simplecalc-node-module.herokuapp.com/${num}`);
  console.log(data);
  a = await data.json();
  console.log(a);
  document.getElementById("result").innerHTML = `Result : ${await a}`;
};

submitted = () => {
  a = undefined;
  setTimeout(() => {
    let num = document.getElementById("op").value;
    if (num !== "") {
      getData(num);
    } else {
      alert("invalid");
    }
  }, 100);
};
