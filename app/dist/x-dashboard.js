
import { h, Component } from 'https://unpkg.com/@polight/brick/lib'

class XDashboard extends Component {
  get vdom() {
    return ({ state }) => [
  h("div", {"class": `container-fluid mt-5`}, [
    h("div", {"class": `row wow fadeIn`}, [
    h("div", {"class": `col-md-9 mb-4`}, [
    h("div", {"class": `card`}, [
    h("div", {"class": `card-body`}, [
    h("canvas", {"id": `myChart`}, "")
])
])
]),
    h("div", {"class": `col-md-3 mb-4`}, [
    h("div", {"class": `card mb-4`}, [
    h("div", {"class": `card-header text-center`}, `
            Pie chart
          `),
    h("div", {"class": `card-body`}, [
    h("canvas", {"id": `pieChart`}, "")
])
]),
    h("div", {"class": `card mb-4`}, [
    h("div", {"class": `card-body`}, [
    h("div", {"class": `list-group list-group-flush`}, [
    h("a", {"class": `list-group-item list-group-item-action waves-effect`}, [
`Sales
                `,
    h("span", {"class": `badge badge-success badge-pill pull-right`}, [
`22%
                  `,
    h("i", {"class": `fas fa-arrow-up ml-1`}, "")
])
]),
    h("a", {"class": `list-group-item list-group-item-action waves-effect`}, [
`Traffic
                `,
    h("span", {"class": `badge badge-danger badge-pill pull-right`}, [
`5%
                  `,
    h("i", {"class": `fas fa-arrow-down ml-1`}, "")
])
]),
    h("a", {"class": `list-group-item list-group-item-action waves-effect`}, [
`Orders
                `,
    h("span", {"class": `badge badge-primary badge-pill pull-right`}, `14`)
]),
    h("a", {"class": `list-group-item list-group-item-action waves-effect`}, [
`Issues
                `,
    h("span", {"class": `badge badge-primary badge-pill pull-right`}, `123`)
]),
    h("a", {"class": `list-group-item list-group-item-action waves-effect`}, [
`Messages
                `,
    h("span", {"class": `badge badge-primary badge-pill pull-right`}, `8`)
])
])
])
])
])
]),
    h("div", {"class": `row wow fadeIn`}, [
    h("div", {"class": `col-md-6 mb-4`}, [
    h("div", {"class": `card`}, [
    h("div", {"class": `card-body`}, [
    h("table", {"class": `table table-hover`}, [
    h("thead", {"class": `blue-grey lighten-4`}, [
    h("tr", {}, [
    h("th", {}, `#`),
    h("th", {}, `Lorem`),
    h("th", {}, `Ipsum`),
    h("th", {}, `Dolor`)
])
]),
    h("tbody", {}, [
    h("tr", {}, [
    h("th", {"scope": `row`}, `1`),
    h("td", {}, `Cell 1`),
    h("td", {}, `Cell 2`),
    h("td", {}, `Cell 3`)
]),
    h("tr", {}, [
    h("th", {"scope": `row`}, `2`),
    h("td", {}, `Cell 4`),
    h("td", {}, `Cell 5`),
    h("td", {}, `Cell 6`)
]),
    h("tr", {}, [
    h("th", {"scope": `row`}, `3`),
    h("td", {}, `Cell 7`),
    h("td", {}, `Cell 8`),
    h("td", {}, `Cell 9`)
])
])
])
])
])
]),
    h("div", {"class": `col-md-6 mb-4`}, [
    h("div", {"class": `card`}, [
    h("div", {"class": `card-body`}, [
    h("table", {"class": `table table-hover`}, [
    h("thead", {"class": `blue lighten-4`}, [
    h("tr", {}, [
    h("th", {}, `#`),
    h("th", {}, `Lorem`),
    h("th", {}, `Ipsum`),
    h("th", {}, `Dolor`)
])
]),
    h("tbody", {}, [
    h("tr", {}, [
    h("th", {"scope": `row`}, `1`),
    h("td", {}, `Cell 1`),
    h("td", {}, `Cell 2`),
    h("td", {}, `Cell 3`)
]),
    h("tr", {}, [
    h("th", {"scope": `row`}, `2`),
    h("td", {}, `Cell 4`),
    h("td", {}, `Cell 5`),
    h("td", {}, `Cell 6`)
]),
    h("tr", {}, [
    h("th", {"scope": `row`}, `3`),
    h("td", {}, `Cell 7`),
    h("td", {}, `Cell 8`),
    h("td", {}, `Cell 9`)
])
])
])
])
])
])
]),
    h("div", {"class": `row wow fadeIn`}, [
    h("div", {"class": `col-lg-6 col-md-6 mb-4`}, [
    h("div", {"class": `card`}, [
    h("div", {"class": `card-header`}, `Line chart`),
    h("div", {"class": `card-body`}, [
    h("canvas", {"id": `lineChart`}, "")
])
])
]),
    h("div", {"class": `col-lg-6 col-md-6 mb-4`}, [
    h("div", {"class": `card`}, [
    h("div", {"class": `card-header`}, `Radar Chart`),
    h("div", {"class": `card-body`}, [
    h("canvas", {"id": `radarChart`}, "")
])
])
]),
    h("div", {"class": `col-lg-6 col-md-6 mb-4`}, [
    h("div", {"class": `card`}, [
    h("div", {"class": `card-header`}, `Doughnut Chart`),
    h("div", {"class": `card-body`}, [
    h("canvas", {"id": `doughnutChart`}, "")
])
])
]),
    h("div", {"class": `col-lg-6 col-md-6 mb-4`}, [
    h("div", {"class": `card`}, [
    h("div", {"class": `card-header`}, `Horizontal Bar Chart`),
    h("div", {"class": `card-body`}, [
    h("canvas", {"id": `horizontalBar`}, "")
])
])
])
]),
    h("div", {"class": `row wow fadeIn`}, [
    h("div", {"class": `col-md-6 mb-4`}, [
    h("div", {"class": `card`}, [
    h("div", {"class": `card-header`}, `Google map`),
    h("div", {"class": `card-body`}, [
    h("div", {"id": `map-container-google-2`, "class": `z-depth-1-half map-container`, "style": `height: 500px`}, [
    h("iframe", {"src": `https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed`, "frameborder": `0`, "style": `border:0`, "allowfullscreen": ``}, "")
])
])
])
]),
    h("div", {"class": `col-md-6 mb-4`}, [
    h("div", {"class": `card`}, [
    h("section", {}, [
    h("div", {"class": `modal fade top`, "id": `frameModalTopInfoDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`, "data-backdrop": `false`}, [
    h("div", {"class": `modal-dialog modal-frame modal-top modal-notify modal-info`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-body`}, [
    h("div", {"class": `row d-flex justify-content-center align-items-center`}, [
    h("p", {"class": `pt-3 pr-2`}, `Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Impedit nisi quo
                        provident fugiat reprehenderit nostrum quos..`),
    h("a", {"role": `button`, "class": `btn btn-info`}, [
`Get it now
                        `,
    h("i", {"class": `far fa-gem ml-1`}, "")
]),
    h("a", {"role": `button`, "class": `btn btn-outline-info waves-effect`, "data-dismiss": `modal`}, `No,
                        thanks`)
])
])
])
])
]),
    h("div", {"class": `modal fade bottom`, "id": `frameModalBottomSuccessDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`, "data-backdrop": `false`}, [
    h("div", {"class": `modal-dialog modal-frame modal-bottom modal-notify modal-success`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-body`}, [
    h("div", {"class": `row d-flex justify-content-center align-items-center`}, [
    h("p", {"class": `pt-3 pr-2`}, `Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Impedit nisi quo
                        provident fugiat reprehenderit nostrum quos..`),
    h("a", {"role": `button`, "class": `btn btn-success`}, [
`Get it now
                        `,
    h("i", {"class": `far fa-gem ml-1`}, "")
]),
    h("a", {"role": `button`, "class": `btn btn-outline-success waves-effect`, "data-dismiss": `modal`}, `No, thanks`)
])
])
])
])
]),
    h("div", {"class": `modal fade right`, "id": `sideModalTRSuccessDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`, "data-backdrop": `false`}, [
    h("div", {"class": `modal-dialog modal-side modal-top-right modal-notify modal-success`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-header`}, [
    h("p", {"class": `heading lead`}, `Modal Success`),
    h("button", {"type": `button`, "class": `close`, "data-dismiss": `modal`, "aria-label": `Close`}, [
    h("span", {"aria-hidden": `true`, "class": `white-text`}, `×`)
])
]),
    h("div", {"class": `modal-body`}, [
    h("div", {"class": `text-center`}, [
    h("i", {"class": `fas fa-check fa-4x mb-3 animated rotateIn`}, ""),
    h("p", {}, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
                        iusto nulla
                        aperiam blanditiis ad consequatur in dolores culpa, dignissimos,
                        eius
                        non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.
                      `)
])
]),
    h("div", {"class": `modal-footer justify-content-center`}, [
    h("a", {"role": `button`, "class": `btn btn-success`}, [
`Get it now
                      `,
    h("i", {"class": `far fa-gem ml-1`}, "")
]),
    h("a", {"role": `button`, "class": `btn btn-outline-success waves-effect`, "data-dismiss": `modal`}, `No,
                      thanks`)
])
])
])
]),
    h("div", {"class": `modal fade left`, "id": `sideModalTLInfoDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`, "data-backdrop": `false`}, [
    h("div", {"class": `modal-dialog modal-side modal-top-left modal-notify modal-info`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-header`}, [
    h("p", {"class": `heading lead`}, `Modal Info`),
    h("button", {"type": `button`, "class": `close`, "data-dismiss": `modal`, "aria-label": `Close`}, [
    h("span", {"aria-hidden": `true`, "class": `white-text`}, `×`)
])
]),
    h("div", {"class": `modal-body`}, [
    h("img", {"src": `https://mdbootstrap.com/wp-content/uploads/2016/11/admin-dashboard-bootstrap.jpg`, "alt": `Material Design for Bootstrap - dashboard`, "class": `img-fluid`}, ""),
    h("div", {"class": `text-center`}, [
    h("p", {}, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
                        vero illo
                        error eveniet cum.
                      `)
])
]),
    h("div", {"class": `modal-footer justify-content-center`}, [
    h("a", {"role": `button`, "class": `btn btn-info`}, [
`Get it now
                      `,
    h("i", {"class": `far fa-gem ml-1`}, "")
]),
    h("a", {"role": `button`, "class": `btn btn-outline-info waves-effect`, "data-dismiss": `modal`}, `No,
                      thanks`)
])
])
])
]),
    h("div", {"class": `modal fade right`, "id": `sideModalBRDangerDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`, "data-backdrop": `false`}, [
    h("div", {"class": `modal-dialog modal-side modal-bottom-right modal-notify modal-danger`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-header`}, [
    h("p", {"class": `heading`}, `Modal Danger`),
    h("button", {"type": `button`, "class": `close`, "data-dismiss": `modal`, "aria-label": `Close`}, [
    h("span", {"aria-hidden": `true`, "class": `white-text`}, `×`)
])
]),
    h("div", {"class": `modal-body`}, [
    h("div", {"class": `row`}, [
    h("div", {"class": `col-3`}, [
    h("p", {}, ""),
    h("p", {"class": `text-center`}, [
    h("i", {"class": `fas fa-shopping-cart fa-4x`}, "")
])
]),
    h("div", {"class": `col-9`}, [
    h("p", {}, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                          molestiae
                          provident temporibus sunt earum.`),
    h("h2", {}, [
    h("span", {"class": `badge`}, `v52gs1`)
])
])
])
]),
    h("div", {"class": `modal-footer justify-content-center`}, [
    h("a", {"role": `button`, "class": `btn btn-danger`}, [
`Get it now
                      `,
    h("i", {"class": `far fa-gem ml-1`}, "")
]),
    h("a", {"role": `button`, "class": `btn btn-outline-danger waves-effect`, "data-dismiss": `modal`}, `No,
                      thanks`)
])
])
])
]),
    h("div", {"class": `modal fade left`, "id": `sideModalBLWarningDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`, "data-backdrop": `false`}, [
    h("div", {"class": `modal-dialog modal-side modal-bottom-left modal-notify modal-warning`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-header`}, [
    h("p", {"class": `heading`}, `Modal Warning`),
    h("button", {"type": `button`, "class": `close`, "data-dismiss": `modal`, "aria-label": `Close`}, [
    h("span", {"aria-hidden": `true`, "class": `white-text`}, `×`)
])
]),
    h("div", {"class": `modal-body`}, [
    h("div", {"class": `row`}, [
    h("div", {"class": `col-3 text-center`}, [
    h("img", {"src": `https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg`, "alt": `Michal Szymanski - founder of Material Design for Bootstrap`, "class": `img-fluid z-depth-1-half rounded-circle`}, ""),
    h("div", {"style": `height: 10px`}, ""),
    h("p", {"class": `title mb-0`}, `Jane`),
    h("p", {"class": `text-muted `, "style": `font-size: 13px`}, `Consultant`)
]),
    h("div", {"class": `col-9`}, [
    h("p", {}, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                          molestiae
                          provident temporibus sunt earum.`),
    h("p", {"class": `card-text`}, [
    h("strong", {}, `Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.`)
])
])
])
]),
    h("div", {"class": `modal-footer justify-content-center`}, [
    h("a", {"role": `button`, "class": `btn btn-warning`}, [
`Get it now
                      `,
    h("i", {"class": `far fa-gem ml-1`}, "")
]),
    h("a", {"role": `button`, "class": `btn btn-outline-warning waves-effect`, "data-dismiss": `modal`}, `No,
                      thanks`)
])
])
])
]),
    h("div", {"class": `modal fade`, "id": `modalLoginAvatarDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`}, [
    h("div", {"class": `modal-dialog cascading-modal modal-avatar modal-sm`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-header`}, [
    h("img", {"src": `https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg`, "class": `rounded-circle img-responsive`, "alt": `Avatar photo`}, "")
]),
    h("div", {"class": `modal-body text-center mb-1`}, [
    h("h5", {"class": `mt-1 mb-2`}, `Maria Doe`),
    h("div", {"class": `md-form ml-0 mr-0`}, [
    h("input", {"type": `password`, "id": `form1`, "class": `form-control ml-0`}, ""),
    h("label", {"for": `form1`, "class": `ml-0`}, `Enter password`)
]),
    h("div", {"class": `text-center mt-4`}, [
    h("button", {"class": `btn btn-cyan`}, [
`Login
                        `,
    h("i", {"class": `fas fa-sign-in-alt ml-1`}, "")
])
])
])
])
])
]),
    h("div", {"class": `modal fade`, "id": `modalLRFormDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`}, [
    h("div", {"class": `modal-dialog`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-header`}, [
    h("h5", {"class": `modal-title`, "id": `exampleModalLabel`}, `Modal title`),
    h("button", {"type": `button`, "class": `close`, "data-dismiss": `modal`, "aria-label": `Close`}, [
    h("span", {"aria-hidden": `true`}, `×`)
])
]),
    h("div", {"class": `modal-body`}, `
                    ...
                  `),
    h("div", {"class": `modal-footer`}, [
    h("button", {"type": `button`, "class": `btn btn-secondary`, "data-dismiss": `modal`}, `Close`),
    h("button", {"type": `button`, "class": `btn btn-primary`}, `Save changes`)
])
])
])
]),
    h("div", {"class": `modal fade`, "id": `centralModalLGInfoDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`}, [
    h("div", {"class": `modal-dialog modal-lg modal-notify modal-info`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-header`}, [
    h("p", {"class": `heading lead`}, `Modal Info`),
    h("button", {"type": `button`, "class": `close`, "data-dismiss": `modal`, "aria-label": `Close`}, [
    h("span", {"aria-hidden": `true`, "class": `white-text`}, `×`)
])
]),
    h("div", {"class": `modal-body`}, [
    h("div", {"class": `text-center`}, [
    h("i", {"class": `fas fa-check fa-4x mb-3 animated rotateIn`}, ""),
    h("p", {}, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
                        iusto nulla
                        aperiam blanditiis ad consequatur in dolores culpa, dignissimos,
                        eius
                        non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.
                      `)
]),
    h("img", {"src": `https://mdbootstrap.com/wp-content/uploads/2016/11/admin-dashboard-bootstrap.jpg`, "alt": `Material Design for Bootstrap - dashboard`, "class": `img-fluid`}, "")
]),
    h("div", {"class": `modal-footer`}, [
    h("a", {"role": `button`, "class": `btn btn-info`}, [
`Get it now
                      `,
    h("i", {"class": `far fa-gem ml-1`}, "")
]),
    h("a", {"role": `button`, "class": `btn btn-outline-info waves-effect`, "data-dismiss": `modal`}, `No,
                      thanks`)
])
])
])
]),
    h("div", {"class": `modal fade`, "id": `centralModalFluidSuccessDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`}, [
    h("div", {"class": `modal-dialog modal-fluid modal-notify modal-success`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-header`}, [
    h("p", {"class": `heading lead`}, `Modal Success`),
    h("button", {"type": `button`, "class": `close`, "data-dismiss": `modal`, "aria-label": `Close`}, [
    h("span", {"aria-hidden": `true`, "class": `white-text`}, `×`)
])
]),
    h("div", {"class": `modal-body`}, [
    h("div", {"class": `text-center`}, [
    h("i", {"class": `fas fa-check fa-4x mb-3 animated rotateIn`}, ""),
    h("p", {}, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
                        iusto nulla
                        aperiam blanditiis ad consequatur in dolores culpa, dignissimos,
                        eius
                        non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.
                      `)
]),
    h("ul", {"class": `list-group z-depth-0`}, [
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Cras justo odio
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `14`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Dapibus ac facilisis in
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `2`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Morbi leo risus
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `1`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Cras justo odio
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `14`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Dapibus ac facilisis in
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `2`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Morbi leo risus
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `1`)
])
])
]),
    h("div", {"class": `modal-footer`}, [
    h("a", {"role": `button`, "class": `btn btn-success`}, [
`Get it now
                      `,
    h("i", {"class": `far fa-gem ml-1`}, "")
]),
    h("a", {"role": `button`, "class": `btn btn-outline-success waves-effect`, "data-dismiss": `modal`}, `No,
                      thanks`)
])
])
])
]),
    h("div", {"class": `modal fade right`, "id": `fluidModalRightSuccessDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`, "data-backdrop": `false`}, [
    h("div", {"class": `modal-dialog modal-full-height modal-right modal-notify modal-success`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-header`}, [
    h("p", {"class": `heading lead`}, `Modal Success`),
    h("button", {"type": `button`, "class": `close`, "data-dismiss": `modal`, "aria-label": `Close`}, [
    h("span", {"aria-hidden": `true`, "class": `white-text`}, `×`)
])
]),
    h("div", {"class": `modal-body`}, [
    h("div", {"class": `text-center`}, [
    h("i", {"class": `fas fa-check fa-4x mb-3 animated rotateIn`}, ""),
    h("p", {}, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
                        iusto nulla
                        aperiam blanditiis ad consequatur in dolores culpa, dignissimos,
                        eius
                        non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.
                      `)
]),
    h("ul", {"class": `list-group z-depth-0`}, [
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Cras justo odio
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `14`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Dapibus ac facilisis in
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `2`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Morbi leo risus
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `1`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Cras justo odio
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `14`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Dapibus ac facilisis in
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `2`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Morbi leo risus
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `1`)
])
])
]),
    h("div", {"class": `modal-footer justify-content-center`}, [
    h("a", {"role": `button`, "class": `btn btn-success`}, [
`Get it now
                      `,
    h("i", {"class": `far fa-gem ml-1`}, "")
]),
    h("a", {"role": `button`, "class": `btn btn-outline-success waves-effect`, "data-dismiss": `modal`}, `No,
                      thanks`)
])
])
])
]),
    h("div", {"class": `modal fade left`, "id": `fluidModalLeftInfoDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`, "data-backdrop": `false`}, [
    h("div", {"class": `modal-dialog modal-full-height modal-left modal-notify modal-info`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-header`}, [
    h("p", {"class": `heading lead`}, `Modal Success`),
    h("button", {"type": `button`, "class": `close`, "data-dismiss": `modal`, "aria-label": `Close`}, [
    h("span", {"aria-hidden": `true`, "class": `white-text`}, `×`)
])
]),
    h("div", {"class": `modal-body`}, [
    h("div", {"class": `text-center`}, [
    h("i", {"class": `fas fa-check fa-4x mb-3 animated rotateIn`}, ""),
    h("p", {}, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
                        iusto nulla
                        aperiam blanditiis ad consequatur in dolores culpa, dignissimos,
                        eius
                        non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.
                      `)
]),
    h("ul", {"class": `list-group z-depth-0`}, [
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Cras justo odio
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `14`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Dapibus ac facilisis in
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `2`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Morbi leo risus
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `1`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Cras justo odio
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `14`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Dapibus ac facilisis in
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `2`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Morbi leo risus
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `1`)
])
])
]),
    h("div", {"class": `modal-footer justify-content-center`}, [
    h("a", {"role": `button`, "class": `btn btn-info`}, [
`Get it now
                      `,
    h("i", {"class": `far fa-gem ml-1`}, "")
]),
    h("a", {"role": `button`, "class": `btn btn-outline-info waves-effect`, "data-dismiss": `modal`}, `No,
                      thanks`)
])
])
])
]),
    h("div", {"class": `modal fade top`, "id": `fluidModalTopWarningDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`, "data-backdrop": `false`}, [
    h("div", {"class": `modal-dialog modal-full-height modal-top modal-notify modal-warning`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-header`}, [
    h("p", {"class": `heading lead`}, `Modal Warning`),
    h("button", {"type": `button`, "class": `close`, "data-dismiss": `modal`, "aria-label": `Close`}, [
    h("span", {"aria-hidden": `true`, "class": `white-text`}, `×`)
])
]),
    h("div", {"class": `modal-body`}, [
    h("div", {"class": `text-center`}, [
    h("i", {"class": `fas fa-check fa-4x mb-3 animated rotateIn`}, "")
]),
    h("ul", {"class": `list-group z-depth-0`}, [
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Cras justo odio
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `14`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Dapibus ac facilisis in
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `2`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Morbi leo risus
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `1`)
])
])
]),
    h("div", {"class": `modal-footer`}, [
    h("a", {"role": `button`, "class": `btn btn-warning`}, [
`Get it now
                      `,
    h("i", {"class": `far fa-gem ml-1`}, "")
]),
    h("a", {"role": `button`, "class": `btn btn-outline-warning waves-effect`, "data-dismiss": `modal`}, `No,
                      thanks`)
])
])
])
]),
    h("div", {"class": `modal fade bottom`, "id": `fluidModalBottomDangerDemo`, "tabindex": `-1`, "role": `dialog`, "aria-labelledby": `myModalLabel`, "aria-hidden": `true`, "data-backdrop": `false`}, [
    h("div", {"class": `modal-dialog modal-full-height modal-bottom modal-notify modal-danger`, "role": `document`}, [
    h("div", {"class": `modal-content`}, [
    h("div", {"class": `modal-header`}, [
    h("p", {"class": `heading lead`}, `Modal Danger`),
    h("button", {"type": `button`, "class": `close`, "data-dismiss": `modal`, "aria-label": `Close`}, [
    h("span", {"aria-hidden": `true`, "class": `white-text`}, `×`)
])
]),
    h("div", {"class": `modal-body`}, [
    h("div", {"class": `text-center`}, [
    h("i", {"class": `fas fa-check fa-4x mb-3 animated rotateIn`}, "")
]),
    h("ul", {"class": `list-group z-depth-0`}, [
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Cras justo odio
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `14`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Dapibus ac facilisis in
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `2`)
]),
    h("li", {"class": `list-group-item justify-content-between`}, [
`
                        Morbi leo risus
                        `,
    h("span", {"class": `badge badge-primary badge-pill`}, `1`)
])
])
]),
    h("div", {"class": `modal-footer`}, [
    h("a", {"role": `button`, "class": `btn btn-danger`}, [
`Get it now
                      `,
    h("i", {"class": `far fa-gem ml-1`}, "")
]),
    h("a", {"role": `button`, "class": `btn btn-outline-danger waves-effect`, "data-dismiss": `modal`}, `No,
                      thanks`)
])
])
])
])
]),
    h("div", {"class": `card-header`}, `Modals`),
    h("div", {"class": `card-body`}, [
    h("div", {"class": `text-center mb-5`}, [
    h("p", {"class": `lead`}, `Click buttons below to launch modals demo`)
]),
    h("div", {"class": `row`}, [
    h("div", {"class": `col-md-3`}, [
    h("h5", {"class": `text-center mb-3`}, `Frame Modal`),
    h("img", {"src": `https://mdbootstrap.com/img/brandflow/modal4.jpg`, "alt": `MDB graphics`, "class": `img-fluid z-depth-1`}, ""),
    h("div", {"class": `text-center`}, [
    h("h5", {"class": `my-3`}, `Position`),
    h("a", {"class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#frameModalTopInfoDemo`, "data-backdrop": `false`}, `Top`),
    h("br", {}, ""),
    h("a", {"class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#frameModalBottomSuccessDemo`, "data-backdrop": `false`}, `Bottom`)
])
]),
    h("div", {"class": `col-md-3`}, [
    h("h5", {"class": `text-center mb-3`}, `Side Modal`),
    h("img", {"src": `https://mdbootstrap.com/img/brandflow/modal3.jpg`, "alt": `MDB graphics`, "class": `img-fluid z-depth-1`}, ""),
    h("div", {"class": `text-center`}, [
    h("h5", {"class": `my-3`}, `Position`),
    h("a", {"class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#sideModalTRSuccessDemo`, "data-backdrop": `false`}, `Top Right`),
    h("br", {}, ""),
    h("a", {"class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#sideModalTLInfoDemo`}, `Top
                    Left`),
    h("br", {}, ""),
    h("a", {"class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#sideModalBRDangerDemo`}, `Bottom
                    Right`),
    h("br", {}, ""),
    h("a", {"class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#sideModalBLWarningDemo`}, `Bottom
                    Left`)
])
]),
    h("div", {"class": `col-md-3`}, [
    h("h5", {"class": `text-center mb-3`}, `Central Modal`),
    h("img", {"src": `https://mdbootstrap.com/img/brandflow/modal2.jpg`, "alt": `MDB graphics`, "class": `img-fluid z-depth-1`}, ""),
    h("div", {"class": `text-center`}, [
    h("h5", {"class": `my-3`}, `Size`),
    h("button", {"type": `button`, "class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#modalLoginAvatarDemo`}, `Small
                  `),
    h("br", {}, ""),
    h("button", {"type": `button`, "class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#modalLRFormDemo`}, `Medium
                  `),
    h("br", {}, ""),
    h("button", {"type": `button`, "class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#centralModalLGInfoDemo`}, `Large
                  `),
    h("br", {}, ""),
    h("button", {"type": `button`, "class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#centralModalFluidSuccessDemo`}, `Fluid
                  `)
])
]),
    h("div", {"class": `col-md-3`}, [
    h("h5", {"class": `text-center mb-3`}, `Fluid Modal`),
    h("img", {"src": `https://mdbootstrap.com/img/brandflow/modal1.jpg`, "alt": `MDB graphics`, "class": `img-fluid z-depth-1`}, ""),
    h("div", {"class": `text-center`}, [
    h("h5", {"class": `my-3`}, `Position`),
    h("button", {"type": `button`, "class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#fluidModalRightSuccessDemo`}, `Right`),
    h("br", {}, ""),
    h("button", {"type": `button`, "class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#fluidModalLeftInfoDemo`}, `Left`),
    h("br", {}, ""),
    h("button", {"type": `button`, "class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#fluidModalTopWarningDemo`}, `Top`),
    h("br", {}, ""),
    h("button", {"type": `button`, "class": `btn btn-primary btn-sm`, "data-toggle": `modal`, "data-target": `#fluidModalBottomDangerDemo`}, `Bottom`)
])
])
])
])
])
])
])
]),
  h("script", {"src": `https://maps.google.com/maps/api/js`}, ""),
  h("script", {}, `
      // Regular map
      function regular_map() {
        var var_location = new google.maps.LatLng(40.725118, -73.997699);

        var var_mapoptions = {
          center: var_location,
          zoom: 14
        };

        var var_map = new google.maps.Map(document.getElementById("map-container"),
          var_mapoptions);

        var var_marker = new google.maps.Marker({
          position: var_location,
          map: var_map,
          title: "New York"
        });
      }

      new Chart(document.getElementById("horizontalBar"), {
        "type": "horizontalBar",
        "data": {
          "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
          "datasets": [{
            "label": "My First Dataset",
            "data": [22, 33, 55, 12, 86, 23, 14],
            "fill": false,
            "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"
            ],
            "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
              "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)",
              "rgb(201, 203, 207)"
            ],
            "borderWidth": 1
          }]
        },
        "options": {
          "scales": {
            "xAxes": [{
              "ticks": {
                "beginAtZero": true
              }
            }]
          }
        }
      });

    `)]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    @import url('./css/main.css');

  .map-container{
overflow:hidden;
padding-bottom:56.25%;
position:relative;
height:0;
}
.map-container iframe{
left:0;
top:0;
height:100%;
width:100%;
position:absolute;
}
  `)}
  
}

export default customElements.define('x-dashboard', XDashboard)
