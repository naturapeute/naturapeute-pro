
import { h, Component } from 'https://unpkg.com/@polight/brick/lib'

class XApp extends Component {
  get vdom() {
    return ({ state }) => [
  h("div", {"class": `sidebar-fixed position-fixed`}, [
    h("a", {"class": `logo-wrapper waves-effect`}, [
    h("img", {"src": `./img/terrapeute enseigne vertica.svg`, "class": `img-fluid`, "alt": `Terrapeute pro`, "style": `max-height:inherit;`}, "")
]),
    h("nav", {"class": `list-group list-group-flush`}, [
    h("a", {"href": `/dashboard`, "class": `${state.page == 'dashboard' && 'active'} list-group-item waves-effect`}, [
    h("i", {"class": `fas fa-chart-pie mr-3`}, ""),
`Tableau de bord
      `
]),
    h("a", {"href": `/profile`, "class": `${state.page == 'profile' && 'active'} list-group-item list-group-item-action waves-effect`}, [
    h("i", {"class": `fas fa-user mr-3`}, ""),
`Mon compte
      `
]),
    h("a", {"href": `/patients`, "class": `${state.page == 'patients' && 'active'} list-group-item list-group-item-action waves-effect`}, [
    h("i", {"class": `fas fa-user mr-3`}, ""),
`Mes clients
      `
])
])
]),
  h("main", {"class": `pt-5 mx-lg-5`}, [
    ((state.page == 'dashboard') ? h("page-dashboard", {}, "") : ''),
    ((state.page == 'profile') ? h("page-profile", {}, "") : ''),
    ((state.page == 'patients') ? h("page-patients", {}, "") : '')
])]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    @import url('/app/css/main.css');
  `)}
  init() {
    this.state = {
      page: 'dashboard'
    }
  }

  connected() {
    page('/', () => this.state.page = 'dashboard')
    page('/dashboard', () => this.state.page = 'dashboard')
    page('/profile', () => this.state.page = 'profile')
    page('/patients', () => this.state.page = 'patients')
    page.start({ hashbang: true })
  }
}

export default customElements.define('x-app', XApp)
