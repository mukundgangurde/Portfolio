var tablinks = document.getElementById("tab-links");
var tabcontents = document.getElementById("tab-contents");

function opentab(tabname) {
    for (tablink in tablinks) {
        tablinks.classList.remove("active-link");
    }
    for (tabcontent in tabcontents) {
        tabcontents.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}