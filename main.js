$('.navbar-open-button').click(function () { 
    $('.navbar-content').animate({width:`250px`},150);
    $('.navbar-content').css('display',"block");
});

$('.fa-xmark').click(function (e) { 
    $('.navbar-content').animate({width:`0px`},150);
    $('.navbar-content').css({display:`none`});  
});

$(".tab h1").click(function(){
    $(".tab p").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500)
})

let charNumber = 100;
$('#message').keyup(function (e) { 
    let currentLength = $('#message').val().length;
    let amountLeft = charNumber - currentLength

    if(amountLeft <= 0 ){
        $('#messageHelp').text("You Finished character.");
        $('#submit').prop( "disabled", true )
    }
    else{
        $('#messageHelp').text(`${amountLeft}  Character Remaining `)
        $('#submit').prop( "disabled", false )
    }
});


window.onload = function() {
   
    countDownToTime("21 august 2023 10:00:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".min").html(`${ mins } m`);
    $('.sec').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }