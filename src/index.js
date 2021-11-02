function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello,mapbox  !';
  
    return element;
  }
  
  document.body.appendChild(component());