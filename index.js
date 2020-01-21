function getDogImage (count) {
    fetch("https://dog.ceo/api/breeds/image/random/"+count)
    .then(response => response.json())
    .then(responseJson => console.log(displayResults(responseJson)))
    .catch(error => alert("Something went wrong. Try again later"));
}

// get the image array,
//Then pass the image arr to displayImages
//Then use for loop to display the image.
//let data = getDogImage(getValue);

function displayResults(responseJson) {
    let imgString = ""
    for(let i = 0; i <responseJson.message.length; i++) {
        imgString += `<img src="${responseJson.message[i]}" class="results-img" alt="placehodler" width="auto" height="auto"/>`
    }   
    console.log(imgString);

    return $('.result').replaceWith(imgString);
   };

    
function eventListen() {
    $('form').submit(event => {
      event.preventDefault();
      let getValue = document.getElementById("hariu").value;
      console.log("testing",getValue);
      getDogImage(getValue);
    });
  }

$(function() {
    console.log('App loaded! Waiting for submit!');
    eventListen();
  });
