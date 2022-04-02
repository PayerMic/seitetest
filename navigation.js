<!-----------JavaScript  ------------>

      var count = 0;
var lastSearchedText = undefined;
var dummyElement = document.createElement('div');
var a = document.createElement('a');
a.setAttribute('style', 'cursor: pointer');

var groups = cmap.getElementsByTagName('g');
for (let i = 0; i < groups.length; i++) {
  const group = groups[i];
  if (!group.innerHTML.includes('<path') & group.innerHTML.includes('<rect')) {
    // excludes paths (Connection Lines) and includes rect (Linking Phrases)
    let textAttribute = group.getElementsByTagName('text');
    let text = textAttribute[0].innerHTML;
    let result = text.replace('<tspan>', '');
    result = result.replace(/(\r\n|\n|\r|^\t|\ )/gm, '');
    result = result.replace('</tspan><tspanfill="none">t</tspan><tspan>', ' ');
    result = result.replace('</tspan>', '');

    a.setAttribute('onclick', 'searchFunction( " ' + result + ' " )');

    dummyElement.innerHTML = a.outerHTML;
    var htmlAnchorElement = dummyElement.querySelector('a');

    htmlAnchorElement.innerHTML = group.innerHTML;
    group.innerHTML = dummyElement.innerHTML;
  }
}

function searchFunction(searchText) {
  const element = document.getElementsByClassName(searchText);

  if (element[0] !== undefined) {
    //check if class name is found in HTML
    if ((count < element.length) & (lastSearchedText !== searchText)) {
      element[count].scrollIntoView();
      count++;
      lastSearchedText = searchText;
      console.log(lastSearchedText);
    } else {
      count = 0;
      element[count].scrollIntoView();
    }
  } else {
    alert('Kein Ergebnis gefunden!');
  }
}

