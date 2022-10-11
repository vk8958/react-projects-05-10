import React, { Component } from "react";


class Vikas extends Component {
    state = {
        name: "shivam",
        school: "TRM",
        id: 1
    }

    changeState = () => {

        if (this.state.id == 1) {
            this.setState({
                name: "shivam", id: 2
            })
        } else if (this.state.id == 2) {
            this.setState({ name: "vikas", id: 3 })
        } else if (this.state.id == 3) {
            this.setState({ name: "Rahul", id: 1 })
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.changeState}>Chane Name</button>
                {this.state.name}
            </div>
        )
    }
}

export default Vikas;