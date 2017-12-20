import React, { Component } from 'react';
import * as THREE from 'three';
import Particle from '../../static/particle.png';
import Email from '../../static/e-mail-envelope.svg';
import Facebook from '../../static/facebook.svg';
import Menu from './Menu';
import MenuButton from './MenuButton';

class Scene extends Component {
    constructor(props) {
        super(props)

        this.state = {
            onMenu:false,
            onButton:false
        }

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.setText = this.setText.bind(this);
        this.fillWithPoints = this.fillWithPoints.bind(this);
        this.setRandomPoint = this.setRandomPoint.bind(this);
        this.isPointInside = this.isPointInside.bind(this);
        this.ptInTriangle = this.ptInTriangle.bind(this);
        this.createParticles = this.createParticles.bind(this);
        this.animate = this.animate.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
    }

    componentDidMount() {
        console.log(this.props.target);

        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        const text1 = ['C', 'O', 'L', 'L', 'A', 'G', 'E'];
        const ParticleColor = ['#e4007f', '#e60012', '#f39800', '#90c31f', '#00a0e9', '#efd200', '#8f82bc'];


        let cloud = null;

        const controls = {
            size:4,
            transparent:true,
            opacity: 0.6,
            vertexColors:true,
            color:0xffffff,
            sizeAttenuation:true,
            rotateSystem:true
        };




        const scene = new THREE.Scene()

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor (0x00FFFFFF, 1);
        renderer.setSize(window.innerWidth, window.innerHeight);


        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(0, 10, 50);

        const light = new THREE.DirectionalLight(0xffffff, 2);
        light.position.setScalar(100);
        scene.add(light);

        let a = new THREE.Vector3();
        let b = new THREE.Vector3();
        let c = new THREE.Vector3();
        let face = new THREE.Face3();


        const textGeo1 = null;
        const textGeo2 = null;
        const textGeo3 = null;
        const textGeo4 = null;
        const textGeo5 = null;
        const textGeo6 = null;
        const textGeo7 = null;
        const textGeo = [textGeo1, textGeo2, textGeo3, textGeo4, textGeo5, textGeo6, textGeo7 ];
        const rotation = 0;
        const textPoints = null;

        const loader = new THREE.FontLoader();
        loader.load('https://threejs.org/examples/fonts/droid/droid_serif_bold.typeface.json', (response) =>  {
            const font = response;
            console.log(font);
            this.setText(font);
            this.createParticles(controls.size, controls.transparent, controls.opacity, controls.vertexColors, controls.sizeAttenuation, controls.color);
            this.start();
            setTimeout(this.handleMenu, 3000);
        });

        this.text1 = text1;
        this.ParticleColor = ParticleColor;
        this.cloud = cloud;

        this.a = a;
        this.b = b;
        this.c = c;
        this.face = face;

        this.textGeo1 = textGeo1;
        this.textGeo2 = textGeo2;
        this.textGeo3 = textGeo3;
        this.textGeo4 = textGeo4;
        this.textGeo5 = textGeo5;
        this.textGeo6 = textGeo6;
        this.textGeo7 = textGeo7;
        this.textGeo = textGeo;
        this.rotation = rotation;
        this.textPoints = textPoints;


        this.scene = scene
        this.camera = camera
        this.renderer = renderer


        this.mount.appendChild(this.renderer.domElement);
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement);
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
            for (let i = 0; i < 500; i++) {
                let particle = new THREE.Vector3(Math.random() * range - range / 2, Math.random() * range - range / 2, Math.random() * range - range / 2);
                geom.vertices.push(particle);
                geom.colors.push(new THREE.Color(Math.random() * 0x00FFFFFF));
            }

