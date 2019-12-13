import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import logo_negro_svg from '../assets/img/logo/yula_negro.svg';
import logo_svg from '../assets/img/logo/yula.svg';
import home_icon from '../assets/img/home_icon_naranja.png';
import stand_up_icon from '../assets/img/stand_up_icon_2.png';
import etc_icon from '../assets/img/etc_icon.png';
import cado from '../assets/img/cado_logo.png';
import comediante_recomendado from '../assets/img/comediantes/camilo_sanchez.jpg';

export default class Home extends Component {
    render() { 
    const comediante_recomendado_texto = "Camilo Sanchez";
    const comediante_recomendado_instagram = "@dejemequieto";
    const comediante_recomendado_instagram_link = "https://www.instagram.com/dejemequieto/?hl=es-la";
    state = {  };
        return ( 
              <div className="App">
                <header>
                  <div className="cabecera_celular">
                    <img id='logo_cabecera_celular' src={ logo_svg } width='50px'></img>
                  </div>
                  <div id="cabecera_pc">
                    <nav className="cabecera_nav_pc">
                      <img className='logo_cabecera_pc' src={ logo_negro_svg } width='50px'></img>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </nav>
                  </div>
                </header>
                <div id='body'>
                  <div className="recomendacion card text-center">
                    <div className="card-header">
                      Recomendación de la semana
                    </div>
                    <div className="recomendacion_body card-body">
                      <div className="perfil_comediante_recomendado">
                        <div>{comediante_recomendado_texto}</div>
                        <div><img className="foto_comediante_recomendado" src = { comediante_recomendado }></img></div>
                      </div>
                      <iframe id='ytplayer' src="https://www.youtube.com/embed/_AAqUamNQA0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="card-footer">
                    </div>
                  </div>
                  <div className="curador_picks">
                    <div className="card-header">
                      ¿Que hay de nuevo?
                    </div>
                    <div className="fila_1">
                      <div className="card">
                        <div className="recomendacion_body card-body">
                          <iframe id="ytplayer" src="https://www.youtube.com/embed/1sLsxZSRMsI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                        </div>
                        <div className="card-footer">
                          <a href="https://www.youtube.com/watch?v=1sLsxZSRMsI" className="btn btn-danger">Ver en youtube</a>
                        </div>
                      </div>
                      <div className="card">
                        <div className="recomendacion_body card-body">
                        <iframe id="ytplayer" src="https://www.youtube.com/embed/RW03ahBWhuY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              </div>
                        <div className="card-footer">
                          <a href="https://www.youtube.com/watch?v=RW03ahBWhuY" className="btn btn-danger">Ver en youtube</a>
                        </div>
                      </div>
                      <div className="card">
                        <div className="recomendacion_body card-body">
                        <iframe id="ytplayer" src="https://www.youtube.com/embed/ZGgDpx4Wg-U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                        </div>
                        <div className="card-footer">
                          <a href="https://www.youtube.com/watch?v=ZGgDpx4Wg-U" className="btn btn-danger">Ver en youtube</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer>
                  <div id="footer_cell">
                    <nav className="footer_nav_cell">
                      <ul>
                      </ul>
                    </nav>
                  </div>
                </footer>
              </div> 
         );
    }
}
 