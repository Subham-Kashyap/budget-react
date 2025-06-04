import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'

function ModalEdit({
    isOpen, 
    setIsOpen,
    desc, 
    value, 
    isExp, 
    setDesc, 
    setValue, 
    setIsExp
}) 

{
  return (
    <Modal open = {isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm 
            desc = {desc}
            value = {value}
            isExp = {isExp}
            setDesc = {setDesc}
            setValue = {setValue}
            setIsExp = {setIsExp}
        />
       </Modal.Content>
       <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={() => setIsOpen(false)} positive>OK</Button>
       </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit
