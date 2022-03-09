@react.component
let make = () => {
  <div>
    <div onClick={_ => RescriptReactRouter.push("/")}>{"Home" -> React.string}</div>
  </div>
}