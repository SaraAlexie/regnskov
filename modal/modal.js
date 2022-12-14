function modalLib() {

    let overlay = document.createElement("DIV");
    overlay.setAttribute("class", "overlay");
    let modalWrap = document.createElement("DIV");
    modalWrap.setAttribute("class", "modal-wrap");
    let modalContent = document.createElement("DIV");
    modalContent.setAttribute("class", "modal-content");
    let closeBtn = document.createElement("BUTTON");
    closeBtn.setAttribute("class", "close-overlay");

    document.body.appendChild(overlay);
    overlay.appendChild(modalWrap);
    modalWrap.appendChild(modalContent);
    modalWrap.appendChild(closeBtn);


    /*Globale variabler*/
    /*Alle sammen DOM elementer */
    let popupLinks = document.querySelectorAll(".popup"); //liste af elementer (de links der har classname popup)
    let hiddenContent = document.querySelector(".hidden-content"); // enkelt element (beskrivelser)


    /*Vi skjuler beskrivelserne men brugere uden javascript kan navigere til dem via link funktionaliteten */
    hiddenContent.style.display = "none";

    /*Vi looper gennem alle links og indsætter klik events */
    popupLinks.forEach(function (element) {

        element.addEventListener("click", function (event) {
            /*Væk med den default linkopførsel ved klik */
            event.preventDefault();
            /*Vi opsamler href attributten fra linket */
            let linkDestination = this.getAttribute("href");
            /*Vi bruger den opsamlede attribut som et argument i en queryselector, 
            hvilket giver os det element med det rigtige id og vi skriver innerHTML 
            fordi vi kun vil have indholdet*/
            let linkDestinationContent = document.querySelector(linkDestination).innerHTML;

            /*Til sidst sætter vi indholdet ind i popup'en og skifter til en synlig klasse */
            modalContent.innerHTML = "";
            modalContent.innerHTML = linkDestinationContent;
            overlay.classList.add("active");
        });

    })

    closeBtn.addEventListener("click", function () {
        /*Når der trykkes på luk-knappen fjerner vi html indholdet i popup'en og sætter overlayet til en skjult css klasse */

        overlay.classList.remove("active");
    });

}

modalLib();