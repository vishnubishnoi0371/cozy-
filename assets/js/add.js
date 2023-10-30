
function opentabs(Tabid) {
    const tabcontent = document.querySelectorAll(".tab_Label")
    tabcontent.forEach((Tabs) => {
        Tabs.classList.add("d-none")
        Tabs.classList.remove("d-block")
    });
    const tabshow = document.getElementById(Tabid);
    tabshow.classList.add("d-block");
    tabshow.classList.remove("d-none");
}

function closetab(Tabid) {
    const tabcontent = document.querySelectorAll(".tab_Label");
    tabcontent.forEach((Tabs) => {
        Tabs.classList.add("d-block");
        Tabs.classList.remove("d-none");
    });
    const tabshow = document.getElementById(Tabid);
    tabshow.classList.add("d-none");
    tabshow.classList.remove("d-block");
}


