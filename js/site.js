//get the values from the html document
function getValues()
{
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //parse values into integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //check to see if proper values were inputted
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && fizzValue > 0 &&
    buzzValue > 0)
    {
        //apply the FizzBuzz logic
        let fbData = fizzBuzz(fizzValue, buzzValue);
        //display data
        displayData(fbData);
    }
    else
    {
        //send error message
        alert("Please enter 2 positive integers!");
    }
}

//apply FizzBuzz logic
function fizzBuzz(fizzValue, buzzValue)
{
    let returnArray = [];

    //iterate from 1 to 100
    for(let i = 1; i <= 100; i++)
    {
        //check if fizzValue or buzzValue is a multiple of i and return the right word if they are
        //return i if both are not multiples
        let value = ((i % fizzValue == 0 ? "Fizz" : "") + (i % buzzValue == 0 ? "Buzz" : "") || i);
        returnArray.push(value);
    }

    return returnArray;
}

function displayData(fbData)
{
    //get the tbody from html document
    let tableBody = document.getElementById("results");

    //get the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table rows
    tableBody.innerHTML = "";

    //loop over fbData and increment by the index by 5 after every iteration
    for (let i = 0; i < fbData.length; i += 5)
    {
        //import template content
        let tableRow = document.importNode(templateRow.content, true);

        //get all tds in the template element
        let rowCols = tableRow.querySelectorAll("td");
        
        //add the class for styling and the text to the table data
        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];

        rowCols[1].classList.add(fbData[i+1]);
        rowCols[1].textContent = fbData[i+1];

        rowCols[2].classList.add(fbData[i+2]);
        rowCols[2].textContent = fbData[i+2];

        rowCols[3].classList.add(fbData[i+3]);
        rowCols[3].textContent = fbData[i+3];

        rowCols[4].classList.add(fbData[i+4]);
        rowCols[4].textContent = fbData[i+4];

        //add the table data to the table body
        tableBody.appendChild(tableRow);
    }
}