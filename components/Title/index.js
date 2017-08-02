// isolated CSS!!! Woot
export default ({ value }) => (
  <div>
    <h1>{ value }</h1>
    <style jsx>{`
      h1 {
        color: blue;
      }
    `}</style>
  </div>
)
