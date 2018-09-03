
import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Pagination from 'react-bootstrap/lib/Pagination';
import Well from 'react-bootstrap/lib/Well';
import {MenuItem ,DropdownButton,Panel, PageHeader, ListGroup, ListGroupItem, Button,} from 'react-bootstrap';
import s from './Home.css';
import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title : 'Platforme CNTSID',
    };
  }

  render () {

    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Platfome d'Echange douane DPwold </PageHeader>
          </div>
        </div>
        {/* message envoyer  */}
        <div className="page-header">
          <h1> <small>Message envoyer</small></h1>
        </div>
        <div className="row" >
          <div className="col-lg-3 col-md-6">
            <StatWidget
              style="panel-primary"
              icon="fa fa-comments fa-5x"
              count="26"
              headerText="Manifest"
              footerText="Details"
              linkTo="/"
              />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatWidget
              style="panel-green"
              icon="fa fa-tasks fa-5x"
              count="12"
              headerText="Declaration"
              footerText="Details"
              linkTo="/"
              />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatWidget
              style="panel-yellow"
              icon="fa fa-shopping-cart fa-5x"
              count="124"
              headerText="Enlever"
              footerText="Details"
              linkTo="/"
              />
          </div>
        </div>

        {/*message reçu  */}
        <div className="page-header">
          <h1> <small>Message reçu</small></h1>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <StatWidget
              style="panel-primary"
              icon="fa fa-table fa-5x"
              count="26"
              headerText="Manifest"
              footerText="Details"
              linkTo="/"
              />
          </div>

          <div className="col-lg-3 col-md-6">
            <StatWidget
              style="panel-green"
              icon="fa fa-tasks fa-5x"
              count="12"
              headerText="Declaration"
              footerText="Details"
              linkTo="/"
              />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatWidget
              style="panel-yellow"
              icon="fa fa-shopping-cart fa-5x"
              count="124"
              headerText="Enlever"
              footerText="Details"
              linkTo="/"
              />
          </div>
        </div>

        {/*Tabela d'action de joure */}
        <div className="row">
          <div className="col-lg-12">
            <Panel header={<span> les dernières actions </span>} >
              <div>
                <div className="dataTable_wrapper">
                  <div
                    id="dataTables-example_wrapper"
                    className="dataTables_wrapper form-inline dt-bootstrap no-footer"
                    >

                    <div className="row">
                      <div className="col-sm-9">
                        <div className="dataTables_length" id="dataTables-example_length">

                          <label htmlFor={'show'}> Show
                            <select
                              name="dataTables-example_length"
                              aria-controls="dataTables-example"
                              className="form-control input-sm"
                              id="show"
                              >
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>
                            entries
                          </label>

                        </div>
                      </div>
                      {/*rechreche */}
                      <div className="col-sm-3">
                        <div id="dataTables-example_filter" className="dataTables_filter">
                          <label htmlFor={'search'}>Search:
                            <input
                              type="search"
                              className="form-control input-sm"
                              placeholder=""
                              aria-controls="dataTables-example"
                              id="search"
                              />
                          </label>
                        </div>
                      </div>

                    </div>
                    {/* tableau des action */}
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          className="table table-striped table-bordered table-hover dataTable no-footer"
                          id="dataTables-example"
                          role="grid"
                          aria-describedby="dataTables-example_info"
                          >

                          {/* l'entete de  tableau */}
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting_asc"
                                tabIndex="0"
                                aria-controls="dataTables-example"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Rendering engine: activate to sort column descending"
                                aria-sort="ascending"
                                style={{ width: 265 }}
                                >
                                Action
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="dataTables-example"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Browser: activate to sort column ascending"
                                style={{ width: 321 }}
                                >
                                Type
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="dataTables-example"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Platform(s): activate to sort column ascending"
                                style={{ width: 299 }}
                                >
                                adresse
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="dataTables-example"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Engine version: activate to sort column ascending"
                                style={{ width: 231 }}
                                >
                                Debut
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="dataTables-example"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="CSS grade: activate to sort column ascending"
                                style={{ width: 180 }}
                                >
                                Fin
                              </th>
                            </tr>
                          </thead>


                          <tbody>
                            <tr className="gradeA odd" role="row">
                              <td className="sorting_1">Debarquement</td>
                              <td>Get</td>
                              <td>DPwold</td>
                              <td className="center">2018-08-08 10:00</td>
                              <td className="center">2018-08-08 12:00</td>
                            </tr>
                            <tr className="gradeA odd" role="row">
                              <td className="sorting_1">Debarquement</td>
                              <td>Get</td>
                              <td>DPwold</td>
                              <td className="center">2018-08-08 10:00</td>
                              <td className="center">2018-08-08 12:00</td>
                            </tr>
                            <tr className="gradeA odd" role="row">
                              <td className="sorting_1">Debarquement</td>
                              <td>Get</td>
                              <td>DPwold</td>
                              <td className="center">2018-08-08 10:00</td>
                              <td className="center">2018-08-08 12:00</td>
                            </tr>
                          </tbody>

                        </table>
                      </div>
                    </div>


                    <div className="row">
                      <div className="col-sm-6">
                        <div
                          className="dataTables_info"
                          id="dataTables-example_info"
                          role="status"
                          aria-live="polite"
                          >
                          Showing 1 to 10 of 57 entries
                        </div>
                      </div>
                      <div className="col-sm-6 pullRight " >
                        <Pagination
                          activePage={1}
                          items={6}
                          first
                          last
                          prev
                          next
                          onSelect={() => {
                            // function for Pagination
                          }}
                          />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
