import React, {Component} from "react";

class CuriculumVitae extends Component{
    render(){
        return(
            <div>
                <h2>Curiculum Vitae</h2>

                <table>
                    <tr>
                        <td><strong>Nama Lengkap</strong></td>
                        <td>:</td>
                        <td>Samsul Hidayat</td>
                    </tr>
                    <tr>
                        <td><strong>Pendidikan Terakhir</strong></td>
                        <td>:</td>
                        <td>Sarjana Teknik Informatika</td>
                    </tr>
                </table>
                                
                <p><strong>Skills</strong><br/>
                    <ul type="circle">
                        <li>Html 5</li>
                        <li>Bootstrap CSS Framework</li>
                        <li>React Javascript Framework Library</li>
                        <li>PHP</li>
                        <li>MySQL Database</li>
                        <li>Linux Operating System</li>
                    </ul>
                
                </p>
            </div>
        );
    }
}

export default CuriculumVitae;
