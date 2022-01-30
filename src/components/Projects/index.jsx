import React, {Component} from 'react';
import {withNamespaces} from "react-i18next";
class Projects extends Component {
    render() {
        const {t} = this.props;
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                <div className="my-auto">
                    <h2 className="mb-0">Work</h2>
                    <div className="resume-item d-flex flex-column flex-md-row mb-3">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Softbank Corp.</h3>
                            <div className='subheading'>Axross-AI (ongoing)</div>
                            <div className='subheading mb-3'>Front-End, Back-End</div>
                            <p className='lead'>
                                <a href="https://axross-recipe.com" target="_blank" rel="noreferrer">Axross</a> is a online education service which provides AI related learning materials for developers who are not very familiar with AI field.
                                <ul>
                                    <li>Building stable and maintainable front-end codebases using TypeScript, React and nextJS.</li>
                                    <li>Building corresponding RESTful APIs and related back-end services using Ruby and Ruby on Rails.</li>
                                    <li>Designing and implementing UI from scratch while working closely with other developers to make sure consistent API and interface integration. </li>
                                    <li>Creating mobile-first responsive templates with modern CSS techniques and JavaScript libraries.</li>
                                    <li>Conducting unit tests and E2E tests with automated workflow.</li>
                                    <li>Maintaining current infrastructure with 3-rd party libraries. As well as performing bugs fixes and helping out other developers along the process. </li>
                                    <li>Ensuring proper documentation and reports in all stages of product life cycle. Managing and tracking progresses with tools such as Jira and agile methodology.</li>
                                </ul>
                                <p>[Tech Stack] TypeScript/NextJS/Webpack/ESLint, Ruby/Ruby on Rails/MySQL/redis, GCP/Github etc.</p>
                            </p>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row mb-3">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Softbank Innoventure Corp.</h3>
                            <div className='subheading'>Human Resource Tool (2019-2020)</div>
                            <div className='subheading mb-3'>Front-End, Back-End</div>
                            <p className='lead'> Implementing and maintaining an internal HR tool to help employees who seek to start a business find partners. It also provides SNS features and is seamlessly integrated with both internal and external platforms such as HubSpot.
                                <ul>
                                    <li>Building stable and maintainable front-end codebases using jQuery and bootstrap.</li>
                                    <li>Building related back-end services with PHP.</li>
                                    <li>Designing and implementing UI from scratch while working closely with other developers to make sure consistent API and interface integration. </li>
                                    <li>Integrating 3rd-party platforms such as SendGrid and HubSpot.</li>
                                    <li>Maintaining current infrastructure with 3-rd party libraries. As well as performing bugs fixes and helping out other developers along the process. </li>
                                    <li>Ensuring proper documentation and reports in all stages of product life cycle. Managing and tracking progresses with tools such as Jira and agile methodology.</li>
                                </ul>
                                <p>[Tech Stack] JavaScript/jQuery/Bootstrap/PHP/AWS etc.</p>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withNamespaces()(Projects);