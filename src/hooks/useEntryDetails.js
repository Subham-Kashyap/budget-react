import { useDispatch } from 'react-redux';
import { addEntryRedux, updateEntryRedux } from '../actions/entries.actions';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { closeEditModal } from '../actions/modals.actions';

function useEntryDetails(descNew = '', valNew ='', isExpNew = true) {

    const[desc, setDesc] = useState(descNew);
    const[value, setValue] = useState(valNew);
    const[isExp, setIsExp] = useState(isExpNew);
    const dispatch  = useDispatch();

    useEffect(() => {
        setDesc(descNew);
        setValue(valNew);
        setIsExp(isExpNew);
    }, [descNew, valNew, isExpNew]);

    function updateEntry(id){
        dispatch(
            updateEntryRedux(
                id,
                {
                id,
                desc,
                value,
                isExp  
                }
            )
        );
        dispatch(closeEditModal());
        resetValues();
    }

    function addEntry(){
        dispatch(
            addEntryRedux({
                id: uuidv4(),
                desc,
                value,
                isExp
            })
        );
        resetValues();
    }

    function resetValues(){
        setDesc('');
        setValue('');
        setIsExp(true);
    }

    return {
        desc, 
        setDesc, 
        value, 
        setValue, 
        isExp, 
        setIsExp,
        addEntry,
        updateEntry
    };
}

export default useEntryDetails
