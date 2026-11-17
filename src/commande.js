const SEUIL_LIVRAISON_GRATUITE = 50

function calculerTotalTTC(prixHT, quantite, tauxTVA, reduction = 0) {
  const totalHT = prixHT * quantite
  const totalAvecReduction = totalHT * (1 - reduction)
  return Number((totalAvecReduction * (1 + tauxTVA)).toFixed(2))
}

function livraisonGratuite(totalTTC) {
  return totalTTC >= SEUIL_LIVRAISON_GRATUITE
}

const commandes = [
  { article: 'clavier', prixHT: 30, quantite: 3, tauxTVA: 0.2, reduction: 0.1 },
  { article: 'souris', prixHT: 20, quantite: 1, tauxTVA: 0.2, reduction: 0 },
  { article: 'écran', prixHT: 180, quantite: 2, tauxTVA: 0.2, reduction: 0.05 },
]

if (require.main === module) {
  commandes.forEach(({ article, prixHT, quantite, tauxTVA, reduction }) => {
    const totalTTC = calculerTotalTTC(prixHT, quantite, tauxTVA, reduction)
    console.log(`${quantite} ${article}(s) : ${totalTTC.toFixed(2)} € ttc`)
    console.log(`Livraison gratuite : ${livraisonGratuite(totalTTC)}`)
  })
}

module.exports = { calculerTotalTTC, livraisonGratuite }