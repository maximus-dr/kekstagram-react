import React from 'react';
import Modal from '../../Modal/Modal';
import './AddPost.scss';
import NewPost from './NewPost/NewPost';
import { connect, useDispatch } from 'react-redux';
import { closeNewPost, openNewPost } from './../../../store/actions/newPostActions';


function AddPost({ newPost}) {

  const dispatch = useDispatch();
  // const isOpen = Boolean(newPost.uploadImg);
  const isOpen = true;

  const onFileAdd = e => {
    const uploadImg = e.target.files[0];
    dispatch(openNewPost(uploadImg));
  }

  const onModalClose = () => {
    dispatch(closeNewPost());
  }


  return (
    <section className="add-post">
      <div className="add-post__wrapper">

        <div className="add-post__field">
          <div className="add-post__fieldset">

            <input 
              className="add-post__input visually-hidden" 
              type="file" 
              id="add-file"
              onChange={onFileAdd}
              required 
            />

            <label htmlFor="add-file" className="add-post__label add-post-control">
              Загрузить
            </label>
          </div>

          <Modal isOpen={isOpen} close={onModalClose}>
            <NewPost />
          </Modal>
          
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    newPost: state.newPost
  }
}

export default connect(mapStateToProps)(AddPost);
