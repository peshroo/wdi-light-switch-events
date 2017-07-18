document.addEventListener('DOMContentLoaded', function(event){
  var lighSwitch = document.querySelector('button');

  lightSwitch.addEventListener('click', function(event){
    lightSwitch.className = 'Switch Off';

    var body = document.querySelector('body');
    body.className = 'dark';

    var status = document.querySelector('.status');
    status.innerText = 'Hey, who turned off the lights?!?';
  })
});
