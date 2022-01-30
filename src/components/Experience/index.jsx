import React, {Component} from 'react';
import {withNamespaces} from "react-i18next";
class Experience extends Component {
    render() {
        const {t} = this.props;
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div className="my-auto">
                    <h2 className="mb-5">Education</h2>
                    {/*<div className="resume-item d-flex flex-column flex-md-row">*/}
                    {/*    <div className="resume-content mr-auto">*/}
                    {/*        <h4 className="mb-0">{t('experience.internship.name')}</h4>*/}
                    {/*        <div className="subheading mb-0"><small>{t('experience.internship.location')}</small></div>*/}
                    {/*        <div className="subheading mb-1"><small>{t('experience.internship.type')}</small></div>*/}
                    {/*        <p>{t('experience.internship.content')}</p>*/}
                    {/*    </div>*/}
                    {/*    <div className="resume-date text-md-left">*/}
                    {/*        <span className="text-primary">{t('experience.internship.duration')}</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">{t('experience.graduate_school.name')} ({t('experience.graduate_school.degree')})</h4>
                            <div className="subheading mb-3"><small>{t('experience.graduate_school.major')}</small></div>
                            <p className='lead'>
                                <p>
                                    <ul>
                                        <li>{t('experience.graduate_school.details.row1')}</li>
                                        <li>{t('experience.graduate_school.details.row2')}</li>
                                        <li>{t('experience.graduate_school.details.row3')} <strong>{t('experience.graduate_school.paper.title')}</strong>{t('experience.graduate_school.paper.citation')}</li>
                                        <li>{t('experience.graduate_school.details.row4')}</li>
                                    </ul>
                                </p>
                            </p>
                        </div>
                        <div className="resume-date text-md-left">
                            <span className="text-primary">{t('experience.graduate_school.duration')}</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">{t('experience.college.name')} ({t('experience.college.degree')})</h4>
                            <div className="subheading mb-3"><small>{t('experience.college.major')}</small></div>
                            <p className='lead'>
                                <p>
                                    <ul>
                                        <li>{t('experience.college.details.row1')}</li>
                                        <li>{t('experience.college.details.row2')}</li>
                                        <li>{t('experience.college.details.row3')}</li>
                                    </ul>
                                </p>
                            </p>
                        </div>
                        <div className="resume-date text-md-left">
                            <span className="text-primary">{t('experience.college.duration')}</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withNamespaces()(Experience);