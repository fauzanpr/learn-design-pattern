import singletonCounter from "./counter";

const redBtn = document.getElementById("btnRed");
redBtn.addEventListener("click", () => {
   singletonCounter.increment();
   console.log(singletonCounter.getCount());
});

export default redBtn;
