
import { h, Component } from 'https://unpkg.com/@polight/brick/lib'

class PagePatients extends Component {
  get vdom() {
    return ({ state }) => [
  h("div", {"class": `card`}, [
    h("section", {"class": `p-md-3 mx-md-5 text-lg-left`}, [
    h("h2", {"class": `text-center font-weight-bold mb-4 pb-1`}, `Mes clients`),
    h("p", {"class": `text-center lead mb-5 pb-2 text-muted`}, `L'ensemble de vos clients.`),
    h("div", {"class": `row`}, [
    ((state.clients).map((client) => (h("div", {"class": `col-lg-4 col-sm-6 mb-5`}, [
    h("div", {"class": `row d-flex align-items-center`}, [
    h("div", {"class": `col-5 avatar w-100 white d-flex justify-content-center align-items-center`}, [
    h("img", {"src": `https://www.gravatar.com/avatar/${md5(client.email)}`, "class": `img-fluid rounded-circle z-depth-1`}, "")
]),
    h("div", {"class": `col-7`}, [
    h("h6", {"class": `font-weight-bold pt-2`}, `${client.firstName} ${client.lastName}`),
    h("p", {"class": `text-muted`}, `
                ${(new Date(client.birthdate)).toLocaleDateString()}
              `)
])
])
]))))
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
      clients: []
    }

    const response = await fetch(`https://terrapeute.ch/api/therapist/mesurebienetre@gmail.com`)
    if(!response.ok) return
    const json = await response.json()
    this.state.clients = json.extraData.patients
  }
}

export default customElements.define('page-patients', PagePatients)
