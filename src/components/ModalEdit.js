import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'
import { useDispatch } from 'react-redux'
import useEntryDetails from '../hooks/useEntryDetails';
import { closeEditModal } from '../actions/modals.actions';

function ModalEdit({
    isOpen, 
    desc, 
    value, 
    isExp, 
    id
}) 

{
    const dispatch = useDispatch();
    const entryUpdate = useEntryDetails(desc, value, isExp);
  return (
    <Modal open = {isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm 
            desc = {entryUpdate.desc}
            value = {entryUpdate.value}
            isExp = {entryUpdate.isExp}
            setDesc = {entryUpdate.setDesc}
            setValue = {entryUpdate.setValue}
            setIsExp = {entryUpdate.setIsExp}
        />
       </Modal.Content>
       <Modal.Actions>
        <Button onClick={() => entryUpdate.updateEntry(id)} positive>OK</Button>
        <Button onClick={() => dispatch(closeEditModal())} >Close</Button>
       </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit
