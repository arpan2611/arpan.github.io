anychart.onDocumentReady(function() {

    
    var data = [
        {x: "HTML", value: 72},
        {x: "CSS", value: 72},
        {x: "JS", value: 72},
        {x: "Django & flask", value: 72},
        {x: "bootstrap", value: 72},
        
    ];
  
 
    var chart = anychart.pie();
    chart.data(data);
    chart.container('container');
    chart.draw();
  
  });