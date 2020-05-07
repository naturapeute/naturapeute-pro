
import { h, Component } from 'https://unpkg.com/@polight/brick/lib'

class PageProfile extends Component {
  get vdom() {
    return ({ state }) => [
  h("form", {}, [
    h("div", {"class": `col mt-2 mb-6`}, [
    h("div", {"class": `card`}, [
    h("div", {"class": `border border-light p-5`}, [
    h("h3", {"class": `h3 mb-4 text-center`}, `Informations de contact`),
    h("div", {"class": `row`}, [
    h("ui-input", {"class": `col-sm`, "label": `Prénom`, "name": `firstname`, "bind": state.profile}, ""),
    h("ui-input", {"class": `col-sm`, "label": `Nom`, "name": `lastname`, "bind": state.profile}, "")
]),
    h("div", {"class": `row`}, [
    h("div", {"class": `col-sm`}, [
    h("ui-input", {"type": `email`, "label": `Email`, "name": `email`, "bind": state.profile}, "")
]),
    h("div", {"class": `col-sm`}, [
    h("ui-input", {"label": `Téléphone`, "name": `phone`, "bind": state.profile}, "")
])
]),
    h("div", {"class": `row`}, [
    h("div", {"class": `col-sm`}, [
    h("ui-input", {"type": `url`, "label": `Site internet`, "name": `website`, "bind": state.profile.socials}, "")
]),
    h("div", {"class": `col-sm`}, [
    h("ui-input", {"type": `url`, "label": `Page facebook`, "name": `facebook`, "bind": state.profile.socials}, "")
])
])
])
])
]),
    h("div", {"class": `col mt-2 mb-6`}, [
    h("div", {"class": `card`}, [
    h("div", {"class": `border border-light p-5`}, [
    h("h3", {"class": `h3 mb-4 text-center`}, `Cabinet principal`),
    h("div", {}, [
    h("div", {"class": `row row-cols-1 row-cols-sm-3 row-cols-md-6`}, [
    h("ui-input", {"class": `col-sm`, "label": `Nom du lieu`, "name": `name`, "value": ``}, "")
])
])
])
])
]),
    h("div", {"class": `col mt-2 mb-6`}, [
    h("div", {"class": `card`}, [
    h("div", {"class": `border border-light p-5`}, [
    h("h3", {"class": `h3 mb-4 text-center`}, `Profil de thérapeute`),
    h("div", {}, [
    h("h4", {}, `Thérapie(s) pratiquée(s)`),
    h("div", {"class": `row row-cols-1 row-cols-sm-3 row-cols-md-6`}, [
    ((state.therapies).map((therapy) => (h("div", {"class": `custom-control custom-checkbox col-12 col-md-4`}, [
    h("input", {"type": `checkbox`, "class": `custom-control-input`, "name": `therapies[]`, "id": `therapies-${therapy.value}`, "checked": state.profile.therapies.includes(therapy.value), "value": therapy.value}, ""),
    h("label", {"class": `custom-control-label`, "for": `therapies-${therapy.value}`}, `${therapy.name}`)
]))))
])
]),
    h("div", {}, [
    h("h4", {}, `Agréements assureurs et remboursements`),
    h("div", {"class": `row row-cols-1 row-cols-sm-3 row-cols-md-6`}, [
    ((state.agreements).map((agreement) => (h("div", {"class": `custom-control custom-checkbox col-12 col-md-4`}, [
    h("input", {"type": `checkbox`, "class": `custom-control-input`, "name": `agreements[]`, "id": `agreements-${agreement}`, "checked": state.profile.agreements.includes(agreement), "value": agreement}, ""),
    h("label", {"class": `custom-control-label`, "for": `agreements-${agreement}`}, `${agreement}`)
]))))
])
]),
    h("div", {}, [
    h("h4", {}, `Fiche descriptive`),
    h("textarea", {"class": `form-control mb-4`, "rows": `10`, "name": `description`}, `${ state.profile.description }`)
]),
    h("div", {}, [
    h("h4", {}, `Tarif des séances`),
    h("textarea", {"class": `form-control mb-4`, "rows": `3`, "name": `price`}, `${ state.profile.price }`)
]),
    h("div", {}, [
    h("h4", {}, `Moyens de paiements`),
    h("div", {"class": `row row-cols-1 row-cols-sm-3 row-cols-md-6`}, [
    ((state.payments).map((payment) => (h("div", {"class": `custom-control custom-checkbox col-12 col-md-4`}, [
    h("input", {"type": `checkbox`, "class": `custom-control-input`, "name": `payments[]`, "id": `payments-${payment.value}`, "checked": state.profile.payments.includes(payment.value), "value": payment.value}, ""),
    h("label", {"class": `custom-control-label`, "for": `payments-${payment.value}`}, `${payment.name}`)
]))))
])
]),
    h("div", {}, [
    h("h4", {}, `Horaires d'ouverture`),
    h("textarea", {"class": `form-control mb-4`, "rows": `3`, "name": `timetable`}, `${ state.profile.timetable }`)
]),
    h("div", {}, [
    h("h4", {}, `Langues parlées`),
    h("div", {"class": `row row-cols-1 row-cols-sm-2 row-cols-md-4`}, [
    h("div", {"class": `custom-control custom-checkbox col`}, [
    h("input", {"type": `checkbox`, "class": `custom-control-input`, "name": `languages[]`, "id": `languages-fr`, "checked": state.profile.languages.includes('fr'), "value": `fr`}, ""),
    h("label", {"class": `custom-control-label`, "for": `languages-fr`}, `Français`)
]),
    h("div", {"class": `custom-control custom-checkbox col`}, [
    h("input", {"type": `checkbox`, "class": `custom-control-input`, "name": `languages[]`, "id": `languages-de`, "checked": state.profile.languages.includes('de'), "value": `de`}, ""),
    h("label", {"class": `custom-control-label`, "for": `languages-de`}, `Allemand`)
]),
    h("div", {"class": `custom-control custom-checkbox col`}, [
    h("input", {"type": `checkbox`, "class": `custom-control-input`, "name": `languages[]`, "id": `languages-it`, "checked": state.profile.languages.includes('it'), "value": `it`}, ""),
    h("label", {"class": `custom-control-label`, "for": `languages-it`}, `Italien`)
]),
    h("div", {"class": `custom-control custom-checkbox col`}, [
    h("input", {"type": `checkbox`, "class": `custom-control-input`, "name": `languages[]`, "id": `languages-en`, "checked": state.profile.languages.includes('en'), "value": `en`}, ""),
    h("label", {"class": `custom-control-label`, "for": `languages-en`}, `Anglais`)
]),
    h("div", {"class": `custom-control custom-checkbox col`}, [
    h("input", {"type": `checkbox`, "class": `custom-control-input`, "name": `languages[]`, "id": `languages-nl`, "checked": state.profile.languages.includes('nl'), "value": `nl`}, ""),
    h("label", {"class": `custom-control-label`, "for": `languages-nl`}, `Néerlandais`)
]),
    h("div", {"class": `custom-control custom-checkbox col`}, [
    h("input", {"type": `checkbox`, "class": `custom-control-input`, "name": `languages[]`, "id": `languages-ru`, "checked": state.profile.languages.includes('ru'), "value": `ru`}, ""),
    h("label", {"class": `custom-control-label`, "for": `languages-ru`}, `Russe`)
]),
    h("div", {"class": `custom-control custom-checkbox col`}, [
    h("input", {"type": `checkbox`, "class": `custom-control-input`, "name": `languages[]`, "id": `languages-99`, "checked": state.profile.languages.includes('99'), "value": `99`}, ""),
    h("label", {"class": `custom-control-label`, "for": `languages-99`}, `Autre`)
])
])
])
])
])
]),
    h("button", {"class": `btn btn-info btn-block`, "type": `submit`}, `Enregistrer`)
])]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    @import url('/app/css/main.css');
  `)}
  async init() {
    this.state = {
      profile: {languages: [], socials: [], therapies: [], agreements: [], payments: []},
      therapies: [
        { value: "acupuncture", name: "Acupuncture" },
        { value: "approche-psycho-corporelle", name: "Approche Psycho-Corporelle" },
        { value: "aromatherapie", name: "Aromathérapie" },
        { value: "axiotherapie", name: "Axiothérapie" },
        { value: "ayurveda", name: "Ayurveda" },
        { value: "bol-air-jacquier", name: "Bol d'air Jacquier" },
        { value: "brain-gym", name: "Brain Gym" },
        { value: "chromotherapie", name: "Chromothérapie" },
        { value: "coaching", name: "Coaching" },
        { value: "conflits-parents-ados", name: "Conflits Parents/Ados" },
        { value: "conflits-parents-enfants", name: "Conflits Parents/Enfants" },
        { value: "drainage", name: "Drainage lymphatique" },
        { value: "harcelement", name: "Harcèlement" },
        { value: "homeopathie", name: "Homéopathie" },
        { value: "integration-motrice-primordiale", name: "Intégration motrice primordiale" },
        { value: "kinesiologie", name: "Kinésiologie" },
        { value: "massage-ayurvedique", name: "Massage Ayurvédique" },
        { value: "massage-classique", name: "Massage Classique" },
        { value: "massage-empirique", name: "Massage empirique" },
        { value: "massage-energetique", name: "Massage Energétique" },
        { value: "massage-sportif", name: "Massage Sportif" },
        { value: "massage-therapeutique", name: "Massage thérapeutique" },
        { value: "massage-tuina", name: "Massage Tuina" },
        { value: "massotherapie", name: "Massothérapie" },
        { value: "medecine-chinoise", name: "Medecine chinoise" },
        { value: "medi-flossing", name: "Medi-Flossing" },
        { value: "micronutrition", name: "Micronutrition" },
        { value: "mycotherapie", name: "Mycothérapie" },
        { value: "naturopathie", name: "Naturopathie" },
        { value: "nst-bowen-therapy", name: "NST (Bowen Therapy" },
        { value: "nutritherapie", name: "Nutritherapie" },
        { value: "nutrition", name: "Nutrition" },
        { value: "phytotherapie", name: "Phytothérapie" },
        { value: "pnl", name: "Programmation neuro-linguistique" },
        { value: "polarity", name: "Polarity" },
        { value: "polarity-yoga", name: "Polarity Yoga" },
        { value: "psychogenealogie", name: "Psychogénéalogie" },
        { value: "reflexologie", name: "Réflexologie" },
        { value: "regression", name: "Régression" },
        { value: "sante-par-le-touche", name: "Santé par le Toucher" },
        { value: "shiatsu", name: "Shiatsu" },
        { value: "shiatsu-assis", name: "Shiatsu-Assis" },
        { value: "soin-quantique", name: "Soin Quantique" },
        { value: "sophrologie", name: "Sophrologie" },
        { value: "spa-ionique", name: "Spa Ionique" },
        { value: "therapie-cranio-sacrale", name: "Thérapie Cranio-Sacrale" },
        { value: "therapie-sonique", name: "Thérapie Sonique (BioSonic Repatterning" },
        { value: "therapie-systemique", name: "Thérapie Systémique" },
        { value: "ventouses", name: "Ventouses" },
        { value: "yoga", name: "Yoga" },
      ],
      payments: [
        { value: "cash", name: "En espèce" },
        { value: "cb", name: "Carte bancaire" },
        { value: "transfer", name: "Virement bancaire" },
        { value: "check", name: "Chèque" },
      ],
      agreements: ['ASCA', 'RME'],
    }

    const response = await fetch(`https://terrapeute.ch/api/therapist/mesurebienetre@gmail.com`)
    if(!response.ok) return
    this.state.profile = Object.assign(this.state.profile, await response.json())
  }
}

export default customElements.define('page-profile', PageProfile)
