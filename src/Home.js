import React, {Component} from "react";

class Home extends Component{
    render(){
        return(
            <div>
                <h2>Selamat Datang</h2>
                <p>Selamat datang di <i>Personal Website</i> saya, <i>Personal Website</i> ini hanya menampilkan informasi seputar saya dan aktifitas saya. Untuk melihat seluruh artikel saya bisa dilihat di blog pribadi yang beralamat di <strong><a href="http://ozs.web.id" target="_blank" rel="noopener noreferrer">acules.com</a></strong>.</p>
                {/* <p>Untuk artikel lain selain posting tersebut dan semua publikasi yang sifatnya umum dan terbuka untuk di-download bisa dilihat di academia.edu dengan url <strong><a href="http://uniku.academia.edu/TeuWawuh" target="_blank" rel="noopener noreferrer">http://uniku.academia.edu/TeuWawuh</a></strong></p> */}
                <p>Best regards,<br/><br/><br/><strong>Samsul Hidayat</strong></p>
            </div>
        );
    }
}

export default Home;