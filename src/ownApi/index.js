import React from 'react';
import axios from 'axios';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'react';

class Gettr extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data : null,
            error: null
        };
    }

    componentDidMount(){
        axios.get(this.props.url)
            .then(result => this.setState({
                data :  result.data
            }))
            .catch(error => this.setState({
                error,
            }))
    }

    render(){
        return this.props.children(this.state)
    }
}

const ShowList = ({data, error})=>
    <Gettr url={API+DEFAULT_QUERY}>
        {({data, error})=>{
            if(!data){
                return <p>coming soon ....</p>
            }

            if(error){
                return <p>{error.message}</p>
            }

            return(
                <ul>
                    {data.hits.map(hit=>
                     <h4> <a href={hit.url}>{hit.title}</a> </h4>
                    )}
                </ul>
            );
        }}
        
    </Gettr>

export default ShowList;