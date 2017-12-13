import React, { Component } from 'react';
import * as THREE from 'three';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import Particle from '../../../static/particle.png';
import OrbitControls from 'three-orbitcontrols';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        classNames="fade"
        unmountOnExit={true}
    >
        {children}
    </CSSTransition>
);



class Scene extends Component {
    constructor(props) {
        super(props);

        this.createParticles = this.createParticles.bind(this);
        this.renderScene = this.renderScene.bind(this);
        this.start = this.start.bind(this);
        this.animate = this.animate.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }



    componentDidMount() {
        setTimeout(() => {
            this.props.handleAnimation();
        }, 1500);


        const controls = {
            size:10,
            transparent:true,
            opacity: 1,
            vertexColors:true,
            color:0xffffff,
            sizeAttenuation:true,
            rotateSystem:true
        };
        const ParticleColor = ['#e4007f', '#e60012', '#f39800', '#90c31f', '#00a0e9', '#efd200', '#8f82bc'];
        let cloud = null;


        const scene = new THREE.Scene();
        const rotation = 0;

        const renderer = new THREE.WebGLRenderer( {antialias: true} );
        renderer.setClearColor (0x00FFFFFF, 1);
        renderer.setSize(windowWidth, windowHeight);

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(250, 10, 50);
        this.createParticles(controls.size, controls.transparent, controls.opacity, controls.vertexColors, controls.sizeAttenuation, controls.color);
        this.start();

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.cloud = cloud;
        this.rotation = rotation;
        this.ParticleColor = ParticleColor;
        this.mount.appendChild(this.renderer.domElement);
        let orbit = new OrbitControls(camera, this.renderer.domElement);
        this.orbit =  orbit;
        this.orbit.enableZoom = false;
        this.handleMouseMove();
    }
    createParticles(size, transparent, opacity, vertexColors, sizeAttenuation, color) {


        const geom = new THREE.Geometry();
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(Particle, (texture) => {
            const material = new THREE.PointsMaterial({
                size: size,
                transparent: transparent,
                opacity: opacity,
                vertexColors: vertexColors,
                map: texture,
                sizeAttenuation: sizeAttenuation,
                color: color
            })

            const range = 500;
            for (let i = 0; i < 300; i++) {
                let particle = new THREE.Vector3(Math.random() * range - range / 2, Math.random() * range - range / 2, Math.random() * range - range / 2);
                geom.vertices.push(particle);
                geom.colors.push(new THREE.Color(this.ParticleColor[Math.floor(Math.random() * this.ParticleColor.length)]));
            }

            this.cloud = new THREE.Points(geom, material);
            this.cloud.name = 'particles';
            this.scene.add(this.cloud);
            console.log(this.scene);
        });
    }

    handleMouseMove() {
        console.log('mouse down');
        let mousedown = false;
        this.renderer.domElement.addEventListener('mousedown', function(e){
            mousedown = true;
        }, false);

        this.renderer.domElement.addEventListener('mouseup', function(e){
            mousedown = false;
        }, false);
    }




    animate() {
        this.rotation += 0.01;
        this.camera.position.x = Math.sin(this.rotation) * 200;
        this.camera.position.z = Math.cos(this.rotation) * 150;
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }


    renderScene() {
        this.renderer.render(this.scene, this.camera);
    }

    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    }



    render() {
        return(
            <Fade in = { this.props.show} timeout = {2000}>
                <div style = {{width: windowWidth, height: windowHeight, position: 'absolute', zIndex: 5}} ref={(mount) => { this.mount = mount; }} />
            </Fade>
        );
    }
}

export default Scene;