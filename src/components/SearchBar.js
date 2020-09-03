import React, { Component } from "react"
import { Link } from "gatsby"

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div className="search">
        <label htmlFor="search" className="search_label"></label>
        <input
          type="search"
          className="search_field"
          placeholder="Search..."
          id="search"
          onChange={this.search}
        />
        <div className="search_results">
          {this.state.results.map(page => (
            <Link className="search_result" to={page.path}>
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  getSearchResults(query) {
    if (!query || !window.__LUNR__) return []
    const results = window.__LUNR__.en.index.search(query)

    return results.map(({ ref }) => window.__LUNR__.en.store[ref])
  }

  search = event => {
    const query = event.target.value
    const results = this.getSearchResults(query)
    this.setState(s => {
      return {
        results,
        query,
      }
    })
  }
}
