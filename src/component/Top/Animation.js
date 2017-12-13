import React from 'react';
import logo from '../../static/logo.png';
import '../../index.css';
import Particles from './ParticleLocation';
var TWEEN = require('@tweenjs/tween.js');

const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;
const imageWidth = windowWidth * 0.133;
const imageHeight = windowHeight * 0.074;
const imageX = windowWidth * 326 / 750;
const imageY = windowHeight * 618 / 1334;

export default function sketch(p) {





    p.setup = function () {
        let canvas = p.createCanvas(windowWidth, windowHeight);
    };


    p.drawParticle = function(data) {
        p.noStroke();
        p.fill(data.color);
        p.ellipse(data.x, data.y, data.w, data.h);
    }

    p.draw = function(time) {
        p.background('#ffffff');
        p.drawParticle({color:Particles.red1.color, x: Particles.red1.x , y: Particles.red1.y , w: Particles.red1.radius, h: Particles.red1.radius});
        p.drawParticle({color:Particles.red2.color, x: Particles.red2.x , y: Particles.red2.y , w: Particles.red2.radius, h: Particles.red2.radius});
        p.drawParticle({color:Particles.yellow1.color, x: Particles.yellow1.x , y: Particles.yellow1.y , w: Particles.yellow1.radius, h: Particles.yellow1.radius});
        p.drawParticle({color:Particles.yellow2.color, x: Particles.yellow2.x , y: Particles.yellow2.y , w: Particles.yellow2.radius, h: Particles.yellow2.radius});
        p.drawParticle({color:Particles.yellow3.color, x: Particles.yellow3.x , y: Particles.yellow3.y , w: Particles.yellow3.radius, h: Particles.yellow3.radius});
        p.drawParticle({color:Particles. green1.color, x: Particles.green1.x , y: Particles.green1.y , w: Particles.green1.radius, h: Particles.green1.radius});
        p.drawParticle({color:Particles. orange1.color, x: Particles.orange1.x , y: Particles.orange1.y , w: Particles.orange1.radius, h: Particles.orange1.radius});
        p.drawParticle({color:Particles. blue1.color, x: Particles.blue1.x , y: Particles.blue1.y , w: Particles.blue1.radius, h: Particles.blue1.radius});
        p.drawParticle({color:Particles. blue2.color, x: Particles.blue2.x , y: Particles.blue2.y , w: Particles.blue2.radius, h: Particles.blue2.radius});
        p.drawParticle({color:Particles. blue3.color, x: Particles.blue3.x , y: Particles.blue3.y , w: Particles.blue3.radius, h: Particles.blue3.radius});
        p.drawParticle({color:Particles. purple1.color, x: Particles.purple1.x , y: Particles.purple1.y , w: Particles.purple1.radius, h: Particles.purple1.radius});
        p.drawParticle({color:Particles. purple2.color, x: Particles.purple2.x , y: Particles.purple2.y , w: Particles.purple2.radius, h: Particles.purple2.radius});
        p.drawParticle({color:Particles. purple3.color, x: Particles.purple3.x , y: Particles.purple3.y , w: Particles.purple3.radius, h: Particles.purple3.radius});
        p.drawParticle({color:Particles. pink1.color, x: Particles.pink1.x , y: Particles.pink1.y , w: Particles.pink1.radius, h: Particles.pink1.radius});
        p.drawParticle({color:Particles. pink2.color, x: Particles.pink2.x , y: Particles.pink2.y , w: Particles.pink2.radius, h: Particles.pink2.radius});
        p.drawParticle({color:Particles. pink3.color, x: Particles.pink3.x , y: Particles.pink3.y , w: Particles.pink3.radius, h: Particles.pink3.radius});
    };


}