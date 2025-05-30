//import logo from './logo.svg';
import { Container, Segment, Icon } from 'semantic-ui-react';
import './App.css';
import{Header, Statistic, Grid, Form, Button} from 'semantic-ui-react'

function App() {
  return (
    <Container>

      <Header as= 'h1'>
        Budget
      </Header>

      <Statistic size = 'small'>
        <Statistic.Label>Your Balance :</Statistic.Label>
        <Statistic.Value>10089.6</Statistic.Value>
      </Statistic>
      
      <Segment textAlign='center'>
        <Grid columns = {2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size = 'tiny' color='green'>
                <Statistic.Label style ={{textAlign : 'left'}}>Income:</Statistic.Label>
                <Statistic.Value>100500.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size = 'tiny' color='red'>
                <Statistic.Label style ={{textAlign : 'left'}}>Expenses:</Statistic.Label>
                <Statistic.Value>800.90</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as = 'h3'>History</Header>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something Else</Grid.Column>
            <Grid.Column width={3} textAlign='right'>Rs.800.61</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>Rs.500.61</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something New</Grid.Column>
            <Grid.Column width={3} textAlign='right'>Rs.400.61</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>Add New Transaction</Header>
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

        <Button.Group style={{marginTop:20}}>
          <Button primary>Okay</Button>
          <Button.Or/>
          <Button secondary>Cancel</Button>
        </Button.Group>

      </Form>

    </Container>
  );
}

export default App;
