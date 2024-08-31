import { Component } from '../core/core'

export default class MovieItem extends Component {
    constructor(props) { //props 영화 데이터
        super({
            props,
            tagName: 'a'
        })
    }
    render() {
        const { movie } = this.props

        this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`)
        this.el.classList.add('movie')
        this.el.style.backgroundImage = `url(${movie.Poster})`
        //이미지 태그가 아니라 background로 추가하는 이유는, 
        //이미지마다 사이즈가 조금씩 다르기 때문에 레이아웃이 깨지지 않게 하기 위해서.

        this.el.innerHTML = /* html */`
            <div class="info">
                <div class="year">
                    ${movie.Year}
                </div>
                <div class="title">
                    ${movie.Title}
                </div>
            </div>
        `
    }
}