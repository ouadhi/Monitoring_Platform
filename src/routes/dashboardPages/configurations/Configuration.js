import React, { PropTypes } from 'react';
import Well from 'react-bootstrap/lib/Well';

import {
  Panel,
  Button,
  Col,
  PageHeader,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  Glyphicon } from 'react-bootstrap';




  const title = 'Configuration';
  var DateTimeField = require('react-bootstrap-datetimepicker') ;
  function showmodel () {
    console.log("model");
  }
  function displayDeclaration(props, context) {
    context.setTitle(title);
    return (
      <div>
        <div className="col-lg-12">
          <PageHeader>{title}</PageHeader>
        </div>

        <div className="col-lg-12">
          <Panel header={<span>Echange Crone </span>} >
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Debarquement Crone</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="1">30min</option>
                <option value="2">1h </option>
                <option value="3">1h:30min</option>
                <option value="4">2h</option>
                <option value="5">2h:30min</option>
              </FormControl>
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Parc visite  Crone</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="1">30min</option>
                <option value="2">1h </option>
                <option value="3">1h:30min</option>
                <option value="4">2h</option>
                <option value="5">2h:30min</option>
              </FormControl>
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Sortie Physique Crone</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="1">30min</option>
                <option value="2">1h </option>
                <option value="3">1h:30min</option>
                <option value="4">2h</option>
                <option value="5">2h:30min</option>
              </FormControl>
            </FormGroup>
          </Panel>

          <Panel header={<span> Optimisation DB </span>} >
          <DateTimeField mode="time"/>
            <FormGroup>
              <Button type="submit">Submit Button</Button>
              {'  '}
              <Button type="reset">Reset Button</Button>
            </FormGroup>
          </Panel>

        </div>

      </div>
    );
  }

  displayDeclaration.contextTypes = { setTitle: PropTypes.func.isRequired };
  export default displayDeclaration;
