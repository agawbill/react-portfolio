import React, { useState, useReducer } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import styles from "./EmailForm.module.css";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../components/UI/Spinner/Spinner";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  category: "",
  message: ""
};

const emailReducer = (emailState, action) => {
  switch (action.type) {
    case "FIRSTNAME":
      return {
        ...emailState,
        firstName: action.value
      };
    case "LASTNAME":
      return {
        ...emailState,
        lastName: action.value
      };
    case "EMAIL":
      return {
        ...emailState,
        email: action.value
      };
    case "SUBJECT":
      return {
        ...emailState,
        subject: action.value
      };
    case "CATEGORY":
      return {
        ...emailState,
        category: action.value
      };
    case "MESSAGE":
      return {
        ...emailState,
        message: action.value
      };
    case "RESET":
      return {
        ...initialState
      };
    default:
      throw new Error("we shouldn't have gotten here");
  }
};

const EmailForm = props => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, initialState);
  const { sendRequest, loading, done, error } = useFetch();
  const [validated, setValidated] = useState(true);

  let complete = null;

  let validatedMessage = null;

  let submit = "Submit";

  const checkValidation = event => {
    event.preventDefault();
    if (
      emailState.firstName === "" ||
      emailState.lastName === "" ||
      emailState.email === "" ||
      emailState.message === "" ||
      emailState.subject === "" ||
      emailState.category === ""
    ) {
      console.log("hello");
      setValidated(false);
    } else {
      setValidated(true);
      submitHandler();
    }
  };

  const submitHandler = async () => {
    const body = {
      name: `${emailState.firstName} ${emailState.lastName}`,
      email: emailState.email,
      subject: emailState.subject,
      category: emailState.category,
      message: emailState.message
    };
    await sendRequest(body, "POST");

    dispatchEmail({ type: "RESET" });
  };

  if (loading) {
    submit = <Spinner size="button" />;
  }

  if (!validated) {
    validatedMessage = (
      <span className={styles.Error}>All fields must be filled out</span>
    );
  } else {
    validatedMessage = null;
  }

  if (done) {
    complete = (
      <span className={styles.Complete}>Email sent successfully!</span>
    );
  } else if (error) {
    complete = (
      <span className={styles.Error}>
        Sorry, an error occurred. Please try again.
      </span>
    );
  }

  return (
    <Form onSubmit={checkValidation}>
      <Form.Label>Name</Form.Label>
      <Form.Group>
        <Form.Row>
          <Col>
            <Form.Control
              placeholder="First name"
              value={emailState.firstName}
              onChange={event =>
                dispatchEmail({
                  type: "FIRSTNAME",
                  value: event.target.value.trim()
                })
              }
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Last name"
              value={emailState.lastName}
              onChange={event =>
                dispatchEmail({
                  type: "LASTNAME",
                  value: event.target.value.trim()
                })
              }
            />
          </Col>
        </Form.Row>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>

        <Form.Control
          type="email"
          placeholder="Enter email"
          value={emailState.email}
          onChange={event =>
            dispatchEmail({ type: "EMAIL", value: event.target.value.trim() })
          }
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Subject</Form.Label>

        <Form.Control
          placeholder="Subject"
          value={emailState.subject}
          onChange={event =>
            dispatchEmail({ type: "SUBJECT", value: event.target.value.trim() })
          }
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Category</Form.Label>

        <Form.Control
          as="select"
          value={emailState.category}
          onChange={event =>
            dispatchEmail({
              type: "CATEGORY",
              value: event.target.value.trim()
            })
          }
        >
          <option></option>
          <option>...</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>

        <InputGroup>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            value={emailState.message}
            onChange={event =>
              dispatchEmail({
                type: "MESSAGE",
                value: event.target.value.trim()
              })
            }
          />
        </InputGroup>
      </Form.Group>

      <Button variant="primary" type="submit" style={{ width: "80px" }}>
        {submit}
      </Button>
      {complete}
      {validatedMessage}
    </Form>
  );
};

export default EmailForm;
