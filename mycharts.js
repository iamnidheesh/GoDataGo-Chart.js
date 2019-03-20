function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function clickedLanguage() {
    
document.getElementById("framework").style.display = "none";
document.getElementById("language").style.display = "inline";
document.getElementById("database").style.display = "none";
data = [69.8,68.5,65.1,57.0,45.3,39.8,38.8,34.4,30.7,25.4,23.0,17.4,10.1,8.1,7.4,7.1,7.0,6.7,6.1,5.8,4.9,4.5,4.4,4.3,4.2];
labels = ['JavaScript','HTML','CSS','SQL','Java','Bash/Shell','Python','C#','PHP','C++','C','TypeScript','Ruby','Swift','Assembly','Go','Objective-C','VB.NET','R','Matlab','VBA','Kotlin','Scala','Groovy','Perl'];
display("language",data,labels,"Programming, Scripting, and Markup Languages");

}
function clickedFramework() {
    
document.getElementById("framework").style.display = "inline";
document.getElementById("language").style.display = "none";
document.getElementById("database").style.display = "none";
data = [49.6,36.9,27.8,27.2,17.6,13.0,8.5,7.8,7.4,4.8,4.7,1.7];
labels = ['Node.js','Angular','React','.NET Core','Spring','Django','Cordova','TensorFlow','Xamarin','Spark','Hadoop','Torch/PyTorch'];
display("framework",data,labels,"Frameworks, Libraries, and Tools");

}
function clickedDatabase() {

document.getElementById("framework").style.display = "none";
document.getElementById("language").style.display = "none";
document.getElementById("database").style.display = "inline";
data = [58.7,41.2,32.9,25.9,19.7,18.0,14.1,13.4,11.1,7.9,5.5,5.5,5.2,5.1,3.7,2.5,2.4,2.2,2.2,2.1,1.7];
labels = ['MySQL','SQL server','PostgresSQl','MongoDB','SQLite','Redis','Elasticsearch','MariaDB','Oracle','Microsoft Azure','Google Cloud','Memcached','Amazon DynamoDB','Amazon RDS/Aurora','Cassendra','IBM Db2','Neo4j','Amazon Redshift','Apache Hive','Google BigQuery','Apache HBase'];
display("database",data,labels,"Databases");

}

function getColors(items) {

    var backgs = [];
    var border = [];
    var value = [];
    for(var i = 0;i < items;i++) {
        var o = Math.round, r = Math.random, s = 255;
        backgs.push( 'rgba(' + o(r()*s) + ',' +  o(r()*s) + ',' +  o(r()*s) + ', 0.5)');
        border.push( 'rgba(' + o(r()*s) + ',' +  o(r()*s) + ',' +  o(r()*s) + ', 1)');
    }
    value.push(backgs);
    value.push(border);
    return value;
}

function display(typeOfChart,datavals,labelvals,titleText) {
    var ctx = document.getElementById(typeOfChart).getContext('2d');
    var bg = getColors(datavals.length);
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: labelvals,
            datasets: [{
                label: 'Text' ,
                data: datavals,
                backgroundColor: bg[0],
                borderColor: bg[1],
                borderWidth: 1
            }]
        },
        options: {
            legend : {display : false},
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title : {display : true ,text : titleText },

        }
    });
}


window.onload = function() {
    clickedFramework();
}