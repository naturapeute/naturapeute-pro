
import { h, Component } from 'https://unpkg.com/@polight/brick/lib'

class PagePatient extends Component {
  get vdom() {
    return ({ state }) => [
  h("form", {}, [
    h("div", {"class": `col mt-2 mb-6`}, [
    h("div", {"class": `card testimonial-card`}, [
    h("div", {"class": `card-up indigo lighten-1`}, ""),
    h("div", {"class": `avatar mx-auto white`}, [
    h("img", {"src": `https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg`, "class": `rounded-circle`, "alt": `woman avatar`}, "")
]),
    h("div", {"class": `card-body`}, [
    h("div", {"class": `col mt-2 mb-6`}, [
    h("div", {"class": `border border-light p-5`}, [
    h("h3", {"class": `h3 mb-4 text-center`}, `Informations de contact`),
    h("div", {"class": `row`}, [
    h("ui-input", {"class": `col-sm`, "label": `Prénom`, "name": `firstname`, "bind": state.patient}, ""),
    h("ui-input", {"class": `col-sm`, "label": `Nom`, "name": `lastname`, "bind": state.patient}, "")
]),
    h("div", {"class": `row`}, [
    h("div", {"class": `col-sm`}, [
    h("ui-input", {"type": `email`, "label": `Email`, "name": `email`, "bind": state.patient}, "")
]),
    h("div", {"class": `col-sm`}, [
    h("ui-input", {"label": `Téléphone`, "name": `phone`, "bind": state.patient}, "")
])
]),
    h("div", {"class": `row`}, [
    h("div", {"class": `col-sm`}, [
    h("ui-input", {"type": `url`, "label": `Site internet`, "name": `website`, "bind": state.patient}, "")
]),
    h("div", {"class": `col-sm`}, [
    h("ui-input", {"type": `url`, "label": `Page facebook`, "name": `facebook`, "bind": state.patient}, "")
])
])
])
])
])
])
])
])]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    @import url('/app/css/main.css');
  `)}
  async init() {
    this.state = {
      patient: {
        ZIP: "",
        birthdate: null,
        canton: "",
        city: "",
        email: "",
        firstName: "",
        gender: "",
        id: "",
        lastName: "",
        street: ""
      },
    }

    const response = await fetch(`https://naturapeute.ch/api/therapist/mesurebienetre@gmail.com`)
    if(!response.ok) return
    const profile = await response.json()
    this.state.patient = Object.assign(this.state.patient, profile.extraData.patients.find(p => p.id == state.id))
  }
}

export default customElements.define('page-patient', PagePatient)
