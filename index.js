var bolide = {
bMarque: "Rocket",
bModele: "Golf",
bMillesime: 1991,
bCouleur: "purple",
bCarrosserie: "Crewdragon",
bPrix: 4500
}

document.getElementById("prixBase").innerHTML = bolide.bPrix;
document.getElementById("millesime").innerHTML = bolide.bMillesime;
document.getElementById("forme").style.backgroundColor = bolide.bCouleur;
document.getElementById("forme").innerHTML = bolide.bMarque + " " + bolide.bCarrosserie;
