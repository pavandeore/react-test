import React, { Component } from 'react'
import axios from 'axios';

class Reactphp extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
    axios.get(`https://www.projectpro.io/index/test-react`)
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

export default Reactphp