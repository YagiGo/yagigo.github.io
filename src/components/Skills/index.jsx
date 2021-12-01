import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPython, faJs, faNodeJs, faReact} from "@fortawesome/free-brands-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

class Skills extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">利用経験ある言語・フレームワーク・ツール<br/><small>（詳しくはアイコンをクリックしてください）</small></div>
                    <ul className="fa-ul mb-2" style={{fontSize: '120%'}}>
                        <li>
                            <FontAwesomeIcon icon={faPython} className="pr-sm-1"/>
                            <strong>Python</strong><br/>使用歴3年。ウェブクローラの開発、ウェブバックエンドの開発、データプラットフォームの開発をする時を利用します。(Django, Flaskなど)
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faJs} className="pr-sm-1"/>
                            <strong>JavaScript</strong><br/>使用歴2年。ウェブフロントエンドの開発、サーバー側の開発をする時利用します。
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faReact} className="pr-sm-1"/>
                            <strong>React</strong><br/>使用歴2年。ウェブフロントエンドの開発（React, NextJS, reduxなど）
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faNodeJs} className="pr-sm-1"/>
                            <strong>NodeJS</strong><br/>使用歴1年。ミドルウェアの開発など
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="pr-sm-1"/>
                            <strong>Ruby/Ruby on Rails</strong><br/>使用歴1年。サーバサイドの開発
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck}/>
                            <strong>SQLデータベース</strong><br/>MySQL、SQLite3<br/>アプリを開発する時に使用経験があります。
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck}/>
                            <strong>NoSQLデータベース</strong><br/>MongoDB<br/>ウェブサイトのバックエンドのデータベースとして利用します。データプラットフォームを開発する時に利用します。
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck}/>
                            <strong>OS経験</strong><br/>LinuxとMacOSを開発環境として使用します。
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck}/>
                            <strong>データサイエンス</strong><br/>Scrapy, Pandas, numpy, TensorFlow<br/>授業とデータ分析で使用経験があります。
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck}/>
                            <strong>言語能力</strong><br/>中国語: 母語<br/>日本語: ビジネス会話レベル<br/>英語: ビジネス会話レベル
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Skills;