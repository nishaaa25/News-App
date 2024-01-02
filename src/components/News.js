import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
      super(props);
      this.state = {
          articles: [],
          loading: true,
          page: 1,
          totalResults: 0
      }
  }

  async updateNews() {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9f7a91a5250e44fb82d293c73ac058f7&page=${this.state.page}&pageSize=6`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState((prevState) => ({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
        page: prevState.page + 1}))

  }
  async componentDidMount() {
      this.updateNews();
  }
  // handlePrevClick = async () => {
  //     this.setState({ page: this.state.page - 1 });
  //     this.updateNews();
  // }
  // handleNextClick = async () => {
  //     this.setState({ page: this.state.page + 1 });
  //     this.updateNews()
  // }

  fetchMoreData = async () => {  
    this.setState((prevState) => ({
      page: prevState.page + 1, 
    }));
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9f7a91a5250e44fb82d293c73ac058f7&page=${this.state.page}&pageSize=6`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState((prevState) => ({
        articles: prevState.articles.concat(parsedData.articles), 
        totalResults: parsedData.totalResults,
      }));
      console.log(this.state.articles.length, this.state.totalResults)
    };

  render() {
      return (
          <>
              <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top Headlines</h1>
              <InfiniteScroll
                  dataLength={this.state.articles.length}
                  next={this.fetchMoreData}
                  hasMore={this.state.articles.length !== this.state.totalResults}
                  loader={<Spinner/>}
              > 
              {this.state.loading && <Spinner />}
                  <div className="container">

                  <div className="row">
                      {this.state.articles.map((element) => {
                          return <div className="col-md-4" key={element.url}>
                              <NewsItem title={element.title} description={element.description} img={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                          </div>
                      })}
                  </div>
                  </div> 
              </InfiniteScroll>

          </>
      )
  }
}

export default News;
