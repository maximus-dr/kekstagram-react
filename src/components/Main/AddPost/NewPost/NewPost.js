import React, { useState } from 'react';
import './NewPost.scss';
import preloader from '../../../../assets/img/loading.gif';
import { connect, useDispatch } from 'react-redux';
import NewPostResize from './NewPostResize/NewPostResize';
import NewPostPreview from './NewPostPreview/NewPostPreview';
import NewPostEffects from './NewPostEffects/NewPostEffects';
import NewPostText from './NewPostText/NewPostText';
import { submitNewPost } from '../../../../store/actions/newPostActions';
import Loader from './../../../Modal/Loader/Loader';
import { NEW_POST_EFFECTS } from '../../../../store/constants';
import { NEW_POST_RESIZE } from './../../../../store/constants';


function NewPost({ newPost }) {

  const effects = NEW_POST_EFFECTS;
  const resize = NEW_POST_RESIZE;

  const dispatch = useDispatch();
  const [currentEffect, setCurrentEffect] = useState(effects.none);

  // Toggle effect by clicking on the effect icon
  const onEffectToggle = e => {
    e.target.checked = true;
    e.target.focus();
    const effect = effects[e.target.value];

    effect.filter === 'none' ? setShowScale(false) : setShowScale(true);
    setCurrentEffect(effect);
    setScaleValue(100);
    
  }

  // Set effect depth depending on scaleValue
  const setEffectDepth = (effect, value) => {
    if (effect.filter === 'none') return 'none';

    let unit = '';
    if (effect.unit) {
      unit = effect.unit;
    }
    const depth = effect.max * value / 100;
    return `${effect.filter}(${depth + unit})`
  }

  // Change image size by clicking plus/minus button
  const scaleImg = (value) => {
    if (value === 100) return '';
    return `translateX(-50%) scale(${value / 100})`;
  }

  const [scaleValue, setScaleValue] = useState(100);
  const [showScale, setShowScale] = useState(false);

  const onScaleChange = e => setScaleValue(e.target.value);

  const [imgSize, setImgSize] = useState(resize.default);

  const img = {
    src: newPost.file ? newPost.imgSrc : preloader,
    style: {
      filter: setEffectDepth(currentEffect, scaleValue),
      transform: scaleImg(imgSize)
    }
  }

  const onResize = e => {
    e.preventDefault();
    e.target.name === 'plus'
      ? setImgSize(prev => prev + resize.step)
      : setImgSize(prev => prev - resize.step);
  }
  
  
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const onDescriptionChange = e => {
    setDescription(e.target.value);
  }

  const onMessageChange = e => {
    setMessage(e.target.value);
  }


  const onSubmit = e => {
    e.preventDefault();
    dispatch(submitNewPost({
      ...newPost,
      description,
      message,
      img: { style: img.style },
      avatar: 'https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg',
      name: 'Max Ivanov'
    }));
    const uploadInput = document.getElementById('add-file');
    uploadInput.value = '';
  }
  

  return (
    <>
      <Loader isOpen={newPost.status === 'loading'} />

      <section className="new-post">
        <div className="new-post__wrapper">

          <form className="new-post__form" onSubmit={onSubmit}>
            <NewPostResize 
              onResize={onResize}
              resizeValue={imgSize}
            />
            <NewPostPreview 
              img={img}
              showScale={showScale}
              scaleValue={scaleValue} 
              onScaleChange={onScaleChange} 
            />
            <NewPostEffects 
              effects={effects} 
              onEffectToggle={onEffectToggle} 
            />
            <NewPostText 
              onDescriptionChange={onDescriptionChange}
              onMessageChange={onMessageChange}
            />
          
            <button className="new-post__submit" type="submit">
              Опубликовать
            </button>
          </form>

        </div>
      </section>
    </>
  )
}

const mapStateToProps = state => {
  return {
    newPost: state.newPost
  }
};

export default connect(mapStateToProps)(NewPost);
