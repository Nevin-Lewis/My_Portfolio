function myFunction() {
    document.getElementsByTagName('HTML')[0].style.backgroundImage = "url('./Assets/Background.jpg')";
    document.getElementsByTagName('HTML')[0].style.backgroundSize = 'cover';
    document.getElementsByTagName('HTML')[0].style.opacity = "100%";
    document.getElementsByTagName('FOOTER')[0].style.backgroundColor = "transparent";
    document.getElementsByTagName('FOOTER')[0].style.border= "none";
    document.getElementsByTagName('FOOTER')[0].style.opacity = "100%";
    for (var i = 0; i <2; i ++) 
    document.getElementsByTagName('IMG')[0].style.opacity = "0%";
    for (var i =0; i<3; i++)
    document.getElementsByTagName('H1')[i].style.color = "transparent";
    }