import React, { Component } from 'react';
import classNames from 'classnames';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
      messageEnvoiyerCollapsed: true,
      messageRecuCollapsed: true,

    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            {/*
            <li className="sidebar-search">
              <div className="input-group custom-search-form">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </li>
            */}

             {/*
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </a>
            </li>
            */}

             {/* Home  page  */}
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                <i className="fa fa-home fa-fw" /> &nbsp;Home
              </a>
            </li>



            {/* Message envoyer  */}
            <li className={classNames({ active: !this.state.messageEnvoiyerCollapsed})}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ messageEnvoiyerCollapsed: !this.state.messageEnvoiyerCollapsed});
                  return false;
                }}
              >
               {/* titre   */}
                <i className="fa fa-bar-chart-o fa-fw" /> &nbsp;Message envoyer
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.messageEnvoiyerCollapsed,
                  })
              }
              >

               {/* Manifest  */}
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/manifest'); }} >
                    manifest
                  </a>
                </li>

                 {/* Declaration  */}
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/declaration'); }} >
                    Declaration
                  </a>
                </li>

                {/* Conteneur a enlver */}
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/enlever'); }}
                  >
                   Conteneur
                  </a>
                </li>
              </ul>
            </li>


            {/* Message reçu  */}
            <li className={classNames({ active: !this.state.messageRecuCollapsed})}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ messageRecuCollapsed: !this.state.messageRecuCollapsed});
                  return false;
                }}
              >
               {/* titre   */}
                <i className="fa fa-bar-chart-o fa-fw" /> &nbsp;Message reçu
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.messageRecuCollapsed,
                  })
              }
              >
               {/* Debarquement */}
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/debarquement'); }} >
                    Debarquement
                  </a>
                </li>

                 {/* parc visite   */}
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/parc'); }} >
                    Parc visite
                  </a>
                </li>

                {/* sortie physique  */}
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/sortie'); }}
                  >
                  Sortie physique
                  </a>
                </li>
              </ul>
            </li>


             {/* logs */}
             <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/log'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Logs
              </a>
            </li>

             {/* Utilisateur  */}
             <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/user'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;utilisateur
              </a>
            </li>

            {/* Configuration  */}
            <li>
             <a href="" onClick={(e) => { e.preventDefault(); history.push('/configuration'); }} >
               <i className="fa fa-dashboard fa-fw" /> &nbsp;Configuration
             </a>
           </li>

            <li className={classNames({ active: !this.state.chartsElementsCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ chartsElementsCollapsed: !this.state.chartsElementsCollapsed });
                  return false;
                }}
              >
                <i className="fa fa-bar-chart-o fa-fw" /> &nbsp;Charts
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.chartsElementsCollapsed,
                  })
              }
              >
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/flotcharts'); }} >
                    FlotCharts
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/morrisjscharts'); }}
                  >
                    Morrisjs Charts
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/table'); }} >
                <i className="fa fa-table fa-fw" /> &nbsp;Tables
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/forms'); }} >
                <i className="fa fa-table fa-fw" /> &nbsp;Forms
              </a>
            </li>

            <li className={classNames({ active: !this.state.uiElementsCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ uiElementsCollapsed: !this.state.uiElementsCollapsed,
                }); return false;
                }}
              >
                <i className="fa fa-edit fa-fw" /> UI Elements<span className="fa arrow" />
              </a>

              <ul
                className={classNames({
                  'nav nav-second-level': true,
                  collapse: this.state.uiElementsCollapsed,
                })}
              >
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/panelwells'); }} >
                    Panels And Wells
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/button'); }} >
                    Buttons
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/notification'); }}
                  >
                    Notification
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/typography'); }} >
                    Typography
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/icons'); }} >
                    Icons
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/grid'); }} >
                    Grid
                  </a>
                </li>
              </ul>
            </li>

            <li className={classNames({ active: !this.state.multiLevelDropdownCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    multiLevelDropdownCollapsed: !this.state.multiLevelDropdownCollapsed,
                  });
                  return false;
                }}
              >
                <i className="fa fa-sitemap fa-fw" />
                &nbsp;Multi-Level Dropdown
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true, collapse: this.state.multiLevelDropdownCollapsed,
                  })}
              >
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); }}>Second Level Item</a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); }}>Second Level Item</a>
                </li>
                <li className={classNames({ active: !this.state.thirdLevelDropdownCollapsed })}>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({
                        thirdLevelDropdownCollapsed: !this.state.thirdLevelDropdownCollapsed,
                      });
                      return false;
                    }}
                  >
                    Third Level<span className="fa arrow" />
                  </a>
                  <ul
                    className={
                      classNames({
                        'nav nav-second-level': true,
                        collapse: this.state.thirdLevelDropdownCollapsed,
                      })}
                  >
                    <li>
                      <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                    </li>
                    <li>
                      <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                    </li>
                    <li>
                      <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                    </li>
                    <li>
                      <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className={classNames({ active: !this.state.samplePagesCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    samplePagesCollapsed: !this.state.samplePagesCollapsed,
                  });
                  return false;
                }}
              >
                <i className="fa fa-files-o fa-fw" />
                &nbsp;Sample Pages
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.samplePagesCollapsed,
                  })}
              >

                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/blank'); }} >
                    Blank
                  </a>
                </li>
                <li>

                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/login'); }} >
                    Login
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="http://www.strapui.com/">Premium React Themes</a>
            </li>
          </ul>
        </div>
        
      </div>
    );
  }
}


export default Sidebar;
