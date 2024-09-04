import { Component } from '../core/core.js'
import movieStore, { searchMovies } from '../store/movie'

export default class MovieListMore extends Component {
    constructor() {
        super({
            tagName: 'button'
        })
        movieStore.subscribe('pageMax', () => {
            // movieStore.state.page
            // movieStore.state.pageMax
            // 개별로 사용하기 보다는 객체 구조분해할당을 이용
            const { page, pageMax } = movieStore.state
            pageMax > page 
                ? this.el.classList.remove('hide')
                : this.el.classList.add('hide')
        })
    }
    render() {
        this.el.classList.add('btn', 'view-more', 'hide')
        this.el.textContent = 'View more...'

        this.el.addEventListener('click', async () => {
            //더보기 버튼을 사용자가 중복적으로 누르는 것을 방지
            this.el.classList.add('hide')
            await searchMovies(movieStore.state.page + 1)
        })
    }
}