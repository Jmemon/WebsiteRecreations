function toggleNewDD() {
  document.getElementById("newDD").classList.toggle("show");
}

function toggleProfDD() {
  document.getElementById("profDD").classList.toggle("show");
}

function logoHover() {
  document.getElementById("Logo").src = "logo-hover.png";
}

function logoNoHover() {
  document.getElementById("Logo").src = "logo-nohover.png";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches("#newDD-btn")) {
  	var newDD = document.getElementById("newDD");
    if (newDD.classList.contains("show")) {
      newDD.classList.remove("show");
    }
  }

  if (!e.target.matches("#profDD-btn")) {
    var profDD = document.getElementById("profDD");
    if (profDD.classList.contains("show")) {
      profDD.classList.remove("show");
    }
  }
}
