import React from 'react';
import Modal from '../../Modal/Modal';
import './AddPost.scss';
import NewPost from './NewPost/NewPost';
import { connect, useDispatch } from 'react-redux';
import { closeNewPostForm, uploadNewPostFile } from './../../../store/actions/newPostActions';


function AddPost({ newPost}) {

  const dispatch = useDispatch();
  // const openModal = Boolean(newPost.data);
  const openModal = true;

  const onFileUpload = e => {
    const data = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(data);

    reader.onload = () => {
      const imgSrc = reader.result;
      dispatch(uploadNewPostFile(data, imgSrc));
    };
  }

  const onModalClose = () => {
    dispatch(closeNewPostForm());
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
              onChange={onFileUpload}
              required 
            />

            <label htmlFor="add-file" className="add-post__label add-post-control">
              Загрузить
            </label>
          </div>

          <Modal isOpen={openModal} close={onModalClose}>
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
