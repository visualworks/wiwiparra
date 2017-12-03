import React, {Component} from "react";
import App from "app";

export default class Layout extends App {
    render() {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title"><img src="img/logo-wiwi-parra.png" alt="Wiwi Parra" title="Wiwi Parra" /></h1>
                        <h2 className="title">Desenvolvimento Humano</h2>
                        <div className="columns has-text-left">
                            <div className="column"></div>
                            <div className="column">
                                <p>Psicóloga CRP 06/132566</p>
                                <p>55 11 2308.4008</p>
                                <p>55 11 98017.6001</p>
                                <p>contato@wiwiparra.com.br</p>
                                <p>
                                    <span className="icon">
                                        <a href="https://www.facebook.com/Wiwi-Parra-1827580627522006/" target="_blank"><i className="fa fa-facebook"></i></a>
                                    </span>
                                    <span className="icon">
                                        <a href="https://www.instagram.com/wiwiparra/" target="_blank"><i className="fa fa-instagram"></i></a>
                                    </span>
                                    <span className="icon">
                                        <a href="https://www.linkedin.com/in/wiwi-parra-b8703216/" target="_blank"><i className="fa fa-linkedin"></i></a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}