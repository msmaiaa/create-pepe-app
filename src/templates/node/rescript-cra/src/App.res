
@react.component
let make = () => {
  let url = RescriptReactRouter.useUrl()
  switch url.path {
    | list{} => <Index/>
    | _ => <FourOhFour/>
  }
}