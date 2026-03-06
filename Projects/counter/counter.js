// counter
let count = 0;

// update couter
const updateCount = () => {
  document.getElementById("counter").innerText = count;
};


//icreaser counter
const increaseCounter = () => {
  count++;
  updateCount();
  if(count > 0){
    document.getElementById("counter").style.color = "green";
  }
  
};



//decrease counter
const decreaseCounter = () => {
    count--;
    updateCount();
    if(count < 0){
        document.getElementById("counter").style.color = "red";
    }
}


// reset counter
const resetCounter = () => {
    count = 0;
    updateCount();
    document.getElementById("counter").style.color = "brown";
}

/// save counter to local storage 
const saveCounter  = () => {
    localStorage.setItem("counter", count);
}


// load counter from local storage
const loadCounter = () => {
    let save = localStorage.getItem("counter");
    if(save !== null){
        count = Number(save);
    }
      updateCount();
}
