var title = document.getElementById('title');
var list = document.getElementById('list');
var li = list.getElementsByTagName('li');
var addButton = document.getElementById('addButton');

list.addEventListener('click', activeItem);

function activeItem(event) {
  if (event.target.nodeName == "LI") {
    title.innerHTML = event.target.innerText;
    for (var i = 0; i < li.length; i++) {
      li[i].removeAttribute('class');
    };
    event.target.setAttribute('class', 'active');
  }
}

addButton.addEventListener('click', function() {
  var txt = prompt("Enter To do");
  list.innerHTML += '<li>' + txt + '</li>';
});
