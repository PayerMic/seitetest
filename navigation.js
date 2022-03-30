<!-----------JavaScript Bereich ------------>

       var count = 0;
       var dummyElement = document.createElement('div');
            var a = document.createElement('a');
            //a.setAttribute('xlink:href', 'https://www.google.com');
            a.setAttribute('style', 'cursor: pointer');
            //a.setAttribute('target', '_blank'); // open in new tab

            var groups = cmap.getElementsByTagName('g');
            for (let i = 0; i < groups.length; i++) {
                const group = groups[i];
                if (!group.innerHTML.includes('<path') && group.innerHTML.includes('<rect')) { // excludes paths (Connection Lines) and includes rect (Linking Phrases)
                    let textAttribute = group.getElementsByTagName('text');
                    let text = textAttribute[0].innerHTML;
                    let result = text.replace('<tspan>', '');
                    result = result.replace(/(\r\n|\n|\r|^\t|\ )/gm, '');
                    result = result.replace('</tspan><tspanfill="none">t</tspan><tspan>', ' ');
                    result = result.replace('</tspan>', '');
                    
                    //a.setAttribute('xlink:href', 'https://www.google.com/search?q='+result);
                    //a.setAttribute('xlink:href', 'https://de.wikipedia.org/wiki/JavaScript');
                    //a.setAttribute('xlink:href', 'https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=Origin%20Trials');
                    //a.setAttribute('xlink:href', 'https://unruffled-shirley-76d5ba.netlify.app/oberthema%201#:~:text=Unterthema');

                    a.setAttribute('onclick', 'searchFunction("Unterthema 1")');

                    //a.setAttribute("onclick", "searchFunction(" +result+")");
                    //a.setAttribute("onclick", "return searchFunction(\'' + result + '\')");



                    
                    dummyElement.innerHTML = a.outerHTML;
                    var htmlAnchorElement = dummyElement.querySelector('a');

                    htmlAnchorElement.innerHTML = group.innerHTML;
                    group.innerHTML = dummyElement.innerHTML;
                    

                    //console.log(group.innerHTML);
                }
                
            }
    
        function searchFunction(searchText) {
            //event.preventDefault();
            //$(window).scrollTop($("span:contains('ECMAScript'):last").offset().top);
            //var elmnt = document.getElementsByClassName("mw-parser-output");
            //elmnt.scrollTop += 1000;
            //element.scrollTop(element("span:contains('ECMAScript'):last").offset().top);
            //console.log('test')
            //window.scrollBy(0, document.evaluate("//*[text()[contains(., 'ECMAScript')]][last()]", document.body).iterateNext().getBoundingClientRect().top);
            
            //var wiki = document.getElementsByTagName('body');
            //$('body').scrollTo('#target');
            const element = document.getElementsByClassName(searchText);
            if (count < element.length) {
                element[count].scrollIntoView();
                count++;
            }
            else{
                count = 0;
                element[count].scrollIntoView();
            }
            
        }
