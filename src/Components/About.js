import React, { Component , Fragment } from "react";

class About extends Component{
   render(){
       return(
        <Fragment>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="box-shadow py-4 px-2">
                <div>
                  <i className="fas fa-viruses virus-icon"></i>
                </div>
                <h2 className="lobster">What is COVID-19?</h2>
                <p className="combo">
                  COVID-19 is a disease caused by a new strain of coronavirus.
                  ‘CO’ stands for corona, ‘VI’ for virus, and ‘D’ for disease.
                  Formerly, this disease was referred to as ‘2019 novel
                  coronavirus’ or ‘2019-nCoV.’ The COVID-19 virus is a new virus
                  linked to the same family of viruses as Severe Acute Respiratory
                  Syndrome (SARS) and some types of common cold.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5 three-box">
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="box">
                <div>
                  <i className="fas fa-viruses virus-icon"></i>
                </div>
                <h2 className="lobster">What are the symptoms of COVID-19?  </h2>
                <p className="combo">
                  The virus is transmitted through direct contact with respiratory
                  droplets of an infected person (generated through coughing and
                  sneezing). Individuals can also be infected from and touching
                  surfaces contaminated with the virus and touching their face
                  (e.g., eyes, nose, mouth). The COVID-19 virus may survive on
                  surfaces for several hours, but simple disinfectants can kill
                  it.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="box">
                <div>
                  <i className="fas fa-viruses virus-icon"></i>
                </div>
                <h2 className="lobster">How does COVID-19 spread? </h2>
                <p className="combo">
                  The virus is transmitted through direct contact with respiratory
                  droplets of an infected person (generated through coughing and
                  sneezing). Individuals can also be infected from and touching
                  surfaces contaminated with the virus and touching their face
                  (e.g., eyes, nose, mouth). The COVID-19 virus may survive on
                  surfaces for several hours, but simple disinfectants can kill
                  it.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="box">
                <div>
                  <i className="fas fa-viruses virus-icon"></i>
                </div>
                <h2 className="lobster">Who is most at risk?</h2>
                <p className="combo">
                  We are learning more about how COVID-19 affects people every
                  day.  Older people, and people with chronic medical
                  conditions, such as diabetes and heart disease, appear to be
                  more at risk of developing severe symptoms.  As this is a new
                  virus, we are still learning about how it affects children. We
                  know it is possible for people of any age to be infected with
                  the virus, but so far there are relatively few cases of COVID-19
                  reported among children. This is a new virus and we need to
                  learn more about how it affects children. The virus can be fatal
                  in rare cases, so far mainly among older people with
                  pre-existing medical conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="box-shadow py-4 px-3">
                <div>
                  <i className="fas fa-viruses virus-icon"></i>
                </div>
                <h2 className="lobster">
                  How can the spread of COVID-19 be slowed down or prevented?
                </h2>
                <p className="combo">
                  As with other respiratory infections like the flu or the common
                  cold, public health measures are critical to slow the spread of
                  illnesses. Public health measures are everyday preventive
                  actions that include:
                </p>
                <ul className="covid-preventions">
                  <li>
                    <i className="fas fa-check"></i> Staying home when sick
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Covering mouth and nose with
                    flexed elbow or tissue when coughing or sneezing. Dispose of
                    used tissue immediately
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Washing hands often with soap and
                    water
                  </li>
                  <li>
                    <i className="fas fa-check"></i> cleaning frequently touched
                    surfaces and objects. As we learn more about COVID-19 public
                    health officials may recommend additional actions.
                  </li>
                </ul>
                <p className="combo">
                  As we learn more about COVID-19 public health officials may
                  recommend additional actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
       )
  }
}

export default About;
