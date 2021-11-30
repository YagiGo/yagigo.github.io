import React, {Component} from 'react';

class Projects extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                <div className="my-auto">
                    <h2 className="mb-0">Project</h2>
                    <div className="subheading mb-5"><small>今まで行なったプログラミングプロジェクトについて紹介します</small></div>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">エッジコンピューティングによるモバイルデバイス向けのウェブブラウザ</h3>
                            <div className="subheading mb-3">大学院の研究内容</div>
                            <p>エッジサーバーは代理人として稼働し、クラアント側の負担を減らすことを目指す。この目標を実現するために二つの手法を提案する。
                                一つの手法はエッジキャッシュと呼ばれる。エッジサーバーは一つのウェブページを丸ごとにキャッシュすることが可能になる。ユーザーはあるキャッシュされたウェブサイトをアクセスするときに、
                                エッジサーバーはそのサイトのファイルをまとめ、ユーザーに送る。それに、エッジキャッシュは学習で自動的にキャッシュを更新することができる。従来のウェブページダウンロードと比べると、接続数を減らし、
                                ウェブページのローディング時間を短縮することができる。もう一つの手法はエッジレンダリングである。ウェブページのローディングの中に重いタスクをエッジサーバーにオフロードすることにより、更にウェブページダウンロード時間を短縮することが可能になる。
                            </p>
                            <p>[研究キーワード]Edge Computing、ウェブブラウザ、キャッシュ 、ウェブレンダリング</p>
                            <p>[実装に使用した言語・フレームワーク]Python, JavaScript, NodeJS, PhantomJS</p>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">ディープラーニングの方法でオンラインレビュー向けの感情分析システム</h3>
                            <div className="subheading mb-3">大学の卒論研究内容</div>
                            <p>オンラインショッピングサイトでの商品レビューをPythonで開発した分散ウェブクローラを利用してゲットしてそのレビューデータを利用し、自然言語処理方法（主にディープラーニング）による分析し、感情分析用のモデルを作り、そのモデルで感情分析システムを作成した。このシステムを利用すれば、オンラインレビュー（ニュースコメント、商品やレストランのレビューなど）の感情分析ができる。</p>
                            <p>[研究キーワード]自然言語処理、データクローリング、ディープラーニング</p>
                            <p>[実装に使用した言語・フレームワーク]Python, Tensorflow</p>
                            <div className="os-ref mr-auto">
                                <a href="https://github.com/YagiGo/FeedbackSentimentClassfication">https://github.com/YagiGo/FeedbackSentimentClassfication</a>
                            </div>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">YPTN Profiler</h3>
                            <div className="subheading mb-3">個人プロジェクト</div>
                            <p>YPTN
                                Profilerとはウェブページパフォーマンスの分析ツールです。ウェブページのURLを入力するだけで、ウェブページの接続の請求や請求されるファイルの種類とサイズなどの情報が滝グラフで直観的に表示できる。Flaskによるサーバーで簡単にデプロイできる。<br/>GoogleやFirefoxのDeveloper
                                    Toolsと似てるところもありますが、
                                    APIを提供するので、他のプログラムで簡単に使えます。
                            </p>
                            <p>[実装に使用した言語・フレームワーク]Python, JavaScript</p>
                            <div className="os-ref mr-auto">
                                <a href="https://github.com/YagiGo/YPTN_Profiling_Server">https://github.com/YagiGo/YPTN_Profiling_Server</a>
                            </div>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">個人ブログサイト</h3>
                            <div className="subheading mb-3">個人プロジェクト</div>
                            <p>バックエンド Flask+Nginx フロントエンド jQuery, Bootstrap データベースSQLite
                                Markdown機能を支援するブログです。</p>
                            <p>[実装に使用した言語・フレームワーク]Python, JavaScript, jQuery, Bootstrap, SQLite</p>
                            <div className="os-ref mr-auto">
                                <a href="https://www.zhaoxinblog.com">https://www.zhaoxinblog.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;