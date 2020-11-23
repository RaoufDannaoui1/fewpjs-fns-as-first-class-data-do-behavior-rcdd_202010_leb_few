/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
<<<<<<< HEAD
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}

/* Write your implementation of greet() */
function greet(timeStr) {
  /* It would be a good idea to make sure hour isn't less than 0 or greater
   * than 24...perhaps "throwing an Error" if one of these impossible cases
   * happens.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Throwing_a_generic_error
   *
   */
  const hour = parseInt(timeStr, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
=======
function greet(){
  if((timeString.split(1);)<12)
  {
    console.log("Good Morning");

  }else if (((timeString.split(1);)<12 ) && (timeString.split(1);  )>5  )
        {
          console.log("Good Afternoon");

        }else if((timeString.split(1);)>5)
              {
                console.log("Good Evening");
              }
return timeString;
>>>>>>> 0bc4b0c0a2ac54e72be86d55d339db967f71c8ca
}
/* Write your implementation of displayMessage() */
