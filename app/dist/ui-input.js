
import { h, Component } from 'https://unpkg.com/@polight/brick/lib'

class UiInput extends Component {
  get vdom() {
    return ({ state }) => [
  ((state.label) ? h("label", {"for": `_input-${ state.name }`}, `${ state.label }`) : ''),
  h("input", {"type": state.type, "id": `_input-${ state.name }`, "class": `form-control mb-4`, "placeholder": `${ state.label }`, "name": `${ state.name }`, "value": state.value}, "")]
  }
  
  init() {
    this.state = {
      name: "",
      label: "",
      value: "",
      type: "text",
      bind: null,
    }
    this.useShadowDOM = false
  }

  connected() {
    if(!this.state.value && this.state.bind && this.state.name) this.state.value = this.state.bind[this.state.name]
  }
}

export default customElements.define('ui-input', UiInput)
