let moduleList = (function(){

  let metroList = document.querySelector('#metroList')
  let stationList = document.querySelector('#stationList')
  let scheduleList = document.querySelector('#schedule')


  function fetchMetro() {
    const url = 'https://api-ratp.pierre-grimaud.fr/v4/lines/metros'

    fetch(url)
      .then(function(response){
        response.json().then(function(data){

            console.log(data.result.metros)

            data.result.metros.forEach(function(metro){
              console.log(metro)

              metroList.innerHTML += '<option value="'+ metro.code +'">' + metro.name + '</option>'



            })
        })


    })


  }

  function fetchStation(code) {
    const url = 'https://api-ratp.pierre-grimaud.fr/v4/stations/metros/'+ code

    fetch(url)
      .then(function(response){
        response.json().then(function(data){

            console.log(data.result.stations)

            data.result.stations.forEach(function(station){
              console.log(station)

              stationList.innerHTML += '<option value="'+ station.slug +'">' + station.name + '</option>'



            })
        })


    })


  }
  function fetchSchedule(code, slug) {
    const url = 'https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/'+ code + '/' + slug + '/A+R '

    fetch(url)
      .then(function(response){
        response.json().then(function(data){

            console.log(data.result.schedules)

            scheduleList.innerHTML += '<ul>'

            data.result.schedules.forEach(function(schedule){
              console.log(schedule)

              scheduleList.innerHTML += '<li>' + schedule.message + ' ' + 'vers' + ' ' + schedule.destination + '</li>'


            })
            scheduleList.innerHTML += '</ul>'
        })


    })


  }



    return {

        fetchMetro: fetchMetro,
        fetchStation: fetchStation,
        fetchSchedule: fetchSchedule,

    }

})()

let metroList = document.querySelector('#metroList')

stationList.addEventListener('change', function(){
  moduleList.fetchSchedule(metroList.value, stationList.value)
})

metroList.addEventListener('change', function(){
  moduleList.fetchStation(metroList.value)
})

moduleList.fetchMetro()

setInterval(function(){
  if(metroList.value){
  if(stationList.value){
    moduleList.fetchSchedule(metroList.value, stationList.value)
  }}


},30000)




/*
  var
      fragment = document.createDocumentFragment();
      opt;
  opt = document.createElement( "option" );
  opt.value = "value";
  opt.innerHTML = "ce-qui-s-affiche";
*/
