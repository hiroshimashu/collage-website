import React, { Component } from 'react';
import * as THREE from 'three';
import { CSSTransition } from 'react-transition-group';
import '../../index.css';
import Particle from '../../static/particle.png';
import OrbitControls from 'three-orbitcontrols';
import TWEEN from '@tweenjs/tween.js';

const windowWidth = window.innerWidth;
const windowHeight = 1334 / 750 * windowWidth;

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
        console.log(this.mount);
        this.mount.appendChild(this.renderer.domElement);
        let orbit = new OrbitControls(camera, this.renderer.domElement);
        this.orbit =  orbit;
        this.orbit.enableZoom = false;
        this.handleMouseMove();
        /*setTimeout(() => {
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
        }, 3000); */

        console.log(this.renderer.context.canvas, this.camera);

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


            const range = 500;
            for (let i = 0; i < 1000; i++) {
                let vx = (Math.random() * range - range / 2);
                let vy = (Math.random() * range - range / 2);
                let vz = (Math.random() * range - range / 2);
                let x = (Math.random() * range - range / 2);
                let y = (Math.random() * range - range / 2);
                let z = (Math.random() * range - range / 2);
                let magnitude = 120;
                let theta = Math.atan2(vx,vz);
                let particle = new THREE.Vector3(0, 0, 0); // 極座標
                particle.magnitude = magnitude;
                particle.dirs = [x / magnitude, y / magnitude, z / magnitude];
                particle.velocity = particle.dirs.map(element => element * magnitude);
                let r = Math.sqrt(Math.pow(x, 2) + Math.pow(z, 2));
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
                    if(v.magnitude > 1 ) {
                        v.x += v.velocity[0];
                        v.y += v.velocity[1];
                        v.z += v.velocity[2];
                        v.magnitude = v.magnitude - 24;
                        v.velocity = v.dirs.map(element => element * v.magnitude);
                        v.r = Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.z, 2));
                    }
                    else {
                        if(v.theta > Math.PI) {
                            v.theta =  -1 * Math.PI;
                        }
                        v.theta += v.aVelocity;
                        v.x = v.r * Math.cos(v.theta);
                        v.z = v.r * Math.sin(v.theta);
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
            <div style = {{width: windowWidth, height: windowHeight, position: 'absolute', zIndex: 5}} ref={(mount) => { this.mount = mount; }} />
        );
    }
}

export default Scene;