function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello,mapboxs  !';
  
    return element;
  }
  
  document.body.appendChild(component());