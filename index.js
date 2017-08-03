function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}


function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextnode = node.children[0];
  while (nextnode) {
    node = nextnode;
    nextnode = nextnode.children[0];
  }
  return node;
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}
