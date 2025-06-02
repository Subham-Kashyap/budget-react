import React from 'react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { Form } from 'semantic-ui-react';

function NewEntryForm() {
  return (
    <Form unstackable>
        <Form.Group>
          <Form.Input 
          icon='tags' 
          width={12} 
          label = 'Description' 
          placeholder = 'Enter Description' 
          />

          <Form.Input width={4}
          label = 'Value' 
          placeholder = '100.40' 
          icon='rupee' 
          iconPosition='left'
          />
        </Form.Group>

        <ButtonSaveOrCancel />
      </Form>
  )
}

export default NewEntryForm
