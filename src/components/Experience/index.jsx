import React, {Component} from 'react';

class Experience extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div className="my-auto">
                    <h2 className="mb-5">Education & Work Experience</h2>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">中国・湖南省・張家界第一高等学校</h4>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary mb-3">2010年9月 - 2013年6月</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">中国・北京交通大学</h4>
                            <div className="subheading mb-3"><small>通信工学専攻</small></div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2013年9月 - 2017年7月</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">日本・筑波大学</h4>
                            <div className="subheading mb-0"><small>システム情報工学研究科</small></div>
                            <div className="subheading mb-3"><small>コンピュターサイエンス専攻</small></div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2018年4月 - </span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">日本・東京</h4>
                            <div className="subheading mb-0"><small>ソフトバンク株式会社</small></div>
                            <div className="subheading mb-3"><small>インターンシップ</small></div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2018年8月20日 - 2018年9月14日 </span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">日本・東京</h4>
                            <div className="subheading mb-0"><small> SBイノベンチャー株式会社</small></div>
                            <div className="subheading mb-3"><small>エンジニア 長期アルバート</small></div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2019年5月 -</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">日本語能力試験N1合格</h4>
                            <p>点数：142/180</p>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">TOEIC試験</h4>
                            <p>点数：980/990</p>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">TOEFL(iBT)</h4>
                            <p>点数：110/120</p>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Experience;