const produits = [
  { id: 1, nom: 'clavier', prix: 45, stock: 4 },
  { id: 2, nom: 'souris', prix: 20, stock: 0 },
  { id: 3, nom: 'écran', prix: 180, stock: 2 },
]

function produitsDisponibles(produits) {
  return produits.filter(produit => produit.stock > 0)
}

function nomsDesProduits(produits) {
  return produits.map(produit => produit.nom)
}

function chercherProduit(produits, recherche) {
  const terme = recherche.trim().toLowerCase()
  return produits.filter(produit => produit.nom.toLowerCase().includes(terme))
}

function trouverProduit(produits, id) {
  return produits.find(produit => produit.id === id)
}

function afficherProduits(produits) {
  produits.forEach(produit => {
    console.log(`${produit.nom} : ${produit.prix} € (stock : ${produit.stock})`)
  })
}

function produitDisponible(produitId, quantite) {
  const produit = trouverProduit(produits, produitId)
  return produit !== undefined && produit.stock >= quantite
}

module.exports = {
  afficherProduits,
  chercherProduit,
  nomsDesProduits,
  produitDisponible,
  produits,
  produitsDisponibles,
  trouverProduit,
}