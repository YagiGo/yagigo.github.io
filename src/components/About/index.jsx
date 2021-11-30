import React, {Component} from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneSquare, faEnvelope, faMapMarkerAlt, faCode,} from "@fortawesome/free-solid-svg-icons";

class About extends Component {
    render() {
        return (
            <div>
                <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                    <div className="my-auto">
                        <h1 className="mb-0">Wu
                            <span className="text-primary">Zhaoxin</span>
                        </h1>
                        <div className="subheading mb-5">ゴ　ショウキン</div>
                        <div className="subheading mb-5">フロント・サーバーサイド　Web Developer<br />
                            <div className="phone-number">
                                <FontAwesomeIcon className='fas' icon={faPhoneSquare} />
                                080-9825-6504
                            </div>
                            <div className="email">
                                <FontAwesomeIcon className='far' icon={faEnvelope} />
                                <a href="mailto:wuzhaoxin1995@hotmail.com">jeremywu1995@gmail.com</a>
                            </div>
                            <div className="address">
                                <FontAwesomeIcon className="fas" icon={faMapMarkerAlt} />
                                〒305-8577　茨城県つくば市天王台1-1-1
                            </div>
                        </div>
                        <p className="lead mb-5">
                            フロント・サイバサイドのまわり、フルスタックを目指して日々コーディングをしています。
                            現在モバイルファーストレスポンシブデザイン（Mobile-first responsive design）にRESTfulで大規模なサイバサイド構築をやっています
                        </p>
                        <div className="social-icons">
                            <a href="https://github.com/YagiGo">
                                <FontAwesomeIcon className="fab" icon={faCode} alt="githubはこちら" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;