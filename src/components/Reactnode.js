import React, { Component } from 'react'
import axios from 'axios';

class Reactnode extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
    axios.get(`http://localhost:3000/random-projects`)
        .then(res => {
        const projects = res.data;
        this.setState({ projects });
        })
    }
    
    render() {
        return (
            <div>
                <ul>
                    {
                    this.state.projects
                        .map(project =>
                            <li key={project.project_id}>{project.title}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Reactnode