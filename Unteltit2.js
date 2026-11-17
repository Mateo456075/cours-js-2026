const produits = [
  { id: 1, nom: 'clavier', prix: 45, stock: 4 },
  { id: 2, nom: 'souris', prix: 20, stock: 0 },
  { id: 3, nom: 'écran', prix: 180, stock: 2 }
]
function ProduitDisponible(produitId, quantite) {
  const produit = produits.find(p => p.id === produitId)
  if (!produit) {
    return false
  }
  return produit.stock >= quantite
}
