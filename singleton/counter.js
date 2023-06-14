let counter = 0;
let instance;

class Counter {
   constructor() {
      if (instance)
         throw new Error(
            "THIS IS USING SINGLETON, DON'T INSTANTIATE SOMETHING TWICE"
         );
      instance = this;
   }
   getInstance() {
      return this;
   }
   getCount() {
      return counter;
   }
   increment() {
      counter += 1;
   }
   decrement() {
      counter -= 1;
   }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
