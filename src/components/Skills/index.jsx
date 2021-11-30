import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPython, faJava, faJs, faHtml5, faCss3, faNodeJs} from "@fortawesome/free-brands-svg-icons";

class Skills extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">利用経験ある言語・フレームワーク・ツール<br/><small>（詳しくはアイコンをクリックしてください）</small></div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item">
                            <FontAwesomeIcon icon={faPython} data-toggle="popover" data-placement="top" title="Python" data-content="使用歴3年。ウェブクローラの開発、ウェブバックエンドの開発、データプラットフォームの開発をする時を利用します。
                             利用経験あるフレームワークはWebPy, Django, Flask, Scrapy"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-java" data-toggle="popover" data-placement="bottom" title="Java"
                               data-content="使用歴1年。アンドロイドアプリ開発する時は利用します"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-js" data-placement="bottom" data-toggle="popover" title="JavaScript"
                               data-content="使用歴2年。ウェブフロントエンドの開発、サーバー側の開発をする時利用します。利用経験のあるフレームワークはReact, jQuery,NodeJS"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-ts" data-placement="bottom" data-toggle="popover" title="JavaScript"
                               data-content="使用歴1年。ウェブフロントエンドの開発、最近割と使っています"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-html5" data-placement="bottom" data-toggle="popover" title="HTML5" data-content="使用歴2年。ウェブフロントエンドの開発"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-css3-alt" data-placement="bottom" data-toggle="popover" title="CSS" data-content="使用歴2年。ウェブフロントエンドの開発" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-react" data-toggle="popover" data-placement="bottom" title="React" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-node-js" data-placement="bottom" data-toggle="popover" title="NodeJS" />
                        </li>
                    </ul>

                    <div className="subheading mb-3">他のスキル</div>
                    <ul className="fa-ul mb-2">
                        <li>
                            <i className="fa-li fa fa-check" />
                            <strong>SQLデータベース</strong><br/>MySQL、SQLite3<br/>アプリを開発する時に使用経験があります。
                        </li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            <strong>NoSQLデータベース</strong><br/>MongoDB<br/>ウェブサイトのバックエンドのデータベースとして利用します。データプラットフォームを開発する時に利用します。
                        </li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            <strong>OS経験</strong><br/>LinuxとMacOSを開発環境として使用します。
                        </li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            <strong>データサイエンス</strong><br/>Scrapy, Pandas, numpy, TensorFlow<br/>授業とデータ分析で使用経験があります。
                        </li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            <strong>言語能力</strong><br/>中国語: 母語<br/>日本語: ビジネス会話レベル<br/>英語: ビジネス会話レベル
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Skills;