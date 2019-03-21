import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeSuperHerosName=this.onChangeSuperHerosName.bind(this);
    this.onChangeSuperHerosDesc=this.onChangeSuperHerosDesc.bind(this);
    this.onChangeSuperHerosShortDesc=this.onChangeSuperHerosShortDesc.bind(this);
    this.onChangeSuperHerosImage=this.onChangeSuperHerosImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      super_hero_name: '',
      super_hero_desc:'',
      super_hero_short_desc: '',
      super_hero_image:'',
      // character: {},
      file: '',
      imagePreviewUrl: ''
    };
  }
  
  onSubmit(data) {
    data.preventDefault();
    // let shname=this.refs.name.value;
    // let shshortdesc=this.refs.shortDescription.value;
    // let shdesc=data.refs.description.value;
    // let shimgsend=data.target.image.src.substr(data.target.image.src.indexOf(',') + 1);

    let img;
    if (this.state.imagePreviewUrl){
      img=this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(',') + 1)
    }else{
      img=this.state.super_hero_image
    }
    const obj = {
      name: this.state.super_hero_name,
      description: this.state.super_hero_desc,
      shortDescription: this.state.super_hero_short_desc,
      image: img
    };
    console.log('Romain ne sait pas coder')
    Axios.put("https://character-database.becode.xyz/characters/" + this.props.match.params.id, obj)

    .then(response => response.json(),this.props.history.push('/'))
  }
  
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  

  componentDidMount() {
    fetch("https://character-database.becode.xyz/characters/" + this.props.match.params.id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            super_hero_name: result.name,
            super_hero_desc: result.description,
            super_hero_short_desc: result.shortDescription,
            super_hero_image: result.image,
            // character: result
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
  onChangeSuperHerosName(e) {
    this.setState({
      super_hero_name: e.target.value
    });
  }

  onChangeSuperHerosDesc(e) {
    this.setState({
      super_hero_desc: e.target.value
    });
  }
  onChangeSuperHerosShortDesc(e) {
    this.setState({
      super_hero_short_desc: e.target.value
    });
  }
  onChangeSuperHerosImage(e) {
    this.setState({
      super_hero_image: e.target.value
    });
  }

  render() {   

      const { error, isLoaded } = this.state; 
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading... {this.props.match.params.id}</div>;
      } else {
        let {imagePreviewUrl} = this.state;
        let $imagePreview=null;

        
        if (imagePreviewUrl) {
          $imagePreview = (<React.Fragment>
            {/* "data:image;base64," */}
              <img class="preview-img" ref="image" src={imagePreviewUrl} width="100" height="100" />
            </React.Fragment>);
        } else {
          let preview;
          if (this.state.super_hero_image){
            preview = <img class="preview-img" ref="image" src={"data:image/;base64,"+this.state.super_hero_image} width="100" height="100" />
          } else{
            preview = <img class="preview-img" src="https://img3.cliparto.com/pic/s/256180/5361912-user-icon-handcuffs-icon.jpg" width="100" height="100" />
          }
          $imagePreview = (
              preview);
        }
        return (
        <React.Fragment>
          <Link to="/">
            Return to home
          </Link>
          <h1>
            Editing : {this.state.super_hero_name}
          </h1>

          <form class="col-md-6 mx-auto" onSubmit={this.onSubmit}>

            <input class="form-control" type="text" name="name" ref="name" defaultValue={this.state.super_hero_name} onChange={this.onChangeSuperHerosName}></input>
            <div class="preview text-center">
              {$imagePreview}
                <div class="browse-button">
                    <i class="fa fa-pencil-alt"></i>
                    <input class="browse-input" type="file" name="image" id="UploadedFile" onChange={(e)=>this._handleImageChange(e)} />
                </div>
                <span class="Error"></span>
            </div>
            <input class="form-control" type="text" ref="shortDescription" name="shortDescription" defaultValue={this.state.super_hero_short_desc} onChange={this.onChangeSuperHerosShortDesc}></input>
            <textarea class="form-control" ref="description" name="description" rows="10"  onChange={this.onChangeSuperHerosDesc}>{this.state.super_hero_desc}</textarea>
            <input type="submit" class="form-control btn btn-primary" value="submit"></input>
          </form>
        </React.Fragment>
      )
    }
  }
}