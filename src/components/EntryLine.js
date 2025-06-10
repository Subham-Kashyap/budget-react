import { Grid, Icon, Segment } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { removeEntryRedux } from '../actions/entries.actions';
import { openEditModal } from '../actions/modals.actions';

function EntryLine(
    {   
        id,
        desc, 
        value, 
        isExp = false,
        formattedValue = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
            }).format(value)
    }
    ) 
    
{
    const dispatch = useDispatch();
  return (
    <>
        <Segment color={isExp === true ? 'red' : 'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>{desc}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>{formattedValue}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered onClick = {() => dispatch(openEditModal(id))}></Icon>
              <Icon name='trash' bordered onClick = {() => dispatch(removeEntryRedux(id))}></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
    
  )
}

export default EntryLine
