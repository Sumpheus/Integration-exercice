function kevin() {
  var emma = document.getElementById("myTopnav");
  if (emma.className === "topnav") {
    emma.className += " responsive";
  } else {
    emma.className = "topnav";
  }
}

$('#subnow').click(function(){
    alert('A message has been sent to your mailbox. Welcome to Bikeshop !');
});
