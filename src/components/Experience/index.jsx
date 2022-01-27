import React, {Component} from 'react';
import {withNamespaces} from "react-i18next";
class Experience extends Component {
    render() {
        const {t} = this.props;
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div className="my-auto">
                    <h2 className="mb-5">Education & Work Experience</h2>
                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">{t('experience.college.name')}</h4>
                            <div className="subheading mb-3"><small>{t('experience.college.major')}</small></div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">{t('experience.college.duration')}</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">{t('experience.graduate_school.name')}</h4>
                            <div className="subheading mb-3"><small>{t('experience.graduate_school.major')}</small></div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">{t('experience.graduate_school.duration')}</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">{t('experience.internship.location')}</h4>
                            <div className="subheading mb-0"><small>{t('experience.internship.name')}</small></div>
                            <div className="subheading mb-1"><small>{t('experience.internship.type')}</small></div>
                            <p>{t('experience.internship.content')}</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">{t('experience.internship.duration')}</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">{t('experience.part_time.location')}</h4>
                            <div className="subheading mb-0"><small> {t('experience.part_time.name')}</small></div>
                            <div className="subheading mb-1"><small>{t('experience.part_time.type')}</small></div>
                            <p>{t('experience.part_time.content')}</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">{t('experience.part_time.duration')}</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">{t('experience.full_time.location')}</h4>
                            <div className="subheading mb-0"><small> {t('experience.full_time.name')}</small></div>
                            <div className="subheading mb-1"><small>{t('experience.full_time.type')}</small></div>
                            <p>{t('experience.full_time.content')}</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">{t('experience.part_time.duration')}</span>
                        </div>
                    </div>

                    {/*<div className="resume-item d-flex flex-column flex-md-row mb-5">*/}
                    {/*    <div className="resume-content mr-auto">*/}
                    {/*        <h4 className="mb-0">{t('experience.english.level')}</h4>*/}
                    {/*        <p>{t('experience.english.note')}</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="resume-item d-flex flex-column flex-md-row mb-5">*/}
                    {/*    <div className="resume-content mr-auto">*/}
                    {/*        <h4 className="mb-0">{t('experience.japanese.level')}</h4>*/}
                    {/*        <p>{t('experience.japanese.note')}</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="resume-item d-flex flex-column flex-md-row mb-5">*/}
                    {/*    <div className="resume-content mr-auto">*/}
                    {/*        <h4 className="mb-0">{t('experience.chinese.level')}</h4>*/}
                    {/*        <p>{t('experience.chinese.note')}</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </section>
        );
    }
}

export default withNamespaces()(Experience);