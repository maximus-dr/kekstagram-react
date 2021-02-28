import React, { useState } from 'react';
import './NewPost.scss';
import preloader from '../../../../assets/img/loading.gif';
import { connect } from 'react-redux';
import NewPostResize from './NewPostResize/NewPostResize';
import NewPostPreview from './NewPostPreview/NewPostPreview';
import NewPostEffects from './NewPostEffects/NewPostEffects';
import NewPostText from './NewPostText/NewPostText';


function NewPost({ newPost }) {

  const effects = {
    none: {
      filter: 'none'
    },
    chrome: {
      filter: 'grayscale',
      max: 1
    },
    sepia: {
      filter: 'sepia',
      max: 1
    },
    marvin: {
      filter: 'invert',
      max: 100,
      unit: '%'
    },
    phobos: {
      filter: 'blur',
      max: 3,
      unit: 'px'
    },
    heat: {
      filter: 'brightness',
      max: 3
    }
  };

  const [currentEffect, setCurrentEffect] = useState(effects.none);

  const onEffectToggle = e => {
    e.target.checked = true;
    e.target.focus();
    const effect = effects[e.target.value];

    effect.filter === 'none' ? setShowScale(false) : setShowScale(true);
    setCurrentEffect(effect);
    setScaleValue(100);
    
  }

  const setEffectDepth = (effect, value) => {
    if (effect.filter === 'none') return 'none';

    let unit = '';
    if (effect.unit) {
      unit = effect.unit;
    }
    const depth = effect.max * value / 100;
    return `${effect.filter}(${depth + unit})`
  }

  const [scaleValue, setScaleValue] = useState(100);
  const [showScale, setShowScale] = useState(false);

  const onScaleChange = e => setScaleValue(e.target.value);

  const img = {
    src: newPost.data ? newPost.imgSrc : preloader,
    style: {
      filter: setEffectDepth(currentEffect, scaleValue)
    }
  }

  return (
    <section className="new-post">
      <div className="new-post__wrapper">

        <form className="new-post__form">
          <NewPostResize />
          <NewPostPreview 
            img={img}
            showScale={showScale}
            scaleValue={scaleValue} 
            onScaleChange={onScaleChange} 
          />
          <NewPostEffects effects={effects} onEffectToggle={onEffectToggle} />
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
