
import { h, Component } from 'https://unpkg.com/@polight/brick/lib'

class XAvatar extends Component {
  get vdom() {
    return ({ state }) => [
  h("div", {"class": ``}, [
    h("div", {"class": `card-body d-flex flex-row`}, [
    h("img", {"src": state.image, "class": `rounded-circle mr-3`, "height": `50px`, "width": `50px`, "alt": `avatar`}, ""),
    h("div", {}, [
    h("h4", {"class": `card-title font-weight-bold mb-2`}, `${ state.name }`),
    h("p", {"class": `card-text`}, [
    h("i", {"class": `far fa-calendar pr-2`}, ""),
`${ (new Date(state.date)).toLocaleDateString() }`
])
])
]),
    ((false) ? h("div", {"class": `view overlay`}, [
    h("img", {"class": `card-img-top rounded-0`, "src": `https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg`, "alt": `Card image cap`}, ""),
    h("a", {"href": `#!`}, [
    h("div", {"class": `mask rgba-white-slight`}, "")
])
]) : ''),
    ((false) ? h("div", {"class": `card-body`}, [
    h("div", {"class": `collapse-content`}, [
    h("p", {"class": `card-text collapse`, "id": `collapseContent`}, `Recently, we added several exotic new dishes to our restaurant menu. They come from countries such as Mexico, Argentina, and Spain. Come to us, have some delicious wine and enjoy our juicy meals from around the world.`),
    h("a", {"class": `btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed`, "data-toggle": `collapse`, "href": `#collapseContent`, "aria-expanded": `false`, "aria-controls": `collapseContent`}, ""),
    h("i", {"class": `fas fa-share-alt text-muted float-right p-1 my-1`, "data-toggle": `tooltip`, "data-placement": `top`, "title": `Share this post`}, ""),
    h("i", {"class": `fas fa-heart text-muted float-right p-1 my-1 mr-3`, "data-toggle": `tooltip`, "data-placement": `top`, "title": `I like it`}, "")
])
]) : '')
])]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    @import url('../css/main.css');
  `)}
  init() {
    this.useShadowDOM = false

    this.state = {
      name: '',
      image: '',
      date: 0,
    }
  }
}

export default customElements.define('x-avatar', XAvatar)
