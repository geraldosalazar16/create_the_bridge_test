document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("default").click();

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    }

    // Animations
    var recover = {
        opacity: 1
    };
    recover['pointer-events'] = 'all';
    // S1
    var controller = new ScrollMagic.Controller();
    var tlLogos = new TimelineMax();
    tlLogos.to('.s1', 0.5, recover);
    tlLogos.staggerFrom(".logo", 1.25, {
        scale: 0,
        cycle: {
          y: [-50, 50]
        },
        ease: Elastic.easeOut,
        stagger: {
          from: "center",
          amount: 0.25
        }
    });
      
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: 0
    })
    .setTween(tlLogos)
    .addTo(controller);

    // S2
    var tls2 = new TimelineMax();
    tls2.to('.s2', 1, recover);
      
    scene = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        triggerHook: 0
    })
    .setTween(tls2)
    .addTo(controller);

    // S3
    var tls3 = new TimelineMax();
    tls3.to('.s3', 1, recover);
      
    scene = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        triggerHook: 0
    })
    .setTween(tls3)
    .addTo(controller);

    // S4
    var tls4 = new TimelineMax();
    tls4.to('.s4', 1, recover);
      
    scene = new ScrollMagic.Scene({
        triggerElement: "#trigger4",
        triggerHook: 0
    })
    .setTween(tls4)
    .addTo(controller);

    // S5
    var tls5 = new TimelineMax();
    tls5.to('.s5', 1, recover);
      
    scene = new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        triggerHook: 0
    })
    .setTween(tls5)
    .addTo(controller);
});


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
}

