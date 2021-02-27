import React from 'react';
import './NewPost.scss';
import preloader from '../../../../assets/img/loading.gif';
import { connect } from 'react-redux';
import NewPostResize from './NewPostResize/NewPostResize';
import NewPostPreview from './NewPostPreview/NewPostPreview';
import NewPostEffects from './NewPostEffects/NewPostEffects';
import NewPostText from './NewPostText/NewPostText';


function NewPost({ newPost }) {

  const imgSrc = newPost.data ? newPost.imgSrc : preloader;


  return (
    <section className="new-post">
      <div className="new-post__wrapper">

        <form className="new-post__form">
          <NewPostResize />
          <NewPostPreview imgSrc={imgSrc} />
          <NewPostEffects />
          <NewPostText />
        
          <button className="new-post__submit" type="submit">
            Опубликовать
          </button>
        </form>

      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    newPost: state.newPost
  }
};

export default connect(mapStateToProps)(NewPost);
