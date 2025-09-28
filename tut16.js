function work(name, callback) {
    console.log("work started by " + name);
    setTimeout(() => {
        console.log("work done by " + name);
        callback(name)
    }, 2000);

}

function sayBye(name) {
    console.log("goodbye " + name);

}

// work("Harshit", sayBye)
// sayBye("Harshit")

function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 complete");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 1000);
}

function step3() {
  setTimeout(() => {
    console.log("Step 3 complete");
  }, 1000);
}

// Execute in order
// step1(() => step2(() => step3()));
step1(() => step2(step3));
