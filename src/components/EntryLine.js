import { Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine(
    {   
        id,
        desc, 
        value, 
        isExp = false,
        deleteEntry,
        formattedValue = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
            }).format(value),
        editEntry
    }
    ) 
    
{
  return (
    <>
        <Segment color={isExp === true ? 'red' : 'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>{desc}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>{formattedValue}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered onClick = {() => editEntry(id)}></Icon>
              <Icon name='trash' bordered onClick = {() => deleteEntry(id)}></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
    
  )
}

export default EntryLine
