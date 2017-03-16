function showPic( whichPic ) {
  let titleText;
  if ( !document.getElementById( 'placeholder' ) ) return true;
  const source = whichPic.getAttribute( 'href' );
  const placeholder = document.getElementById( 'placeholder' );
  placeholder.setAttribute( 'src', source );
  if ( !document.getElementById( 'description' ) ) return false;
  if ( whichPic.getAttribute( 'title' ) ) {
    titleText = whichPic.getAttribute( 'title' );
  } else {
    titleText = '';
  }
  const description = document.getElementById( 'description' );
  if ( description.firstChild.nodeType === 3 ) {
    description.firstChild.nodeValue = titleText;
  }
  return false;
}

function preparePlaceholder() {
  if ( !document.createElement ) return false;
  if ( !document.createTextNode ) return false;
  if ( !document.getElementById ) return false;
  if ( !document.querySelector( '.image-gallery' ) ) return false;
  const placeholder = document.createElement( 'img' );
  placeholder.setAttribute( 'id', 'placeholder' );
  placeholder.setAttribute( 'src', 'img/placeholder.gif' );
  placeholder.setAttribute( 'alt', 'my image gallery' );
  const description = document.createElement( 'p' );
  description.setAttribute( 'id', 'description' );
  const desctext = document.createTextNode( 'Choose an image' );
  description.appendChild( desctext );
  const gallery = document.querySelector( '.image-gallery' );
  insertAfter( description, gallery );
  insertAfter( placeholder, description );
  return true;
}

function prepareGallery() {
  if ( !document.getElementsByTagName ) return false;
  if ( !document.getElementById ) return false;
  if ( !document.querySelector( '.image-gallery' ) ) return false;
  const gallery = document.querySelector( '.image-gallery' );
  const links = gallery.getElementsByTagName( 'a' );
  for ( let i = 0; i < links.length; i += 1 ) {
    links[i].addEventListener( 'click', showPic( this ) );
  }
  return true;
}

addLoadEvent( preparePlaceholder );
addLoadEvent( prepareGallery );
