import React from 'react';
import './Main.css';
import image from '../profile-picture.jpg';

export class Main extends React.Component {
    render() {
        return(
            <div className="flexbox">
                <h2 className="title">Hey! I am Luísa</h2>
                <p className="content">I am a front-end developer who loves to create things
                    using React.js, JavaScript and CSS. I also have been
                    learning some UX Design and another passion of mine is
                    to write and try to make the world a better place through
                    my words. Finally, I am an assumed foodie and travel 
                    enthusiast.
                </p>
                <img className="picture" src={image} />
            </div>
        );
    }
}