import React, { useRef, useState } from 'react';
import Modal from '../../Modal/Modal';
import './AddPost.scss';
import NewPost from './NewPost/NewPost';
import { connect, useDispatch } from 'react-redux';
import { closeNewPostForm, uploadNewPostFile } from './../../../store/actions/newPostActions';
import Loader from '../../Modal/Loader/Loader';


function AddPost({ newPost}) {

  const dispatch = useDispatch();
  const openModal = Boolean(newPost.file);
  const inputRef = useRef();
  
  const [loading, setLoading] = useState(false);

  const onFileUpload = e => {
    setLoading(true);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setLoading(false);
      const imgSrc = reader.result;
      dispatch(uploadNewPostFile(file, imgSrc));
    };
  }

  const onModalClose = () => {
    dispatch(closeNewPostForm());
    inputRef.current.value = '';
  }


  return (
    <>
      <Loader isOpen={loading} />

      <section className="add-post">
        <div className="add-post__wrapper">

          <div className="add-post__field">
            <div className="add-post__fieldset">

              <input 
                className="add-post__input visually-hidden" 
                type="file" 
                id="add-file"
                ref={inputRef}
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
    </>
  )
}

const mapStateToProps = state => {
  return {
    newPost: state.newPost
  }
}

export default connect(mapStateToProps)(AddPost);
