document.onreadystatechange = function () {
  if(document.readyState === 'complete'){
    // Set the date we're counting down to
    var countDownDate = new Date("May 4, 2018 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("count").innerHTML = days + "d " + hours + "h "
      + minutes + "m ";

      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("count").innerHTML = "Married";
      }
    }, 1000);

    let mainViews = document.getElementsByClassName('mainView')

    function setMainView() {
      for (let index = 0; index < mainViews.length; index++) {
        const element = mainViews[index];
        if(element.classList.contains('theActive')){
          element.classList.remove('theActive');
          element.classList.remove('d-block')
          element.classList.add('d-none');
        }
      }
    }
    //setting flashes
    let flash1 = document.getElementById('theFirst'),
        flash2 = document.getElementById('theSecond'),
        flash3 = document.getElementById('theThird');

    let flashLoop = function () {
      setTimeout(() => {
        flash3.classList.remove('d-block');    
        flash1.classList.add('d-block');
        }, 3000);
        setTimeout(() => {
          flash1.classList.remove('d-block');
          flash2.classList.add('d-block');
        }, 7000);
        setTimeout(() => {
          flash2.classList.remove('d-block');
          flash3.classList.add('d-block');
        }, 14000);

    setTimeout(flashLoop, 14500);        
    }

    setTimeout(flashLoop, 500)
    // setting up the menu list
    let theBody = document.getElementById('jBD');
    let mnOver = document.getElementById('bgover');
    let allMenu = document.getElementsByTagName('li');
    function checkMenu() {
      for (let index = 0; index < allMenu.length; index++) {
        const element = allMenu[index];
        if (element.classList.contains('theActive')) {
          element.classList.remove('theActive');
          element.classList.remove('text-black-50');
          element.classList.remove('font-weight-bold');
          }
      }
    }
    for (let index = 0; index < allMenu.length; index++) {
      const element = allMenu[index];
      element.addEventListener('mouseover', function (event) {
        if(!this.classList.contains('theActive')){
        this.classList.add('text-black-50');
        this.classList.add('font-weight-bold');
        }
      });

      element.addEventListener('mouseleave', function (event) {
        if(!this.classList.contains('theActive')){
        this.classList.remove('text-black-50');
        this.classList.remove('font-weight-bold');
        }
      });
    }

    let homeCL = document.getElementById('home')
    homeCL.addEventListener('click', function (event) {
      if (!this.classList.contains('theActive')) {
        mnOver.className = "bgover h-100 w-100";
        theBody.className = 'mainBD';
        checkMenu()
        this.classList.add('theActive');
        this.classList.add('text-black-50');
        this.classList.add('font-weight-bold');

        setMainView()
        let theHome = document.getElementById('theMain');
        theHome.classList.add('theActive');
        theHome.classList.remove('d-none');
        theHome.classList.add('d-block');
        if (document.getElementById('sos').classList.contains('inMobile')) {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById('sos').classList.remove('d-flex')
          document.getElementById('sos').classList.add('d-none')
          document.getElementById('openbtn').style.display = 'block'
        }
      }
    })

    let couples = document.getElementById('couples');
    couples.addEventListener('click', function (event) {
      if (!this.classList.contains('theActive')) {
        mnOver.className = "aBgO h-100 w-100";
        theBody.className = 'secBD';
        checkMenu()
        this.classList.add('theActive');
        this.classList.add('text-black-50');
        this.classList.add('font-weight-bold');
  
        setMainView()
        let couplesPG = document.getElementById('theCouples');
        couplesPG.classList.add('theActive');
        couplesPG.classList.remove('d-none');
        couplesPG.classList.add('d-block');

        if (document.getElementById('sos').classList.contains('inMobile')) {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById('sos').classList.remove('d-flex')
          document.getElementById('sos').classList.add('d-none')
          document.getElementById('openbtn').style.display = 'block'
        }
      }
    });

    let clGroom = document.getElementById('groom');
    clGroom.addEventListener('click', function (event) {
      if (!this.classList.contains('theActive')) {
        mnOver.className = "nBgO h-100 w-100";
        theBody.className = 'gBD';
        checkMenu()
        this.classList.add('theActive');
        this.classList.add('text-black-50');
        this.classList.add('font-weight-bold');
  
        setMainView()
        let groomPG = document.getElementById('theGroom');
        groomPG.classList.add('theActive');
        groomPG.classList.remove('d-none');
        groomPG.classList.add('d-block');
        if (document.getElementById('sos').classList.contains('inMobile')) {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById('sos').classList.remove('d-flex')
          document.getElementById('sos').classList.add('d-none')
          document.getElementById('openbtn').style.display = 'block'
        }
      }
    });

    let clBride = document.getElementById('bride');
    clBride.addEventListener('click', function (event) {
      if (!this.classList.contains('theActive')) {
        mnOver.className = "nBgO h-100 w-100";
        theBody.className = 'bBD';
        checkMenu()
        this.classList.add('theActive');
        this.classList.add('text-black-50');
        this.classList.add('font-weight-bold');
  
        setMainView()
        let bridePG = document.getElementById('theBride');
        bridePG.classList.add('theActive');
        bridePG.classList.remove('d-none');
        bridePG.classList.add('d-block');
        if (document.getElementById('sos').classList.contains('inMobile')) {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById('sos').classList.remove('d-flex')
          document.getElementById('sos').classList.add('d-none')
          document.getElementById('openbtn').style.display = 'block'
        }
      }
    });

    let clWedding = document.getElementById('wedding');
    clWedding.addEventListener('click', function (event) {
      if (!this.classList.contains('theActive')) {
        mnOver.className = "nBgO h-100 w-100";
        theBody.className = 'wBD';
        checkMenu()
        this.classList.add('theActive');
        this.classList.add('text-black-50');
        this.classList.add('font-weight-bold');
  
        setMainView()
        let weddingPG = document.getElementById('theWedding');
        weddingPG.classList.add('theActive');
        weddingPG.classList.remove('d-none');
        weddingPG.classList.add('d-block');
        if (document.getElementById('sos').classList.contains('inMobile')) {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById('sos').classList.remove('d-flex')
          document.getElementById('sos').classList.add('d-none')
          document.getElementById('openbtn').style.display = 'block'
        }
      }
    });

    let clGuest = document.getElementById('guest');
    clGuest.addEventListener('click', function (event) {
      if (!this.classList.contains('theActive')) {
        mnOver.className = "nBgO h-100 w-100";
        theBody.className = 'wBD';
        checkMenu()
        this.classList.add('theActive');
        this.classList.add('text-black-50');
        this.classList.add('font-weight-bold');
  
        setMainView()
        let guestPG = document.getElementById('theGuest');
        guestPG.classList.add('theActive');
        guestPG.classList.remove('d-none');
        guestPG.classList.add('d-block');
        if (document.getElementById('sos').classList.contains('inMobile')) {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById('sos').classList.remove('d-flex')
          document.getElementById('sos').classList.add('d-none')
          document.getElementById('openbtn').style.display = 'block'
        }
      }
    });

    // when click the couples tabbed
    let fromTab = document.getElementById('fromTab');
    fromTab.addEventListener('click', function (event) {
      if (!this.classList.contains('theActive')) {
        mnOver.className = "nBgO h-100 w-100";
        theBody.className = 'wBD';
        checkMenu()
        this.classList.add('theActive');
        this.classList.add('text-black-50');
        this.classList.add('font-weight-bold');
  
        setMainView()
        let guestPG = document.getElementById('theGuest');
        guestPG.classList.add('theActive');
        guestPG.classList.remove('d-none');
        guestPG.classList.add('d-block');
        if (document.getElementById('sos').classList.contains('inMobile')) {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById('sos').classList.remove('d-flex')
          document.getElementById('sos').classList.add('d-none')
          document.getElementById('openbtn').style.display = 'block'
        }
      }
    });

    let formData = {};
    let fullName = document.getElementById('fullname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let friendOf = document.getElementsByName('friendOf');
    let message = document.getElementById('message');
    let formThings = document.getElementById('theForm')

    for (let index = 0; index < friendOf.length; index++) {
      const element = friendOf[index];
      element.addEventListener('click', function () {
        formData.friendOf = this.value;
      })
    }
    

    formThings.addEventListener('submit', function (event) {
      event.preventDefault()
      let formSpace = document.getElementById('theForm')
      formSpace.innerHTML = "<p class='text-center'>We are sending your message to the Couples</p>";
      formData.name = fullName.value
      formData.email = email.value
      formData.phone = phone.value
      formData.message = message.value
      postAjax('https://wedapi.adp.ng/postMessages', formData, function(data){
          formSpace.innerHTML = '<p class="text-center">Thank You, May be we should tell more people.</p> <p class="w-100 text-center"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.hassanandsaratu.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><i class="fab fa-facebook-f fa-lg m-3"></i></a>&nbsp;&nbsp; <a href="https://twitter.com/intent/tweet?text=Say%20Something&url=https%3A%2F%2Fwww.hassanandsaratu.com%2F&hashtag=love,developer,wedding&via=inidaname"><i class="fab fa-twitter fa-lg m-3"></i></a></p>';

          if (formData.email) {
            var mailData = {
              email: formData.email,
              fullname: formData.fullname
            }
            postAjax('https://wedapi.adp.ng/sendMail', mailData, function(data){
              console.log(data)
            })
          }

          if (formData.phone) {
            var aname = formData.name;
            aname = aname.split(' ')[0]
            var owneremail = 'saniyhassan@gmail.com';
            var subacct = 'THEBRIDGE';
            var subacctpwd = 'thebridges';
            var senderNum = 'Has And Sar';
            var SMSmes = 'Thank You '+aname+' \n It means so much to us that you are  part of this special day in our lives, we will forever cherish this. \n Hassan and Saratu';
            getAjax('http://www.smslive247.com/http/index.aspx?cmd=sendquickmsg&owneremail='+owneremail+'&subacct='+subacct+'&subacctpwd='+subacctpwd+'&message='+SMSmes+'&sender='+senderNum+'&sendto='+formData.phone+'&msgtype=0', function(data) {
              console.log(data);
            });

          }
      });
    })

    //sending http request
    function postAjax(url, data, success) {
      var params = typeof data == 'string' ? data : Object.keys(data).map(
              function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
          ).join('&');
  
      var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      xhr.open('POST', url);
      xhr.onreadystatechange = function() {
          if (xhr.readyState>3 && xhr.status==201) { success(xhr.responseText); }
      };
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(params);
      return xhr;
  }
  

  function getAjax(url, success) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) success(xhr.responseText);
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
  }

// example request
// getAjax('http://foo.bar/?p1=1&p2=Hello+World', function(data){ console.log(data); });
  // example request
  // postAjax('http://localhost:8888/postMessages', 'p1=1&p2=Hello+World', function(data){ console.log(data); });
  
  // example request with data object
  // postAjax('http://localhost:8888/postMessages', { name: 'Hassan Sani', email: 'saniyhassan@gmail.com', }, function(data){ console.log(data); });
  }
}