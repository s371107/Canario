fetch('about.html', {mode: 'no-cors'}).then(r=>{
  document.getElementsByClassName("nav-link")[1].style.visibility = "active";
})
.catch(e=>{
  document.getElementsByClassName("nav-link")[1].style.visibility = "hidden";
});

fetch('bird.html', {mode: 'no-cors'}).then(r=>{
  document.getElementsByClassName("nav-link")[2].style.visibility = "active";
})
.catch(e=>{
  document.getElementsByClassName("nav-link")[2].style.visibility = "hidden";
});
fetch('contact.html', {mode: 'no-cors'}).then(r=>{
  document.getElementsByClassName("nav-link")[3].style.visibility = "active";
})
.catch(e=>{
  document.getElementsByClassName("nav-link")[3].style.visibility = "hidden";
});