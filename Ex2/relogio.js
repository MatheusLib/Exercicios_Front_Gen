function attachEventsListeners(){
    document.getElementById("daysBtn").addEventListener("click", convertFromDays);
    document.getElementById("hoursBtn").addEventListener("click", convertFromHours);
    document.getElementById("minutesBtn").addEventListener("click", convertFromMinutes);
    document.getElementById("secondsBtn").addEventListener("click", convertFromSeconds);
    
    function convertFromDays(){
       const target = document.getElementsByTagName("div")[0];
       const input = target.getElementsByTagName("input")[0].value;

       let hours = Number(input) * 24;
       document.getElementsByTagName("div")[1].getElementsByTagName("input")[0].value = hours;
       
       let minutes = hours * 60;
       document.getElementsByTagName("div")[2].getElementsByTagName("input")[0].value = minutes;

       let seconds = minutes * 60;
       document.getElementsByTagName("div")[3].getElementsByTagName("input")[0].value = seconds;
    }

    function convertFromHours(){
      const target = document.getElementsByTagName("div")[1];
      const input = target.getElementsByTagName("input")[0].value;

      let days = Number(input) / 24;
      document.getElementsByTagName("div")[0].getElementsByTagName("input")[0].value = days;

      let minutes = Number(input) * 60;
      document.getElementsByTagName("div")[2].getElementsByTagName("input")[0].value = minutes;

      let seconds = minutes * 60;
      document.getElementsByTagName("div")[3].getElementsByTagName("input")[0].value = seconds;
    }

    function convertFromMinutes(){
      const target = document.getElementsByTagName("div")[2];
      const input = target.getElementsByTagName("input")[0].value;

      let seconds = Number(input) * 60;
      document.getElementsByTagName("div")[3].getElementsByTagName("input")[0].value = seconds;

      let hours = Number(input) / 60;
      document.getElementsByTagName("div")[1].getElementsByTagName("input")[0].value = hours;

      let days = hours / 24;
      document.getElementsByTagName("div")[0].getElementsByTagName("input")[0].value = days;
    }

    function convertFromSeconds(){
      const target = document.getElementsByTagName("div")[3];
      const input = target.getElementsByTagName("input")[0].value;

      let minutes = Number(input) / 60;
      document.getElementsByTagName("div")[2].getElementsByTagName("input")[0].value = minutes;

      let hours = minutes / 60;
      document.getElementsByTagName("div")[1].getElementsByTagName("input")[0].value = hours;

      let days = hours / 24;
      document.getElementsByTagName("div")[0].getElementsByTagName("input")[0].value = days;
    }
  }