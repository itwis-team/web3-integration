import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import rg_logo from '../assets/img/rg_logo_flare.webp';
import './nav.css';
import {ConnectButton} from "./connect_button";

// Simple counter using React Hooks
export const Nav = () => {
    const location = useLocation();

    useEffect(() => {
    }, []);

    useEffect(() => {
        console.log(location.pathname);
    }, []);

    return (
        <>
            <nav className="navbar navbar-light navbar-expand-md fixed-top navbar-shrink py-3" style={{ background: "var(--bs-navbar-active-color)" }} id="mainNav">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <span>
                            <img src={rg_logo} style={{ width: "91px" }} />
                        </span>
                    </a>
                    <button data-bs-toggle="collapse" className="navbar-toggler navbar-menu-button" data-bs-target="#navcol-1">
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon toggle-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <form className="search-form nav-search-form">
                            <div className="input-group color-white">
                                <input className="search-input form-control" type="text" placeholder="Search Farms/Pools" /></div>
                        </form>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/" className={`nav-link color-white ${location.pathname == "/" ? "nav-bold" : ""}`}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/farm" className={`nav-link color-white ${location.pathname?.indexOf("farm") > 0 ? "nav-bold" : ""}`}>Farms</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pool" className={`nav-link color-white ${location.pathname?.indexOf("pool") > 0 ? "nav-bold" : ""}`}>Pools</Link>
                            </li>
                            <li className="nav-item ml-1">
                                <div className="nav-item dropdown" style={{ marginTop: "8px" }}>
                                    <a className="dropdown-toggle nav-create" aria-expanded="false" data-bs-toggle="dropdown" href="#">Create</a>
                                    <div className="dropdown-menu bg-black color-dropdown">
                                        <Link to="/lp" className="dropdown-item color-dropdown" href="#">Farm</Link>
                                        <Link to="/single" className="dropdown-item color-dropdown" href="#">Pool</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ConnectButton />
                    </div>
                </div>
            </nav>
        </>
    );
};