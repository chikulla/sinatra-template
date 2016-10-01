window.onload = function() {
  var timecontent = document.getElementById('time');
  var platformcontent = document.getElementById('platform');
  
  var timereq = new XMLHttpRequest();
  timereq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      timecontent.innerHTML = 'server time ' + this.responseText;
    }
  };
  timereq.open('GET', '/servertime', true);
  timereq.send();

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      platformcontent.innerHTML = 'platfrom ' + this.responseText;
    }
  };
  xhr.open('GET', '/platform', true);
  xhr.send();
};
