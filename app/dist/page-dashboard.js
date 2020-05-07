
import { h, Component } from 'https://unpkg.com/@polight/brick/lib'

class PageDashboard extends Component {
  get vdom() {
    return ({ state }) => [
  h("div", {"class": `container-fluid mt-5`}, [
    h("div", {"class": `jumbotron card card-image`, "style": `background-image: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg);`}, [
    h("div", {"class": `text-white text-center py-5 px-4`}, [
    h("div", {}, [
    h("h2", {"class": `card-title h1-responsive pt-3 mb-5 font-bold`}, `
            Bienvenue dans votre espace professionel
          `),
    h("p", {"class": `mx-5 mb-5`}, [
`
            Vous pourrez ici gérer vos clients, rendez-vous, et autres simplifications administratives.`,
    h("br", {}, "")
]),
    h("a", {"class": `btn btn-outline-white btn-md`}, [
    h("i", {"class": `fas fa-clone left`}, ""),
` Accéder à mon compte`
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
  
}

export default customElements.define('page-dashboard', PageDashboard)
