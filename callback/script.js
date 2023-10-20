function loadScript(src,callback){
   
    var script = document.createElement("script")
    script.src = src;
    script.onload = function(){
        console.log("loaded"+src);
        callback();
    }
    document.body.appendChild(script)
    
  }
  function afterloading(){
alert("script Loaded!!")
  }
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",afterloading)