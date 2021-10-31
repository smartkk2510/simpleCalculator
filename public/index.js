var a = 0;
const getData = async (num) => {
  const data = await fetch(`http://localhost:3000/calc/${num}`);
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
