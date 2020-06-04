//initialize and add the map
function initMap(){
  //your location
  const loc = {lat: 23.810331, lng: 90.412521};
  //centered map on location
  const map = new google.maps.Map(document.querySelector('.map'),
  {
    zoom:14,
    center:loc
  });
  //the marker,position at location 
  const marker = new google.maps.Marker({position: loc, map:map});
}


//smooth scrolling
$('#navbar a, .btn').on('click', function(event){
  if (this.hash !== ''){
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});