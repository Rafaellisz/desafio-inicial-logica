const herois = [
  { nome: "Rillum", xp: 750 },
  { nome: "Arian", xp: 1600 },
  { nome: "Lisz", xp: 2900 },
  { nome: "Ramirez", xp: 6300 },
  { nome: "Natiex", xp: 7102 },
  { nome: "Rael", xp: 8550 },
  { nome: "Lara", xp: 9500 },
  { nome: "Junior", xp: 10700 }
]

function classificarNivel(xp) {
  if (xp < 1000) {
    return "Ferro"
  } else if (xp <= 2000) {
    return "Bronze"
  } else if (xp <= 5000) {
    return "Prata"
  } else if (xp <= 7000) {
    return "Ouro"
  } else if (xp <= 8000) {
    return "Platina"
  } else if (xp <= 9000) {
    return "Ascendente"
  } else if (xp <= 10000) {
    return "Imortal"
  } else {
    return "Radiante"
  }
}
for (let i = 0; i < herois.length; i++) {
  const heroi = herois[i]
  const nivel = classificarNivel(heroi.xp)
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`)
}
