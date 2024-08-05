import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
export const Auth = () => {
  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="violet" textAlign="center">
          Welcome ! Login By Registering as a guest below
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button color="violet" size="large" fluid>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
