import { useState, useEffect } from 'react'


export function DynamicInputs({ n = 5 }) {
  const [nonEmptyCells, setNonEmptyCells] = useState(0)
  const [cellsContents, setCellsContents] = useState([])

  const tmpState = []
  for (let i = 0; i < n; i++) {
    tmpState.push('')
  }
  const [dynamicState, setDynamicState] = useState(tmpState)

  useEffect(() => {
    let nonEmpty = dynamicState.filter(d => d != '')
    setCellsContents(nonEmpty)
    setNonEmptyCells(nonEmpty.length)
  }, [dynamicState])

  return (
    <div className="container">
      <h2>Dynamic inputs</h2>
      <div>
        {
          dynamicState.map((d, i) =>
            <input
              onChange={(e) => {
                let newDynamicState = [...dynamicState]
                newDynamicState[i] = e.target.value
                setDynamicState(newDynamicState)
              }}
              key={i} />)
        }
      </div>
      Non empty cells: {nonEmptyCells}
      <br />
      Cells contents: {cellsContents.toString()}
    </div>
  )
}