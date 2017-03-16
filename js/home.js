function moveElement( elementID, finalX, finalY, interval ) {
  let dist;
  if ( !document.getElementById ) return false;
  if ( !document.getElementById( elementID ) ) return false;

  const elem = document.getElementById( elementID );
  if ( elem.movement ) {
    clearTimeout( elem.movement );
  }
  if ( !elem.style.left ) {
    elem.style.left = '0px';
  }
  if ( !elem.style.top ) {
    elem.style.top = '0px';
  }
  let xPos = parseInt( elem.style.left, 10 );
  let yPos = parseInt( elem.style.top, 10 );
  if ( xPos === finalX && yPos === finalY ) {
    return true;
  }
  if ( xPos < finalX ) {
    dist = Math.ceil( ( finalX - xPos ) / 10 );
    xPos += dist;
  }
  if ( xPos > finalX ) {
    dist = Math.ceil( ( xPos - finalX ) / 10 );
    xPos -= dist;
  }
  if ( yPos < finalY ) {
    dist = Math.ceil( ( finalY - yPos ) / 10 );
    yPos += dist;
  }
  if ( yPos > finalY ) {
    dist = Math.ceil( ( yPos - finalY ) / 10 );
    yPos -= dist;
  }
  elem.style.left = `${xPos}px`;
  elem.style.top = `${yPos}px`;

  const repeat = `moveElement('${elementID}',${finalX},${finalY},${interval})`;
  elem.movement = setTimeout( repeat, interval );
  return true;
}

function prepareSlideshow() {
  if ( !document.getElementsByTagName ) return false;
  if ( !document.getElementById ) return false;
  if ( !document.getElementById( 'intro' ) ) return false;
  const intro = document.getElementById( 'intro' );
  const slideshow = document.createElement( 'div' );
  slideshow.setAttribute( 'id', 'slideshow' );
  const frame = document.createElement( 'img' );
  /* eslint-disable  no-undef */
  frame.setAttribute( 'src', `${localDOMHome.template_url}/img/frame.gif` );
  /* eslint-enable  no-undef */
  frame.setAttribute( 'alt', '' );
  frame.setAttribute( 'id', 'frame' );
  slideshow.appendChild( frame );
  const preview = document.createElement( 'img' );
  // preview.setAttribute("src","img/slideshow.gif");
  /* eslint-disable  no-undef */
  frame.setAttribute( 'src', `${localDOMHome.template_url}/img/slideshow.gif` );
  /* eslint-enable  no-undef */
  preview.setAttribute( 'alt', 'a glimpse of what awaits you' );
  preview.setAttribute( 'id', 'preview' );
  slideshow.appendChild( preview );
  insertAfter( slideshow, intro );
  const links = document.getElementsByTagName( 'a' );
  for ( let i = 0; i < links.length; i += 1 ) {
    links[i].onmouseover = function onmouseover() {
      const destination = this.getAttribute( 'href' );
      if ( destination.indexOf( 'about' ) !== -1 ) {
        moveElement( 'preview', -150, 0, 5 );
      }
      if ( destination.indexOf( 'photos' ) !== -1 ) {
        moveElement( 'preview', -300, 0, 5 );
      }
      if ( destination.indexOf( 'live' ) !== -1 ) {
        moveElement( 'preview', -450, 0, 5 );
      }
      if ( destination.indexOf( 'contact' ) !== -1 ) {
        moveElement( 'preview', -600, 0, 5 );
      }
    };
  }
  return true;
}

addLoadEvent( prepareSlideshow );
