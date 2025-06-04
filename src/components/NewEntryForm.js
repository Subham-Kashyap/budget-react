import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';

function NewEntryForm({addEntry, desc, value, isExp, setDesc, setValue, setIsExp}) {
    
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
