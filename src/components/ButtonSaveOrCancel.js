import React from 'react'
import { Button } from 'semantic-ui-react'

function ButtonSaveOrCancel() {
  return (
    <Button.Group style={{marginTop:20}}>
          <Button primary>Okay</Button>
          <Button.Or/>
          <Button secondary>Cancel</Button>
    </Button.Group>
  )
}

export default ButtonSaveOrCancel
