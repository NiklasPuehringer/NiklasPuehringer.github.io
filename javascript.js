let vmain = '<div class="top"><div class="nav"><div onclick="main()"><img src="icons/home.png" alt="Home"></div><div onclick="vid()"><img src="icons/vid.png" alt="Video"></div><div onclick="txt()"><img src="icons/txt.png" alt="txt"></div><div onclick="img()"><img src="icons/img.png" alt="img"></div><div onclick="audio()"><img src="icons/audio.png" alt="audio"></div></div></div><div class="inhalt"><h1>This is NEFFEX</h1><br><br><br><br><h4>LA/CA</h4><h4>est. 2014</h4><br><br><br><br><h2>Be a Legend not a Myth</h2></div>'; 
let vaudio = '<div class="top"><div class="nav"><div onclick="main()"><img src="icons/home.png" alt="Home"></div><div onclick="vid()"><img src="icons/vid.png" alt="Video"></div><div onclick="txt()"><img src="icons/txt.png" alt="txt"></div><div onclick="img()"><img src="icons/img.png" alt="img"></div><div onclick="audio()"><img src="icons/audio.png" alt="audio"></div></div><div class="zurueck" onclick="main()"><img src="icons/back.png" alt="zurück"></div></div><div class="inhalt"><h1>NEFFEX - Unstoppable</h1><div class="player"><audio  controls src="icons/NEFFEX%20-%20Unstoppable%20%C3%B0%C5%B8%E2%80%98%C5%A0%20(Copyright%20Free)%20Kopie.mp3" type="audio/mp3" ></div></div>';
let vimg = '<div class="top"><div class="nav"><div onclick="main()"><img src="icons/home.png" alt="Home"></div><div onclick="vid()"><img src="icons/vid.png" alt="Video"></div><div onclick="txt()"><img src="icons/txt.png" alt="txt"></div><div onclick="img()"><img src="icons/img.png" alt="img"></div><div onclick="audio()"><img src="icons/audio.png" alt="audio"></div></div><div class="zurueck" onclick="main()"><img src="icons/back.png" alt="zurück"></div></div><div  class="inhalt"><h1>Bryce Savage - NEFFEX - Cam Wales</h1><img id="image" src="icons/neffex.jpg"></img></div>';
let vtxt = '<div class="top"><div class="nav"><div onclick="main()"><img src="icons/home.png" alt="Home"></div><div onclick="vid()"><img src="icons/vid.png" alt="Video"></div><div onclick="txt()"><img src="icons/txt.png" alt="txt"></div><div onclick="img()"><img src="icons/img.png" alt="img"></div><div onclick="audio()"><img src="icons/audio.png" alt="audio"></div></div><div class="zurueck" onclick="main()"><img src="icons/back.png" alt="zurück"></div></div><div class="inhalt"><h1>NEFFEX</h1><h4>NEFFEX ist ein US-amerikanisches Musikerduo, das hauptsächlich auf YouTube Musikvideos</h4><h4>unter einer Lizenz veröffentlicht, die eine Weiterbenutzung erlaubt.</h4><h4>Das Musikgenre lässt sich der Popmusik/Rockmusik zuordnen.</h4><h4>Der Textinhalt ihrer Songs reicht von schwierigen Lebenssituationen bis Sehnsüchte.</h4><h4>Die südkalifornische Band setzt sich aus dem Sänger Bryce Savage</h4><h4>und dem Gitarristen Cameron Wales zusammen.</h4><h4>Das Duo finanziert sich unter anderem durch Kleidung, das ihr Logo trägt.</h4><h4> Dies sind unter anderem Hoodies, Mützen oder auch T-Shirts in ikonischem Schwarz-weiß</h4></div>';
let vvid = '<div class="top"><div class="nav"><div onclick="main()"><img src="icons/home.png" alt="Home"></div><div onclick="vid()"><img src="icons/vid.png" alt="Video"></div><div onclick="txt()"><img src="icons/txt.png" alt="txt"></div><div onclick="img()"><img src="icons/img.png" alt="img"></div><div onclick="audio()"><img src="icons/audio.png" alt="audio"></div></div><div class="zurueck" onclick="main()"><img src="icons/back.png" alt="zurück"></div></div><div class="inhalt"><h1>NEFFEX - I wanna play a Game</h1><video id="neffexvid" src="icons/neffex.mp4"  controls>Ihr Browser kann dieses Video nicht wiedergeben.<br/>Dies ist das Musikvideo des Songs "I wanna play a Game" von NEFFEX. Sie können unter <a href="https://www.youtube.com/watch?v=6jBhSCM64gI&ab_channel=NEFFEX">https://www.youtube.com/watch?v=6jBhSCM64gI&ab_channel=NEFFEX</a> das Video abrufen.</video></div>';

function main() {
    document.getElementById('main').innerHTML = vmain;
}
function audio() {
    document.getElementById('main').innerHTML = vaudio;
}
function img() {
    document.getElementById('main').innerHTML = vimg;
}
function txt() {
    document.getElementById('main').innerHTML = vtxt;
}
function vid() {
    document.getElementById('main').innerHTML = vvid;
}