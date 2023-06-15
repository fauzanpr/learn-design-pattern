import singletonCounter from "./counter";

const blueBtn = document.getElementById("btnBlue");
blueBtn.addEventListener("click", () => {
   singletonCounter.increment();
   console.log(singletonCounter.getCount());
});

export default blueBtn;
