import React, {Component} from 'react';
import './index.css'

class Page extends Component {
    render() {
        const {children} = this.props

        return (
            <div className="container-fluid p-0">
                {children}
            </div>
        );
    }
}
export default Page;