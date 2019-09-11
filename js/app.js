
const alert_button = document.getElementById('exit');
const alert = document.getElementById('alert');
const sender = document.getElementById('send');
const textarea = document.getElementsByTagName('textarea');
const searchName = document.getElementsByTagName('searchName');
const text_area = document.getElementById('textarea');
const searchMessage = document.getElementById('searchName');
const hourly = document.getElementById('traffic-hourly');
const daily = document.getElementById('traffic-daily');
const weekly = document.getElementById('traffic-weekly');
const monthly = document.getElementById('traffic-monthly');


//Traffic 

var ctx = document.getElementById('theChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10'],
        datasets: [{
            label: '# of Votes',
            data: [5, 19, 13, 15, 2, 13, 3, 4],
            backgroundColor: [
                'lightblue',
                'lightblue',
                'lightblue',
                'lightblue',
                'lightblue',
                'lightblue', 
                'lightblue', 
                'lightblue'
            ],
            borderColor: [
                'rgb(134, 163, 255)',
                'rgb(134, 163, 255)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});





// Daily Traffic
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(134, 163, 255)',
                'rgb(134, 163, 255)',
                'rgb(134, 163, 255)',
                'rgb(134, 163, 255)',
                'rgb(134, 163, 255)',
                'rgb(134, 163, 255)'
            ],

            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



// Mobile Users
var ctx = document.getElementById('aChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [
          {
            backgroundColor: ["#3e95cd", "rgb(134, 163, 255)","#3cba9f"],
            data: [2478,5267,784]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted Mobile Users (millions) in 2050'
        }
      }
  });



alert_button.addEventListener('click', (e) => {
    alert.style.display = 'none';
});



sender.addEventListener('click', (e) => {
   // console.log('BUTTON IS CLICKED BUT IT DISAPPEARS', searchMessage.value)


    if(text_area.value === "" && searchMessage.value === "" ) {
        alert('Please enter the required fields.');
    }


});


hourly.addEventListener('click', (e) => {

    daily.style.backgroundColor = 'white';
    weekly.style.backgroundColor = 'white';
    monthly.style.backgroundColor = 'white';

    hourly.style.backgroundColor = 'lightgreen';

    var ctx = document.getElementById('theChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10'],
            datasets: [{
                label: '# of Votes',
                data: [15, 19, 12, 10, 22, 13, 3, 7],
                backgroundColor: [
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue', 
                    'lightblue', 
                    'lightblue'
                ],
                borderColor: [
                    'rgb(134, 163, 255)',
                    'rgb(134, 163, 255)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

});

daily.addEventListener('click', (e) => {

    hourly.style.backgroundColor = 'white';
    weekly.style.backgroundColor = 'white';
    monthly.style.backgroundColor = 'white';

    daily.style.backgroundColor = 'lightgreen';

    var ctx = document.getElementById('theChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10'],
            datasets: [{
                label: '# of Votes',
                data: [25, 19, 13, 15, 12, 13, 9, 14],
                backgroundColor: [
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue', 
                    'lightblue', 
                    'lightblue'
                ],
                borderColor: [
                    'rgb(134, 163, 255)',
                    'rgb(134, 163, 255)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

});

weekly.addEventListener('click', (e) => {

    hourly.style.backgroundColor = 'white';
    daily.style.backgroundColor = 'white';
    monthly.style.backgroundColor = 'white';

    weekly.style.backgroundColor = 'lightgreen';

    var ctx = document.getElementById('theChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10'],
            datasets: [{
                label: '# of Votes',
                data: [5, 9, 13, 15, 20, 23, 23, 14],
                backgroundColor: [
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue', 
                    'lightblue', 
                    'lightblue'
                ],
                borderColor: [
                    'rgb(134, 163, 255)',
                    'rgb(134, 163, 255)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

});

monthly.addEventListener('click', (e) => {

    hourly.style.backgroundColor = 'white';
    daily.style.backgroundColor = 'white';
    weekly.style.backgroundColor = 'white';

    monthly.style.backgroundColor = 'lightgreen';

    var ctx = document.getElementById('theChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10'],
            datasets: [{
                label: '# of Votes',
                data: [8, 15, 10, 15, 12, 8, 4, 6],
                backgroundColor: [
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue', 
                    'lightblue', 
                    'lightblue'
                ],
                borderColor: [
                    'rgb(134, 163, 255)',
                    'rgb(134, 163, 255)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

});
