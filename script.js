var nav_buttons = document.getElementsByClassName("nav-buttons");
nav_buttons[0].onclick = function () {
  var outside_india = document.getElementById("outside-india");
  var grade_12 = document.getElementById("12-grade");
  var fsyear = document.getElementById("first-second-year");
  var tfyear = document.getElementById("third-fourth-year");
  var jobexp = document.getElementById("experienced");
  var research = document.getElementById("research-oriented");
  var career = document.getElementById("career-oriented");
  if (outside_india.style.display == "block") {
    outside_india.style.display = "none";
    grade_12.style.display = "none";
    fsyear.style.display = "none";
    tfyear.style.display = "none";
    career.style.display = "none";
    research.style.display = "none";
    jobexp.style.display = "none";
  } else {
    outside_india.style.display = "block";
  }
  nav_buttons[1].onclick = function () {
    if (grade_12.style.display == "block") {
      grade_12.style.display = "none";
    } else {
      grade_12.style.display = "block";
    }
  };
  nav_buttons[2].onclick = function () {
    if (fsyear.style.display == "block") {
      fsyear.style.display = "none";
    } else {
      fsyear.style.display = "block";
    }
  };
  nav_buttons[3].onclick = function () {
    if (tfyear.style.display == "block") {
      tfyear.style.display = "none";
      career.style.display = "none";
      research.style.display = "none";
    } else {
      tfyear.style.display = "block";
      nav_buttons[4].onclick = function () {
        var research_oriented = document.getElementById("research-oriented2");
        research_oriented.classList.toggle("active");
        console.log(research_oriented.classList);
      };
      nav_buttons[5].onclick = function () {
        if (career.style.display == "block") {
          career.style.display = "none";
        } else {
          career.style.display = "block";
        }
      };
    }
  };
  nav_buttons[6].onclick = function () {
    if (jobexp.style.display == "block") {
      jobexp.style.display = "none";
    } else {
      jobexp.style.display = "block";
    }
  };
};
nav_buttons[7].onclick = function () {
  var in_india = document.getElementById("in-india");
  if (in_india.style.display == "block") {
    in_india.style.display = "none";
  } else {
    in_india.style.display = "block";
  }
};
