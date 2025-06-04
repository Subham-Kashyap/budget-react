import React from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({desc,value,isExp,setDesc,setValue,setIsExp}) {
  return (
    <>
    <Form.Group>
          <Form.Input 
          icon='tags' 
          width={12} 
          label = 'Description' 
          placeholder = 'Enter Description'
          value = {desc}
          onChange={(event) => setDesc(event.target.value)}
          />

          <Form.Input width={4}
          label = 'Value' 
          placeholder = '100.00' 
          icon='rupee' 
          iconPosition='left'
          value = {value}
          onChange={(event) => setValue(event.target.value)}

          />
        </Form.Group>

        <Segment compact>
            <Checkbox 
                toggle 
                label= 'Is Expense?' 
                checked = {isExp}
                onChange={() => setIsExp((oldState) => !oldState)}
            />
        </Segment>
    </>
  )
}

export default EntryForm
