import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';
//import { useDispatch } from 'react-redux';
//import { addEntryRedux } from '../actions/entries.actions';
//import { useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import useEntryDetails from '../hooks/useEntryDetails';

function NewEntryForm() {
  const {
        desc, 
        setDesc, 
        value, 
        setValue, 
        isExp, 
        setIsExp,
        addEntry
    } = useEntryDetails();
  
  return (
    <Form unstackable>
        <EntryForm 
            desc = {desc}
            value = {value}
            isExp = {isExp}
            setDesc = {setDesc}
            setValue = {setValue}
            setIsExp = {setIsExp}
        />

        <ButtonSaveOrCancel addEntry = {addEntry} />
      </Form>
  )
}

export default NewEntryForm
