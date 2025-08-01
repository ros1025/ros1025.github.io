function includeHTML() {
    var z, i, elmnt, file, xhttp;

    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");

    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain attribute:*/
        file = elmnt.getAttribute("w3-include-html");

        if (file) {

            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}

                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }     

            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};

function scrollNav()
{
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {

        var currentScrollPos = window.pageYOffset;

        navbar = document.getElementById("navbar-item");

        if (prevScrollpos > currentScrollPos && navbar.style.top != "0") {
            navbar.style.top = "0";
        } 
        else if (prevScrollpos < currentScrollPos && navbar.style.top != "-80px") {
            navbar.style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    } 
}