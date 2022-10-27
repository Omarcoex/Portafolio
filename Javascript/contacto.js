function validate() {
  
    var user = document.getElementById("c").value;
    var user2 = document.getElementById("c");
    var re = /^[7-9][0-9]{9}$/;
    if (re.test(user)) {
        alert("done");
        return true;
    }
    else {

        user2.style.border = "red solid 3px";
        return false;
    }
}
// https://github.com/falconmasters/formulario-css-grid/blob/master/index.html