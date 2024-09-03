import { Component } from '../core/core'

export default class TheHeader extends Component {
    constructor() {
        super({
            tagName: 'header',
            state: {
                menus: [
                    {
                        name: 'Search',
                        href: '#/'
                    },
                    {
                        name: 'Movie',
                        href: '#/movie?id=tt1375666'
                    },
                    {
                        name: 'About',
                        href: '#/about'
                    }
                ]
            }
        })
        //popstate 이벤트 : 페이지가 이동할 때마다 발생
        window.addEventListener('popstate', () => {
            this.render() //페이지 이동이 발생할 때마다 새롭게 네비게이션 active 처리
        })
    }
    render(){
        this.el.innerHTML = /* html */`
            <a 
                href="#/" 
                class="logo">
                <span>OMDbAPI</span>.COM
            </a>
            <nav>
                <ul>
                    ${this.state.menus.map(menu => {
                        const href = menu.href.split('?')[0] //쿼리스트링 버리기
                        const hash = location.hash.split('?')[0]
                        const isActive = href === hash
                        return /* html */`
                        <li>
                            <a 
                                class="${isActive ? 'active' : ''}" 
                                href="${menu.href}">
                                ${menu.name}
                            </a>
                        </li>
                        `
                    }).join('')}
                </ul>
            </nav>
            <a href="#/about" class="user">
                <img src="/lemon.a31f6e17.png" alt="User"/>
            </a>   
        `
    }
}