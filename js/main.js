
function openGmail() {
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
window.location.href = "mailto:youremail@gmail.com";
 } 
else {
// If on a desktop, open the Gmail website
 window.open("https://mail.google.com/mail/?view=cm&source=mailto&to=jevta@mail.com");
 }
}
