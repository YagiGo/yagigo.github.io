import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhoneSquare, faEnvelope, faBlog} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

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
                        </div>
                        <p className="lead mb-5">
                            フロント・サイバサイドのまわり、フルスタックを目指して日々コーディングをしています。
                            現在モバイルファーストレスポンシブデザイン（Mobile-first responsive design）にRESTfulで大規模なサイバサイド構築をやっています。
                            <br/>
                            GitHubと個人ブログをチェックしたいなら、次のボタンを押してみ！
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

export default About;