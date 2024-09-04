import { Component } from '../core/core.js'
import movieStore, { searchMovies } from '../store/movie'

export default class Search extends Component {
    render() {
        this.el.classList.add('search')
        this.el.innerHTML = /* html */`
            <input 
                placeholder="Enter the movie title to search!" 
                value="${movieStore.state.searchText}"/>
            <!-- 검색 내용이 그대로 검색 필드에 남는다. 상세 페이지에서 뒤로가기 해도 그대로 유지됨 -->
            <button class="btn btn-primary">
                Search!
            </button>
        `

        const inputEl = this.el.querySelector('input')
        inputEl.addEventListener('input', () => {
            movieStore.state.searchText = inputEl.value
        })

        inputEl.addEventListener('keydown', event => {
            if(event.key === 'Enter' && movieStore.state.searchText.trim()) {
                searchMovies(1) //page = 1
            }
        })

        const btnEl = this.el.querySelector('.btn')
        btnEl.addEventListener('click', () => {
            if(movieStore.state.searchText.trim()) {
                searchMovies(1) //page = 1
            }
        })
    }
}