  function show(id) {
   obj = document.getElementById('plusboton1'+id);
   obj.style.display = (obj.style.display=='none') ? 'block' : 'none';
   obj2 = document.getElementById('plusboton2'+id);
   obj2.style.display = (obj.style.display=='none') ? 'block' : 'none';
}

  function printDiv(nombreDiv) {
     var contenido= document.getElementById(nombreDiv).innerHTML;
     var contenidoOriginal= document.body.innerHTML;

     document.body.innerHTML = contenido;

     window.print();

     document.body.innerHTML = contenidoOriginal;
   }

function HTMLtoPDF(){
var pdf = new jsPDF('p', 'pt', 'letter');
source = $('.HTMLtoPDF')[0];
specialElementHandlers = {
  '#bypassme': function(element, renderer){
    return true
  }
}
margins = {
    top: 50,
    left: 60,
    width: 545
  };
pdf.fromHTML(
    source // HTML string or DOM elem ref.
    , margins.left // x coord
    , margins.top // y coord
    , {
      'width': margins.width // max width of content on PDF
      , 'elementHandlers': specialElementHandlers
    },
    function (dispose) {
      // dispose: object with X, Y of the last line add to the PDF
      //          this allow the insertion of new lines after html
        pdf.save('informepdf.pdf');
      }
  )   
}