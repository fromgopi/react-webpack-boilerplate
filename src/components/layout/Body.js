import React, {Component} from 'react';
import BackgroundImage from "../../img/hero-bg.jpg";

class Body extends Component {
    render() {
        return (
            <section style={{ backgroundImage: `url(${BackgroundImage})`}} className="local-section local-section-bg-set">
                <div className="local-section-bg"></div>
                <h1 className="local-section-h1">Your Service Expert in </h1>
                <h2 className="local-section-h2">Get instant access to reliable and affordable services</h2>
                <div className="local-section-location-div clearfix">
                    
                </div>
            </section>
        );
    }
}

export default Body;