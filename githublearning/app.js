const removeSNames = (names) =>{

    let expectedOutput = names;
    names.forEach(element => {
        if(element.charAt(0)==='S'){
            const index = expectedOutput.indexOf(element);
            console.log (index);
            expectedOutput.splice(index,1);
        }        
    });
    console.log (expectedOutput);
    return expectedOutput;
}
module.exports = removeSNames;