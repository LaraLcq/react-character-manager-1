import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Axios from 'axios'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      character: []
    };
  }

  deleteSuperHeros(e){
    console.log('test')
    Axios.delete("https://character-database.becode.xyz/characters/" + e)
    .then(
    response => response.json())
    
  }
  
  getApi(){
    fetch("https://character-database.becode.xyz/characters")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            character: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  componentDidUpdate() {
    this.getApi()
  }
  componentDidMount() {
    this.getApi()
  }
  render() {   
      const { error, isLoaded, character } = this.state; 
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <React.Fragment >
          <h5 class="section-title h1">OUR TEAM</h5>
          <div class="row">
            {character.map(character => (
                <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" onTouchStart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src={"data:image;base64," + character.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://img3.cliparto.com/pic/s/256180/5361912-user-icon-handcuffs-icon.jpg"}} alt={character.name}/></p>
                                    <h4 class="card-title" >{character.name}</h4>
                                    <p class="card-text">{character.shortDescription}</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">{character.name}</h4>
                                    <ReactMarkdown className="card-text desc" source= {character.description} />
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <Link class="social-icon text-xs-center" to={"/edit/character/" + character.id}>
                                              <i class="fas fa-pen-fancy"></i> edit
                                            </Link>
                                        </li>
                                        <li class="list-inline-item">
                                            <Link class="social-icon text-xs-center" to="/" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this super hero?')) this.deleteSuperHeros(character.id) } }>
                                              <i class="fas fa-trash-alt"></i> delete
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            <Link to="character/add" className=" w-100">
              <div class="image" onTouchStart="this.classList.toggle('hover');">
                <div class="mainflip ">
                  <div class="frontside">
                    <div class="card bg-success">
                      <div class="card-body text-center text-light align-middle">
                        <FontAwesomeIcon icon="plus" size="10x" />
                        <p>Add a character</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          </React.Fragment>
        )
      }
  }
}
