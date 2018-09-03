import React, { Component  } from 'react';
import Well from 'react-bootstrap/lib/Well';
import {datetimepicker} from 'react-bootstrap' ;

import {Panel,Button,Col,PageHeader,ControlLabel,  FormControl,  HelpBlock,  FormGroup,  Checkbox,
  Form,  Radio,  InputGroup,  Glyphicon } from 'react-bootstrap';

  class Configuration extends Component  {

    constructor(props) {
      super(props) ;
      this.state = {
        title : "Configuration" ,
      } ;
    }

  //  var DateTimeField = require('react-bootstrap-datetimepicker') ;
    render () {}
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
            <datetimepicker mode="time"/>
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
}

export default Configuration;
