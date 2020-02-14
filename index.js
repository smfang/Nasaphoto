'use strict';

// API value 
const apiKey = 'XqksW9e2W8FvbgrgoirT0zhQpacSCWRrfFLWFQfW'; 
const searchURL = 'https://api.nasa.gov/planetary/apod/';



//press on submit button and scroll to results
function scrollPageTo(myTarget, topPadding) {
  if (topPadding == undefined) {
      topPadding = 0;
  }
  var moveTo = $(myTarget).offset().top - topPadding;
  $('html, body').stop().animate({
      scrollTop: moveTo
  }, 200);
}




//function  
 // }
function GETpicture() {
    const url = searchURL + query;

    fetch(url)
        .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayResults(responseJson))
        .catch(err => {
          
        //change to more user friendly errors
      
            $('#js-error-message').text(`Something went wrong please try again.`);
        });
//}
  

//function Get() {
 // const url = searchURL + query;
    //  $.ajax(url, {
         // data: {
           //   date: query,
             // limit: 9,
              

          //},
          //dataType: 'json',
          //type: 'GET',
          //success: function (data) {
            //  try {
              //    let results = data.response.groups[0].items.map(function (item, index) {
                //      return displayResults(item);
                  //});
               
             // } catch (e) {
               //   $('#results').html("<div class='result'><p>Sorry! No Results Found.</p></div>");
              //}
          ///////},
          //error: function () {
             // $('#results').html("<div class='result'><p>Sorry! No Results Found.</p></div>");
         // }
     // });
 // });
}


  
     
  function displayResults(responseJson) {
    // if there are previous results, remove them
    console.log(responseJson);
    $('#results-list').empty();
    // iterate through the items array
    for (let i = 0; i < responseJson.items.length; i++){
      $('#results-list').append(
        `<li><h3>${responseJson.items[i]}</h3>
         
         </li>`
     )};
  //display the results section  
    $('#results').removeClass('hidden');
    displaySelectedListener();
  };
  
  
  
  function displayListListener() {
    $(".laptop-li").click(function() {
        $('.results').addClass('hidden');
        $('.selected').removeClass('hidden');
        let index = $(this).attr('node');
        index = +index; //converts string to number
        getSelectedLaptopInfo(index);
    })
}


  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      const searchTerm = $('#js-search-term').val();
      //const maxResults = $('#js-max-results').val();
      console.log ("searchTerm; ", searchTerm);
      GETpicture(searchTerm);
    });
  }
  $(watchForm);
