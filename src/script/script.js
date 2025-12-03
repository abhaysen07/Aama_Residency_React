// Live 24-hour date/time for #datetime
(function () {
  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function updateTime() {
    var el = document.getElementById('datetime');
    if (!el) return; // element not present
    var now = new Date();

    var day = pad(now.getDate());
    var monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var month = monthNames[now.getMonth()];
    var year = now.getFullYear();

    var hours = pad(now.getHours());   // 24-hour format
    var minutes = pad(now.getMinutes());
    var seconds = pad(now.getSeconds());

    var text = day + ' ' + month + ' ' + year + ', ' + hours + ':' + minutes + ':' + seconds;
    el.textContent = text;
  }

  // initialize and start ticking every second
  document.addEventListener('DOMContentLoaded', function () {
    updateTime();
    setInterval(updateTime, 1000);
  });
})();

