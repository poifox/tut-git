import React, { Component } from "react";
import "./index.css";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            version: "",
            name: ""
        };
    }

    async componentDidMount() {
        const payload = await fetch("//localhost:1337", {method: "GET"})
            .then(async (respuesta) => {
                try {
                    return await respuesta.json();
                } catch (error) {
                    console.error("Error convirtiendo la respuesta");
                    return null;
                }
            })
            .catch((error) => {
                console.log("Error when fetching", error);
                return null;
            });
        if (payload) {
            const {version, name, posts} = payload.data;
            this.setState({version, name, posts});
        }
    }

    render() {
        const {version, name} = this.state;
        return (
            <div>
                <h1 className="homepage-h1">
                    Bienvenidos a {name}, versión {version}
                </h1>
                <p>
                    Esta es una aplicación de aprendizaje de tecnología
                    full-stack con Express y React.
                </p>
            </div>
        );
    }
}
