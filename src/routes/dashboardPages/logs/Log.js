import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';


class  Log extends  Component {
  constructor(props) {
    super(props)  ;
    this.state = {
      title : 'Log',
    } ;

  }
  
render () {

  return (
    <div>
      <div className="col-lg-12">
        <PageHeader>Logs </PageHeader>
      </div>

      <div className="col-lg-12">
        <Panel header={<span>liste des Logs</span>} >
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

                      </label>
                    </div>
                  </div>
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

                {/*  Table */}

                <div className="row">
                  <div className="col-sm-12">
                    <table
                      className="table table-striped table-bordered table-hover dataTable no-footer"
                      id="dataTables-example"
                      role="grid"
                      aria-describedby="dataTables-example_info"
                    >

                    {/* Head*/}
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
                          ID
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
                          type
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
                          Date
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
                         Description
                          </th>

                      </tr>
                      </thead>


                      <tbody>
                        <tr className="gradeA odd" role="row">
                          <td className="sorting_1">Gecko</td>
                          <td>Firefox 1.0</td>
                          <td>Win 98+ / OSX.2+</td>
                          <td className="center">1.7</td>
                        </tr>

                        <tr className="gradeA odd" role="row">
                          <td className="sorting_1">Gecko</td>
                          <td>Firefox 1.0</td>
                          <td>Win 98+ / OSX.2+</td>
                          <td className="center">1.7</td>
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
  );
}
}

export default Log ;
