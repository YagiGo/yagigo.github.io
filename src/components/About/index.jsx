import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhoneSquare, faEnvelope, faBlog} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {withNamespaces} from "react-i18next";

class About extends Component {
    render() {
        const {t} = this.props;
        return (
            <div>
                <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                    <div className="my-auto">
                        <h1 className="mb-0">{t('about.first_name')}
                            <span className="text-primary">{t('about.last_name')}</span>
                        </h1>
                        {/*<div className="subheading mb-5">ゴ　ショウキン</div>*/}
                        <div className="subheading mb-5">{t('about.title')}<br />
                            <div className="phone-number">
                                <FontAwesomeIcon className='fas' icon={faPhoneSquare} />
                                {t('about.phone')}
                            </div>
                            <div className="email">
                                <FontAwesomeIcon className='far' icon={faEnvelope} />
                                <a href={`mailto:${t('about.email')}`}>{t('about.email')}</a>
                            </div>
                        </div>
                        <p className="lead mb-5">
                            {t('about.introduction')}
                        </p>
                        <div className="social-icons">
                            <a href="https://github.com/YagiGo" >
                                <FontAwesomeIcon  icon={faGithub} />
                            </a>
                            <a href="https://yagilocker.hashnode.dev/">
                                <FontAwesomeIcon icon={faBlog} />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withNamespaces()(About);