function switchon() {
    document.getElementById('bulbImage').src = 'https://img.freepik.com/premium-photo/yellow-light-bulb-with-black-background_945053-120.jpg';
    document.getElementById('bulbImage').style.transform = 'rotate(0deg)';
    document.getElementById('catImage').src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png'; 
    document.getElementById('catImage').style.height = '49vh';
    document.getElementById('catImage').style.width = '45vh';
    document.getElementById('catImage').style.marginLeft = "40px";
    document.getElementById('bulbImage').style.height = '18vh';
    document.getElementById('bulbImage').style.width = '27vh';
    document.getElementById('switchstatus').textContent = 'Switched On';
    document.getElementById('bulbImage').style.marginLeft = "150px";
}

function switchoff() {
    document.getElementById('bulbImage').src = 'https://st3.depositphotos.com/1000198/12871/i/450/depositphotos_128712956-stock-photo-lamp-light-bulb-3d-illustration.jpg'; 
    document.getElementById('bulbImage').style.transform = 'rotate(0deg)';
    document.getElementById('catImage').src = 'https://cdn.discordapp.com/attachments/1184362525639327754/1259053469646721136/Black_Aesthetic_Cat_Phone_Wallpaper.png?ex=66a354eb&is=66a2036b&hm=66141f9756f9fa9e737704d90f143c6eca23dd99f825f623e09264d476983a4b&'; 
    document.getElementById('catImage').style.height = '48vh';
    document.getElementById('catImage').style.width = '45vh';
    document.getElementById('catImage').style.marginLeft = "40px";
    document.getElementById('bulbImage').style.height = '18vh';
    document.getElementById('bulbImage').style.width = '21vh';
    document.getElementById('switchstatus').textContent = 'Switched Off';
    document.getElementById('bulbImage').style.marginLeft = "180px";
}


