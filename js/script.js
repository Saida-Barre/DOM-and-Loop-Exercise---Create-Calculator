/*STEP 1: declare variables */
//This code is used for receiving first input value from input field by id.
let firstNum = document.getElementById("firstNumber").value;
//This code is used for receiving second input value from input field by id.
let secondNum = document.getElementById("secondNumber").value;
//this code is used for selecting operator from dropdown menu
let dropDown = document.getElementsByClassName("dropBtn");
//This code is used for call submit function when button clicked.
let submit = document.getElementById("addBtn");
//This code is used for receive calculated value of factorial and display in input field which have id answer
let result = document.getElementById("result").value=fact;
console.log(firstNum)
console.log(dropDown)
console.log(secondNum)
console.log(submit)
console.log(result)
//**************************************CREATING DROPDOWN MENU (cite: https://www.w3schools.com/howto/howto_js_dropdown.asp)******************
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    event.preventDefault()
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropBtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          /**************************************************DONE WITH DROPDOWN MENU*******************************************************/
        }
      }
    }
  }/************************************CREATING "FOR" LOOPS TO ADD, SUBTRACT, MULTIPLY AND DIVIDE (THEORY + PRACTICE)******************************/
  //pseudo-code to Loop through a block of code five times:
  /*step 1: declare variables 
         a) for array of numbers and call it nums */
         //let nums = ['1','2','3','4','5']
        /*the loop starts at 0 and the "total" variable needs to be declared before the loop or else it will not preserve the previous addition*/
         //let total = 0; 
    /*step 2: create for loop statement (create assignment, termination condition and iterator)*/
    /*step 3: for each for loop statement, create a code block to be executed for each operator (+,-,*,/)*/
    /*step 4: alert result*/
        
        /*for (let i=0; i < 5; i++) {
            total = total + Number(nums[i]); /*use Number() to convert string to number. We don't want to add strings 
                                               because it will concatenate the strings rather than getting the sum of number*/
            //alert(total);
        //}
        /*for (let i=0; i < 5; i--){
            total = total - Number(nums[i]);
            alert(total);
        }

        for (let i=0; i < 5; i**){
            total = total * Number(nums[i]);
            alert(total);
        }
        for (let i=0; i < 5; i/){
            total = total / Number(nums[i]);
            alert(total);
        }
  
