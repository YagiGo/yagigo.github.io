import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPython, faJs} from "@fortawesome/free-brands-svg-icons";
import {faCheck, faDatabase} from "@fortawesome/free-solid-svg-icons";
import {withNamespaces} from "react-i18next";
class Skills extends Component {
    render() {
        const {t} = this.props;
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">{t('skills.title')}</div>
                    <ul className="fa-ul mb-2" style={{fontSize: '120%'}}>
                        <li>
                            <FontAwesomeIcon icon={faPython} className="pr-sm-1"/>
                            <strong>{t('skills.python.name')}</strong><br/>{t('skills.python.detail')}
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faJs} className="pr-sm-1"/>
                            <strong>{t('skills.javascript.name')}</strong><br/>{t('skills.javascript.detail')}
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faJs} className="pr-sm-1"/>
                            <strong>{t('skills.typescript.name')}</strong><br/>{t('skills.typescript.detail')}
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="pr-sm-1"/>
                            <strong>{t('skills.ruby.name')}</strong><br/>{t('skills.ruby.detail')}
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faDatabase} className="pr-sm-1"/>
                            <strong>{t('skills.sql.name')}</strong>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck}/>
                            <strong>{t('skills.language.name')}</strong><br/>{t('skills.language.english.level')}:{t('skills.language.english.note')}<br/>{t('skills.language.japanese.level')}:{t('skills.language.japanese.note')}<br/>{t('skills.language.chinese.level')}:{t('skills.language.chinese.note')}
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default withNamespaces()(Skills);