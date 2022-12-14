let dsClass = ".ds-aside";

let dsSidebarContent = [
    `
    <h2>Vil du gerne vide mere?</h2>
        <ul>
            <li>
                <a href="https://www.dinregnskov.dk/ressourceforbrug-og-miljo" target="_blank">Læs om ressourceforbrug og miljø</a>
            </li>
            <p>
                Her kan du læse om danskernes forbrug og miljøpåvirkning, og hvordan du selv kan lave små ændringer i din hverdag til gavn for regnskoven.
            </p>
            <li>
                <a href="https://da.wikipedia.org/wiki/Regnskov" target="_blank">Wikipedia om regnskov</a>
            </li>
            <p>
                Læs mere om regnskoven og den facinerende dyre- og planteliv. 
            </p>
            <li>
                <a href="https://www.regnskoven.dk/" target="_blank">Randers Regnskov</a>
            </li>
            <p>
                Vil du gerne have en fornemmelse for, hvordan der er at være i en regnskov? Besøg Randers Regnskov!
            </p>
        </ul>
    `,

    `
    
    `,
];



let dsParent = document.querySelector(dsClass);

if(dsParent == null){
    alert("sidebar eksisterer ikke");
}
else{
    dsGenerateSidebar();
}

function dsGenerateSidebar(){
    
    let dsHTML = "<section>";
        dsHTML += dsSidebarContent[0];
        dsHTML += "</section>";

    dsParent.innerHTML = dsHTML;

}