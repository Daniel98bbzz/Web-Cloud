document.addEventListener("DOMContentLoaded", function() {
  var tableRows = document.querySelectorAll("tbody tr");

  tableRows.forEach(function(row) {
    var action1 = row.querySelector(".action-1");
    var icon1 = action1.querySelector(".action-icon");

    var action2 = row.querySelector(".action-2");
    var icon2 = action2.querySelector(".action-icon");

    action1.addEventListener("click", function() {
      this.classList.toggle("active");
      icon1.classList.toggle("red");
    });

    action2.addEventListener("click", function() {
      this.classList.toggle("active");
      icon2.classList.toggle("red");
    });
  });
});
/*************************this is the left card */
const xValues = [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];


const xValuesStr = xValues.map(value => {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
});

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValuesStr,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

/*************************this is the form  */
function showCancelWarning() {
  document.getElementById("cancelWarning").classList.remove("d-none");
}

function hideCancelWarning() {
  document.getElementById("cancelWarning").classList.add("d-none");
}

function cancelForm() {
  // Add logic to return to the previous page or perform any other desired action
  alert("Form canceled");
}



  function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var sidebarWidth = getComputedStyle(sidebar).width;
    if (sidebarWidth === '0px') {
      sidebar.style.width = '270px';
    } else {
      sidebar.style.width = '0px';
    }
  }
  
  function offcanvas() {
    var menubar = document.getElementById("sidebar");
    menubar.classList.toggle("offcanvas-menu");
    var modal_shadow = document.getElementById("modal-shadow");
    modal_shadow.classList.toggle("show");
    document.body.style.overflow="hidden";
 } 
 function remove() {
    var menubar = document.getElementById("sidebar");
    menubar.classList.toggle("offcanvas-menu");
    var modal_shadow = document.getElementById("modal-shadow");
    modal_shadow.classList.toggle("show");
    document.body.style.overflow="";
 }

