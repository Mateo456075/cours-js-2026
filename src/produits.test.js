const {
  chercherProduit,
  nomsDesProduits,
  produitDisponible,
  produits,
  produitsDisponibles,
  trouverProduit,
} = require('./produits')

test('ne garde que les produits en stock', () => {
  expect(produitsDisponibles(produits).map(produit => produit.nom)).toEqual([
    'clavier',
    'écran',
  ])
})

test('retourne uniquement les noms', () => {
  expect(nomsDesProduits(produits)).toEqual(['clavier', 'souris', 'écran'])
})

test('recherche un nom sans tenir compte des majuscules', () => {
  expect(chercherProduit(produits, 'CLAV').map(produit => produit.nom)).toEqual([
    'clavier',
  ])
})

test('retourne le produit correspondant à son identifiant', () => {
  expect(trouverProduit(produits, 2)).toEqual(produits[1])
})

test('retourne undefined si le produit est introuvable', () => {
  expect(trouverProduit(produits, 99)).toBeUndefined()
})

test('vérifie le stock demandé', () => {
  expect(produitDisponible(1, 3)).toBe(true)
  expect(produitDisponible(1, 5)).toBe(false)
  expect(produitDisponible(99, 1)).toBe(false)
})

test('ne modifie pas le tableau d’origine', () => {
  const copie = produitsDisponibles(produits)
  expect(copie).not.toBe(produits)
  expect(produits).toHaveLength(3)
})