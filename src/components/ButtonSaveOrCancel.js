import React from 'react'
import { Button } from 'semantic-ui-react'

function ButtonSaveOrCancel({addEntry}) {
  return (
    <Button.Group style={{marginTop:20}}>
          <Button primary onClick={() => addEntry()}>
            Okay
          </Button>
          <Button.Or/>
          <Button secondary>Cancel</Button>
    </Button.Group>
  )
}

export default ButtonSaveOrCancel
