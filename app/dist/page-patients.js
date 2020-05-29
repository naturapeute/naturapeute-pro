
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
    h("a", {"href": `#!/patient/${client.id}`}, [
    h("x-avatar", {"date": client.birthdate, "name": client.name, "image": `https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg`}, "")
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

    const response = await fetch(`https://naturapeute.ch/api/therapist/mesurebienetre@gmail.com`)
    if(!response.ok) return
    const json = await response.json()
    this.state.clients = json.extraData.patients.map(p => {
      p.name = `${p.firstName} ${p.lastName}`
      return p
    })
  }
}

export default customElements.define('page-patients', PagePatients)
