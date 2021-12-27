import { Component } from 'react';
import {
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
} from 'reactstrap';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        validate: {
          emailState: '',
          passwordState: '',
        },
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange = (event) => {
      const { target } = event;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const { name } = target;
  
      this.setState({
        [name]: value,
      });
    };
  
    validateEmail(e) {
      const emailRex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
      const { validate } = this.state;
  
      if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success';
      } else {
        validate.emailState = 'has-danger';
      }
  
      this.setState({ validate });
    }
    validatePassword(e) {
        
        const { validate } = this.state;
    
        if (e.target.value.length>6) {
          validate.passwordState = 'has-success';
        } else {
          validate.passwordState = 'has-danger';
        }
    
        this.setState({ validate });
      }
  
    submitForm(e) {
      e.preventDefault();
      console.log(`Email: ${this.state.email}`);
    }
  
    render() {
      const { email, password } = this.state;
  
      return (
        <div className="App">
          <h2>Sign In</h2>
          <Form className="form" onSubmit={(e) => this.submitForm(e)}>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email Address"
                valid={this.state.validate.emailState === "has-success"}
                invalid={this.state.validate.emailState === "has-danger"}
                value={email}
                onChange={(e) => {
                  this.validateEmail(e);
                  this.handleChange(e);
                }}
              />
              <FormFeedback>
                Uh oh! Looks like there is an issue with your email. Please input
                a correct email.
              </FormFeedback>
              <FormFeedback valid>
                That's a tasty looking email you've got there.
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                valid={this.state.validate.passwordState === "has-success"}
                invalid={this.state.validate.passwordState === "has-danger"}
                id="examplePassword"
                placeholder="Password"
                value={password}
                onChange={(e) =>{
                    this.validatePassword(e);
                    this.handleChange(e);
                }}
              />
              <FormFeedback>
                Password length has to be over 6 letters.
              </FormFeedback>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      );
    }
  }
  
  export default App;