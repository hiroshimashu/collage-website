import React, { Component } from 'react';
import * as THREE from 'three';
import Particle from '../static/particle.png';

class Title2 extends Component {
    constructor(props) {
        super(props)

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.setText = this.setText.bind(this);
        this.fillWithPoints = this.fillWithPoints.bind(this);
        this.setRandomPoint = this.setRandomPoint.bind(this);
        this.isPointInside = this.isPointInside.bind(this);
        this.ptInTriangle = this.ptInTriangle.bind(this);
        this.createParticles = this.createParticles.bind(this);
        this.animate = this.animate.bind(this);
    }

    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        const text1 = ['W', 'O', 'R', 'K', 'S'];
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
        renderer.setSize(window.innerWidth, 300);


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
            this.start();
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
            console.log(this.scene);
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
                color: this.ParticleColor[3],
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
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        return (
            <div style = {{width: '80%', height: '100px', position: 'absolute', zIndex: '-100', left: '10%', top: '-10%'}} ref={(mount) => { this.mount = mount }}
            />
        );
    }
}

export default Title2;

