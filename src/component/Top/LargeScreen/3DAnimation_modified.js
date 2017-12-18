import React, { Component } from 'react';
import * as THREE from 'three';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import Particle from '../../../static/particle.png';
import OrbitControls from 'three-orbitcontrols';
import TWEEN from '@tweenjs/tween.js';

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
        this.handleCameraMove = this.handleCameraMove.bind(this);
    }



    componentDidMount() {
        setTimeout(() => {
            this.props.handleAnimation();
        }, 1500);


        const controls = {
            size:6,
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
        camera.position.set(1000, 0, 0);

        const pos = {x: 0};
        let tween = new TWEEN.Tween(pos)
            .to({x: 1})
            .easing(TWEEN.Easing.Sinusoidal.InOut)
            .onUpdate(this.handleCameraMove)
        this.tween =  tween;
        this.pos = pos;

        this.createParticles(controls.size, controls.transparent, controls.opacity, controls.vertexColors, controls.sizeAttenuation, controls.color);
        this.start();

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.cloud = cloud;
        this.rotation = rotation;
        this.ParticleColor = ParticleColor;
        this.dirs = [];
        this.mount.appendChild(this.renderer.domElement);
        let orbit = new OrbitControls(camera, this.renderer.domElement);
        this.orbit =  orbit;
        this.orbit.enableZoom = false;
        this.handleMouseMove();
        setTimeout(() => {
            this.scene.children.forEach((child) => {
                if(child instanceof THREE.Points) {
                    let vertices = child.geometry.colors;
                    vertices.forEach(function (v) {
                        v.r = 233/ 255;
                        v.g = 233 / 255;
                        v.b = 233 / 255;
                        v.a = 0.3;
                    });
                }
                child.geometry.colorsNeedUpdate = true;
            })
            this.renderer.render(this.scene, this.camera);
        }, 4000);
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
            });

            this.tween.start();

            const range = 500;
            for (let i = 0; i < 1000; i++) {
                let vx = (Math.random() * range - range / 2);
                let vy = (Math.random() * range - range / 2);
                let vz = (Math.random() * range - range / 2);
                let x = (Math.random() * range - range / 2);
                let y = (Math.random() * range - range / 2);
                let z = (Math.random() * range - range / 2);
                console.log(vx, vy, vz);
                let magnitude = Math.sqrt(Math.pow(vx,2) + Math.pow(vy,2) + Math.pow(vz,2));
                let theta = Math.atan2(vx,vz);
                let particle = new THREE.Vector3(0, 0, 0); // 極座標
                particle.magnitude = magnitude;
                particle.dirs = [x / magnitude, y / magnitude, z / magnitude];
                particle.velocity = particle.dirs.map(element => element * magnitude);
                console.log(particle.magnitude);
                console.log(particle.velocity);


                let r = Math.sqrt(Math.pow(x, 2) + Math.pow(z, 2));
                x = r * Math.cos(theta);
                z = r * Math.sin(theta);
                particle.aVelocity = 0.01 * Math.random(); // 角速度
                particle.theta = theta;
                particle.r = r;
                geom.vertices.push(particle);
                geom.colors.push(new THREE.Color(this.ParticleColor[Math.floor(Math.random() * this.ParticleColor.length)]));
            }
            this.cloud = new THREE.Points(geom, material);
            this.cloud.name = 'particles';
            this.scene.add(this.cloud);
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


    handleCameraMove() {
        if(this.camera.position.x >= 250) {
            this.camera.position.x = 1000 - (750 * this.pos.x);
        }
    }

    animate() {
        TWEEN.update();
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }


    renderScene() {
        this.scene.children.forEach((child) => {
            if(child instanceof THREE.Points) {
                let vertices = child.geometry.vertices;
                vertices.forEach(function (v) {
                    if(v.magnitude >= 0) {
                        console.log(v);
                        v.x += v.velocity[0]
                        v.y += v.velocity[1];
                        v.z += v.velocity[2];
                        v.magnitude = v.magnitude - 100;
                        v.velocity = v.dirs.map(element => element * v.magnitude);
                    } else if (v.magnitude <= 0) {

                    }
                });
            }
            child.geometry.verticesNeedUpdate = true;
        })
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