            this.cloud = new THREE.Points(geom, material);
            this.cloud.name = 'particles';
            this.scene.add(this.cloud);
        });
    }

    handleMenu() {
        console.log('fired');
        this.setState(() => {
            return(
                {onMenu: true}
            );
        });
    }

    handleCloseMenu() {
        console.log('close');
        this.setState(() => {
            return(
                {
                    onMenu: false,
                    onButton: true
                }
            );
        });
    }

    setText(font) {
        console.log('dispatched');
        for(let i = 0; i < this.text1.length; i++) {
            this.textGeo[i] = new THREE.TextGeometry(this.text1[i], {
                font: font,
                size: 6,
                height: 0.25,
                curveSegments: 1,
                bevelEnabled: false
            });
            this.textGeo[i].computeBoundingBox();
            this.textGeo[i].computeVertexNormals();
            this.textGeo[i].center();
            this.fillWithPoints(this.textGeo[i], 1000);

            this.textGeo[i].vertices.forEach(function (vertex) {
                vertex.startPoint = vertex.clone();
                vertex.direction = vertex.clone().normalize();
            })


            this.textPoints = new THREE.Points(this.textGeo[i], new THREE.PointsMaterial({
                color: this.ParticleColor[i],
                size: 0.1
            }));
            this.textPoints.position.x = 10 * i + -30
            this.scene.add(this.textPoints);
        }
    }

    fillWithPoints(geometry, pointNumber) {
        geometry.computeBoundingBox();
        for (let i = 0; i < pointNumber; i++) {
            this.setRandomPoint(geometry);
        }
    }

    setRandomPoint(geometry) {
        let point = new THREE.Vector3(
            THREE.Math.randFloat(geometry.boundingBox.min.x, geometry.boundingBox.max.x),
            THREE.Math.randFloat(geometry.boundingBox.min.y, geometry.boundingBox.max.y),
            THREE.Math.randFloat(geometry.boundingBox.min.z, geometry.boundingBox.max.z)
        );
        //console.log(point);
        if (this.isPointInside(point, geometry)) {
            geometry.vertices.push(point);
        } else {
            this.setRandomPoint(geometry);
        }
    }

    isPointInside(point, geometry) {
        let retVal = false;
        for (let i = 0; i < geometry.faces.length; i++) {
            this.face = geometry.faces[i];
            this.a = geometry.vertices[this.face.a];
            this.b = geometry.vertices[this.face.b];
            this.c = geometry.vertices[this.face.c];
            //console.log(face, a, b, c);
            if (this.ptInTriangle(point, this.a, this.b, this.c)) {
                retVal = true;
                break;
            }
        }
        return retVal;
    }


    ptInTriangle(p, p0, p1, p2) {
        // credits: http://jsfiddle.net/PerroAZUL/zdaY8/1/
        const A = 1/2 * (-p1.y * p2.x + p0.y * (-p1.x + p2.x) + p0.x * (p1.y - p2.y) + p1.x * p2.y);
        const sign = A < 0 ? -1 : 1;
        const s = (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * p.x + (p0.x - p2.x) * p.y) * sign;
        const t = (p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * p.x + (p1.x - p0.x) * p.y) * sign;
        return s > 0 && t > 0 && (s + t) < 2 * A * sign;
    }

    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    }

    stop() {
        cancelAnimationFrame(this.frameId);
    }

    animate() {
        for(let i=0; i < this.textGeo.length; i++) {
            this.textGeo[i].vertices.forEach(function (vertex) {
                vertex.copy(vertex.startPoint).addScaledVector(vertex.direction, 5 + Math.sin(Date.now() * 0.001) * 5);
            });
            this.textGeo[i].verticesNeedUpdate = true;
        }
        if(this.rotation < 6) {
            this.rotation += 0.02;
            this.camera.position.x = Math.sin(this.rotation) * 50;
            // camera.position.y = Math.sin(rotation) * 40;
            this.camera.position.z = Math.cos(this.rotation) * 50;
            this.camera.lookAt(this.scene.position);
            console.log(this.camera.position.x, this.camera.position.z);
        }else {
            for (let l = 0; l < this.textGeo.length; l++) {
                this.textGeo[l].vertices.forEach(function (vertex) {
                    vertex.copy(vertex.startPoint).addScaledVector(vertex.direction, 0);
                });
                this.textGeo[l].verticesNeedUpdate = false;
            }
            if(this.camera.position.x < 0) {
                this.camera.position.x += 0.1
                console.log(this.camera.position.x, this.camera.position.z);
                this.camera.lookAt(this.scene.position);
            }
        }
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        return (
            <div style = {{width: '100%', height: '100%', position: 'relative'}} ref={(mount) => { this.mount = mount; }}>
                {this.state.onMenu &&  <Menu handleClose = { this.handleCloseMenu } /> }
                {this.state.onButton &&
                <MenuButton
                    target1 = {this.props.target1}
                    target2 = {this.props.target2}
                    target3 = {this.props.target3}
                    target4 = {this.props.target4}
                />}
                <div style = {{position: 'absolute' ,width: '25px', height: '25px',left: '95%', top:'45%'}}>
                    <img src = {Facebook} alt='facebook' style ={{width: '25px', height: '25px'}} />
                </div>
                <div style = {{position: 'absolute' ,width: '25px', height: '25px' ,left: '95%', top:'55%'}}>
                    <img src = {Email} alt='facebook' style ={{width: '23px', height: '23px'}}/>
                </div>
            </div>

        );
    }
}

export default Scene;