function greet(name){
if (name !== null && name !== undefined){
  
    if (typeof name === typeof []){
     if (name.length > 0) {
       let names = '';
       name.forEach((val) => {
           names += ', ' + val;           
       });
       return 'Hello' + names;
     }
     return ('Hello there!');
    }

   if (name === name.toUpperCase()) {
    return 'HELLO ' + name + '!';
    }
    return 'Hello, ' + name;
}
return ('Hello there!');
}

//console.log(greet('Gopi'));

module.exports = greet;