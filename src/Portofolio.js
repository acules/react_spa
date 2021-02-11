import React, {Component} from "react";

import Book from './images/buku.jpg';
import Monkey from './images/monyet.jpg';
import Logo from './images/predator.jpg';

// const Book = require('./images/buku.jpg');
// const Monkey = require('./images/monyet.jpg');
// const Logo = require('./images/predator.jpg');

class Portofolio extends Component{
    render(){
        return(
            <div>
                <h2>Halaman Portofolio</h2>
                <p>Berikut adalah Portofolio saya :</p>
                <ul>
                    <li>Buku Pelajaran<br/>
                        <img src={Book} alt="Buku Gambar" width="90" height="70"/>
                    </li>
                    <li>Gambar Hewan Monyet<br/>
                        <img src={Monkey} alt="Gambar Monyet" width="90" height="70"/>
                    </li>
                    <li>Gambar Logo Predator<br/>
                        <img src={Logo} alt="Logo Predator" width="90" height="70"/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Portofolio;
