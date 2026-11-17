
const produits = [
            { id: 101, nom: "Ordinateur Portable", prix: 800, quantity: 10 },
            { id: 102, nom: "Souris Sans Fil", prix: 25, quantity: 20 },
            { id: 103, nom: "Écran 4K", prix: 350, quantity: 5 },
            { id: 104, nom: "Clavier Mécanique", prix: 70, quantity: 15 }
        ];
        const conteneur = document.getElementById("zone-selection");
        const selectElement = document.createElement("select");
        const tva = 0.2;
        selectElement.id = "menu-produits";
        produits.forEach(produit => {
            const optionElement = document.createElement("option");
            optionElement.value = produit.id;
            optionElement.textContent = `${produit.nom} - ${produit.prix}€ (Stock: ${produit.quantity})`;
            selectElement.appendChild(optionElement);
        });
        conteneur.appendChild(selectElement);

        
        const inputQuantite = document.getElementById("input-quantite");
        const btnAjouter = document.getElementById("btn-ajouter");
        if (btnAjouter) {
            btnAjouter.addEventListener("click", () => {
                const produitSelectionneId = parseInt(selectElement.value);
                const produitSelectionne = produits.find(produit => produit.id === produitSelectionneId);
                const quantite = parseInt(inputQuantite.value);
                if (produitSelectionne && quantite > 0 && quantite <= produitSelectionne.quantity) {
                    const prixTotal = produitSelectionne.prix * quantite;
                    const prixTVA = prixTotal * (1+tva);
                    alert(`Le prix total pour ${quantite} ${produitSelectionne.nom}(s) est de ${prixTotal}€ (TVA: ${prixTVA}€).`);
                } else {
                    alert("Veuillez sélectionner un produit et entrer une quantité valide.");
                }
            });
        }