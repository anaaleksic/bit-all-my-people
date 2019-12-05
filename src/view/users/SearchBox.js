import React from 'react'


const Search = props => {
    const OnSearch = (e) => {
        props.onInput(e.target.value.toLowerCase())
    }


    return (
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s3 search">

                        <i className="material-icons prefix">search</i>
                        <textarea className="materialize-textarea" onChange={event => props.OnSearch(event.target.value)}></textarea>

                    </div>
                </div>
            </form>
        </div>
    )

}

export default Search