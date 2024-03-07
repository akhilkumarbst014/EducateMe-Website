window.addEventListener("load", function() {
    var tabs = document.getElementById("tabs"),
        tab = document.getElementsByClassName("tab"),
        tabContent = document.getElementsByClassName("tabContent"),
        input = document.getElementsByClassName("form__input"),
        active = "tab__active",
        form = document["signUp"],
        formEl = document["signUp"].elements,
        formLogIn = document["logIn"],
        dataInLocal = window.localStorage;
    
    formLogIn.addEventListener("submit", function(e) {
      if (dataInLocal.getItem("email") == formLogIn["email"].value &&
         dataInLocal.getItem("pass") == formLogIn["pass"].value) {
         alert("You loggined!");
      } else {
        e.preventDefault();
        alert("Your email or password is uncorrect");
      }
    }, false);
    
    form.addEventListener("submit", function(e) {
      if (e.target) {
        for (var i = 0, len = form.length; i < len; i++) {
          dataInLocal.setItem(form[i].name, form[i].value);
        }
      }
    }, false);
    
    for (var i = 0, len = input.length; i < len; i++) {
      input[i].addEventListener("focus", function(e) {
        var label = e.target.nextElementSibling;
        if (e.target.value == "") {
          label.style.display = "none";
        }
      }, false);
      input[i].addEventListener("blur", function(e) {
        var label = e.target.nextElementSibling;
        if (e.target.value == "") {
          label.style.display = "block";
        } else {
          label.style.display = "none";
        }
      }, false);
    }
    
    
    tabs.addEventListener("click", function(e) {
      for (var i = 0, a = tabContent.length; i < a; i++) {
        tab[i].classList.remove(active);
  
        if (e.target.className == "tab") {
          if (e.target.className != active) {
            for (var j = 0; j < a; j++) {
              tabContent[j].classList.remove("show");
            }  
            e.target.classList.add(active);
            tabContent[i].classList.add("show");
          } 
        }
      }
    }, false);
  });



  

  var mybubbles = document.getElementsByClassName("ani-bubble");

var bubblecolors = ["#c5a5ab", "#e3e2dd", "#87a6c0"];

for (var i = 0; i < mybubbles.length; i++) {
  mybubbles[i].style.backgroundColor =
    bubblecolors[Math.floor(Math.random() * bubblecolors.length)];
  mybubbles[i].style.opacity = Math.random() * 0.75;

  var bubblesize = (Math.floor(Math.random() * 9) + 2) * 50;

  mybubbles[i].style.width = bubblesize + "px";
  mybubbles[i].style.height = bubblesize + "px";
  mybubbles[i].style.borderRadius = bubblesize / 2 + "px";

  mybubbles[i].style.left = Math.floor(Math.random() * 100) + "%";

  mybubbles[i].style.animationDuration =
    Math.floor(Math.random() * 16) + 8 + "s";
  mybubbles[i].style.animationDelay = Math.floor(Math.random() * 8) + "s";
}

$(document).ready(function () {
  jQuery.expr.filters.offscreen = function (el) {
    return (
      el.offsetLeft + el.offsetWidth < 0 ||
      el.offsetTop + el.offsetHeight < 0 ||
      el.offsetLeft > window.innerWidth ||
      el.offsetTop > window.innerHeight
    );
  };
  setInterval(function () {
    $(".ani-bubble").each(function () {
      if ($(this).is(":offscreen")) {
        var bubbleoffset = Math.floor(Math.random() * 140 - 19);
        $(this).css({ left: bubbleoffset + "%" });
      }
    });
  }, 50);
});
