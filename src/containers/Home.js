import React from 'react';
import './Home.css';
import UserTable from '../components/UserTable'

export default function Home() {
    const user = localStorage.getItem('userName')
    return (
        <div className="Home">
            <div className="lander">
                <div className="Title">
                    <h2>Welcome to your online banking {user}</h2>
                </div>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-sm-4 col-xs-12">
                                <UserTable></UserTable>
                            </div>
                        <div className="col-sm-4 col-xs-12">
                                <UserTable></UserTable>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <UserTable></UserTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}