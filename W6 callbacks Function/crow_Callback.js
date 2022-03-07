import {bigOak} from "./crow-tech";

bigOak.readStorage("food caches", caches => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, info => {
    console.log(info);
  });
});

bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
            () => console.log("Note delivered."));

            
import {defineRequestType} from "./crow-tech";

defineRequestType("note", (nest, content, source, done) => {
  console.log(`${nest.name} received note: ${content}`);
  done();
});

//Ordering a beverage at a local cafe:

function makeorderCallback() {

     alert("Your beverage get ready in" + waitminutes);

     }

function Order(customerName, beverage, makeorderCallback) {

    checkstock(beverage) {
        
    }

     makeorderCallback(customerName, beverage);

     }

Calling a friend:

function dialFriendCallback() {

     alert("Calling " + friendName + "at " + phoneNumber);

     }

function getFriendInfo(friendName, phoneNumber, dialFriendCallback) {

     dialFriendCallback(friendName, phoneNumber);

     }