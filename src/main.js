const tickets = [
  { id: 1, titre: 'écran noir', statut: 'ouvert' },
  { id: 2, titre: 'clavier non reconnu', statut: 'ouvert' },
  { id: 3, titre: 'installation terminée', statut: 'fermé' },
]

const recherche = document.querySelector('#recherche')
const formulaire = document.querySelector('#formulaire-ticket')
const champTitre = document.querySelector('#titre')
const filtreStatut = document.querySelector('#filtre-statut')
const liste = document.querySelector('#liste-tickets')
const compteur = document.querySelector('#compteur')

function afficherTickets() {
  const terme = recherche.value.trim().toLowerCase()
  const statutChoisi = filtreStatut.value
  const ticketsAffiches = tickets.filter(ticket => {
    const correspondAuTexte = ticket.titre.toLowerCase().includes(terme)
    const correspondAuStatut =
      statutChoisi === 'tous' || ticket.statut === statutChoisi
    return correspondAuTexte && correspondAuStatut
  })

  liste.replaceChildren()

  ticketsAffiches.forEach(ticket => {
    const element = document.createElement('li')
    const titre = document.createElement('span')
    const statut = document.createElement('span')

    titre.textContent = ticket.titre
    statut.textContent = ticket.statut
    statut.classList.add('statut', ticket.statut === 'fermé' ? 'ferme' : 'ouvert')
    element.append(titre, statut)

    if (ticket.statut === 'ouvert') {
      const boutonFermer = document.createElement('button')
      boutonFermer.type = 'button'
      boutonFermer.textContent = 'Marquer comme fermé'
      boutonFermer.addEventListener('click', () => {
        ticket.statut = 'fermé'
        afficherTickets()
      })
      element.appendChild(boutonFermer)
    }

    liste.appendChild(element)
  })

  compteur.textContent =
    `${ticketsAffiches.length} ticket${ticketsAffiches.length > 1 ? 's' : ''} affiché${ticketsAffiches.length > 1 ? 's' : ''}`
}

recherche.addEventListener('input', afficherTickets)
filtreStatut.addEventListener('change', afficherTickets)

formulaire.addEventListener('submit', event => {
  event.preventDefault()
  const titre = champTitre.value.trim()

  if (!titre) return

  tickets.push({
    id: Date.now(),
    titre,
    statut: 'ouvert',
  })
  formulaire.reset()
  afficherTickets()
  champTitre.focus()
})

afficherTickets()