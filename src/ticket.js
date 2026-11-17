// Un ticket contient : id, titre, statut, priorite et utilisateur (facultatif).
const ticket = {
  id: 1,
  titre: 'écran noir',
  statut: 'ouvert',
  priorite: 'haute',
  utilisateur: { id: 4, nom: 'lea' },
}

function changerStatut(ticket, statut) {
  return { ...ticket, statut }
}

function ajouterNote(ticket, note) {
  return { ...ticket, notes: [...(ticket.notes || []), note] }
}

function extraireInformations(ticket) {
  const { titre, statut, priorite } = ticket
  return { titre, statut, priorite }
}

function resumerTicket(ticket) {
  const { id, titre, statut, priorite, utilisateur } = ticket
  return {
    id,
    titre,
    statut,
    priorite,
    utilisateur: utilisateur?.nom || 'inconnu',
  }
}

function estUrgent(ticket) {
  return ticket.priorite === 'haute'
}

class Ticket {
  constructor(donnees) {
    Object.assign(this, donnees)
  }

  resume() {
    return resumerTicket(this)
  }
}

module.exports = {
  Ticket,
  ajouterNote,
  changerStatut,
  estUrgent,
  extraireInformations,
  resumerTicket,
}

if (require.main === module) {
  console.log(changerStatut(ticket, 'en cours'))
  console.log(ajouterNote(ticket, 'Vérifier le câble'))
  console.log(extraireInformations(ticket))
  console.log(resumerTicket(ticket))
  console.log(estUrgent(ticket))
}
