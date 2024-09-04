import { Component } from "../core/core";
import aboutStore from '../store/about'

export default class TheFooter extends Component {
    constructor(){
        super({
            tagName: 'footer'
        })
    }
    render(){
        const { github, repository } = aboutStore.state
        this.el.innerHTML = /* html */`
            <div>
                <!-- <a href="https://github.com/pickylemon/movie_app"> -->
                <a href="${repository}">
                    GitHub Repository
                </a>
            </div>
            <div>
                <!-- <a href="https://github.com/pickylemon"> -->
                <a href="${github}">
                    ${new Date().getFullYear()}
                    PICKYLEMON
                </a>
            </div>
        `
    }
}