function addLoadEvent( func ) {
  const oldonload = window.onload;
  if ( typeof window.onload !== 'function' ) {
    window.onload = func;
  } else {
    window.onload = function onload() {
      oldonload();
      func();
    };
  }
}

function insertAfter( newElement, targetElement ) {
  const parent = targetElement.parentNode;
  if ( parent.lastChild === targetElement ) {
    parent.appendChild( newElement );
  } else {
    parent.insertBefore( newElement, targetElement.nextSibling );
  }
}

function addClass( element, value ) {
  let newClassName;
  if ( !element.className ) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName += ' ';
    newClassName += value;
    element.className = newClassName;
  }
}
