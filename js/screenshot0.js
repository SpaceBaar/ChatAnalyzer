document.getElementById("screenshot0").onclick = doScreenshot;

function doScreenshot() {

// hide Stuff

document.getElementById("feedback").style.display = "none";

document.getElementById("mostUsedButtons").innerHTML = "";



// do screenshot

    // do screenshot
      $(document).ready(function() {
      var target = document.getElementById("results");

      html2canvas(target).then(function(canvas) {
        canvas.toBlob(function(blob) {


          saveAs(blob, "WhatsAppChatAnalyzer.png");
        });
      });
      });

  // html2canvas(target, {
  //
  //     onrendered: function(canvas) {
  //       //document.body.appendChild(canvas)
  //
  //       canvas.toBlob(function(blob) {
  //
  //         console.log("ts")
  //         saveAs(blob, "WhatsAppChatAnalyzer.png");
  //       });
  //
  //     // data is the Base64-encoded image
  //     }
  // });


// show Stuff
document.getElementById("feedback").style.display = "block";





}
