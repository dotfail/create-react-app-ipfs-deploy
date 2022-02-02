import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import logoTexture from './images/metachapel-welcome.png';
import skyTexture from './images/sky.jpg';
import floorTexture from './images/floor.jpg';
import cubeSculpture from './sculptures/sculpture.glb';


class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render () {
        return (
            <Scene>
                <a-assets>
                    <img id="sky" alt="sky" src={skyTexture} />
                    <img id="groundTexture" alt="floor texture" src={floorTexture} />
                    <img id="pdx" alt="logo" src={logoTexture} />
                    <a-asset-item id="sculpture" src={cubeSculpture}></a-asset-item>
                </a-assets>
                <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
                <Entity particle-system={{preset: 'dust', color: '#0000FF,#FF0000', particleCount: 20000}}/>
                <a-sky src="#sky"/>
                <a-gltf-model src="#sculpture" position="0 0 -6"></a-gltf-model>
                <a-image src="#pdx" width="10" height="5" position="-2 1.2 -3"
    scale="0.2 0.2 0.2"/>
            </Scene>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));