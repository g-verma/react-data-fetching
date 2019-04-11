import React from 'react';
import axios from 'axios';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'react';

class Fetch extends React.Component{
    constructor(props){
        super(props);
        this.state = { data :  null }
    }

    componentDidMount(){
        axios.get(this.props.url).then(result =>this.setState({data : result.data}))
    }

    render(){ return this.props.children(this.state) }
}

const List = data =>
    <Fetch url={API+DEFAULT_QUERY}>
    {({data})=>{
            return (!data) ? (<p> Loading...  </p>) : 
            ( <ul>
                {data.hits.map(hit =>
                  <li  key={hit.objectID}>
                        <a href={hit.url}>{hit.title}</a>
                    </li>
                )}
              </ul>
            )
        }
    }
    </Fetch>

export default List;
