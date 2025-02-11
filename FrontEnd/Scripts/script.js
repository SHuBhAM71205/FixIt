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

function ShowOnlyChild(parent, child) {
    let children = parent.children;

    for (let item of children) {
        if (item != child) {
            item.style.display = "none";
        }
    }
}

function ShowAllChild(parent) {
    let children = parent.children;
    for (let item of children) {
        item.style.display = "flex";
    }
}

// toggle side bar
sidebar.onclick = () => {
    if (Navigation.classList.contains("hidden")) {
        Navigation.classList.remove("hidden");
        sidebar.innerHTML = '<i class="fa-solid fa-angles-left fa-2xl ani-pop"></i>';
        Navigation.style.width = "20%";
        ContentCanvas.style.width = "80%";
        setTimeout(() => {
            ShowAllChild(Navigation);
        }, 250);

    } else {
        Navigation.classList.add("hidden");
        sidebar.innerHTML = '<i class="fa-solid fa-angles-right fa-2xl ani-pop"></i>'
        setTimeout(() => {
            ShowOnlyChild(Navigation, sidebar);
        }, 250);
        Navigation.style.width = "5%";
        ContentCanvas.style.width = "95%"

    }
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
        ['Friday',1000,300],
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

