import React, {Component} from "react";

class ContactMe extends Component{
    render(){
        return(
            <div>
                <h2>Contact Me</h2>
                <p>Jika anda membutuhkan bantuan, silahkan hubungi saya melalui form dibawah ini :</p>

                <form id="FormKontak">
                    <p>Nama Lengkap<br/>
                    <input type="text" id="txtNama"/>
                    </p>
                    <p>Email<br/>
                    <input type="text" id="txtMail"/>
                    </p>
                    <p>Pesan<br/>
                    <textarea id="txtPesan"></textarea>
                    </p>
                    <p><button type="submit" id="btnSimpan">Kirim</button></p>
                </form>

            </div>
        );
    }
}

export default ContactMe;