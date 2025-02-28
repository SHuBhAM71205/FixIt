let NavDashboard = document.querySelector("#NavDashboard");
let NavRequests = document.querySelector("#NavRequests");
let NavTaskMasters = document.querySelector("#NavTaskMasters");
let NavReports = document.querySelector("#NavReports");
let sidebar = document.querySelector("#sidebar");
let Navigation = document.querySelector("#navigation")
let ContentCanvas = document.querySelector("#content-canvas")



function RemoveActive() {
    let Links = document.querySelectorAll(".link-item");

    Links.forEach((link) =>
        link.classList = 'link-item'
    )
}

NavDashboard.onclick = () => {
    RemoveActive();
    NavDashboard.classList.add("active");
}

NavRequests.onclick = () => {
    RemoveActive();
    NavRequests.classList.add("active");
}

NavTaskMasters.onclick = () => {
    RemoveActive();
    NavTaskMasters.classList.add("active");
}

NavReports.onclick = () => {
    RemoveActive();
    NavReports.classList.add("active");
}

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Requests', 'Fullfilled', 'Pending'],
        ['Monday', 1000, 400],
        ['Tuesday', 1170, 460],
        ['Wednesday', 660, 1120],
        ['Thursday', 1030, 540],
        ['Friday', 1000, 300],
    ]);

    var options = {
        title: 'Jeel Kalathiya',
        chartArea: { width: '50%' },
        hAxis: {
            title: 'Week days',
            minValue: 0
        },
        vAxis: {
            title: 'Year'
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('week-chart'));
    chart.draw(data, options);
}

function WeekChart() {
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawChart);

    drawChart();
}

WeekChart();

