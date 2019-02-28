import React from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

class AuthLoading extends React.Component {
    constructor(props) {
        super(props);
    }

    // Render any loading content that you like here
    render() {
        return (
            <ProgressBar loading={true}/>
        );
    }
}

export default (AuthLoading);
