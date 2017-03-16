function focusLabels() {
  if ( !document.getElementsByTagName ) return false;
  const labels = document.getElementsByTagName( 'label' );
  for ( let i = 0; i < labels.length; i += 1 ) {
    if ( !labels[i].getAttribute( 'for' ) ) { continue; }
    labels[i].onclick = function onclick() {
      const id = this.getAttribute( 'for' );
      if ( !document.getElementById( id ) ) return false;
      const element = document.getElementById( id );
      element.focus();
      return true;
    };
  }
  return true;
}

function resetFields( whichform ) {
  for ( let i = 0; i < whichform.elements.length; i += 1 ) {
    const element = whichform.elements[i];
    if ( element.type === 'submit' ) { continue; }
    if ( !element.defaultValue ) { continue; }
    element.onfocus = function onfocus() {
      if ( this.value === this.defaultValue ) {
        this.value = '';
      }
    };
    element.onblur = function onblur() {
      if ( this.value === '' ) {
        this.value = this.defaultValue;
      }
    };
  }
}
function isEmail( field ) {
  if ( field.value.indexOf( '@' ) === -1 || field.value.indexOf( '.' ) === -1 ) {
    return false;
  }
  return true;
}

function isFilled( field ) {
  if ( field.value.length < 1 || field.value === field.defaultValue ) {
    return false;
  }
  return true;
}

function validateForm( whichform ) {
  for ( let i = 0; i < whichform.elements.length; i += 1 ) {
    const element = whichform.elements[i];
    if ( element.className.indexOf( 'required' ) !== -1 ) {
      if ( !isFilled( element ) ) {
        alert( `Please fill in the ${element.name} field.` );
        return false;
      }
    }
    if ( element.className.indexOf( 'email' ) !== -1 ) {
      if ( !isEmail( element ) ) {
        alert( `The ${element.name} field must be a valid email address.` );
        return false;
      }
    }
  }
  return true;
}


function prepareForms() {
  for ( let i = 0; i < document.forms.length; i += 1 ) {
    const thisform = document.forms[i];
    resetFields( thisform );
    thisform.onsubmit = function onsubmit() {
      return validateForm( this );
    };
  }
}

addLoadEvent( focusLabels );
addLoadEvent( prepareForms );
