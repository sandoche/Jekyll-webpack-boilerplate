import './style.css';
import Icon from './kb-icon.png';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = 'Hello world';

  // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
  }

  document.body.appendChild(component());
