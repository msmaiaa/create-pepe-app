@react.component
let make = () => {
  let (count, setCount) = React.useState(_ => 0)

  <>
    <h3>
      {count -> Belt.Int.toString -> React.string}
      <button onClick={_ => setCount(prev => prev + 1)}>{"Increment" -> React.string}</button>
    </h3>
  </>
}