import React from 'react';
import { SingleQuestion } from './SingleQuestion'
import { SingleResponse } from './SingleResponse';

const Questions = () => {

  const onClick = () => {
    const coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        coll[i].classList.toggle("activeCollapsible");
        const content = coll[i].nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }

  return (
    <div className="faq-content">
      <SingleQuestion onClick={onClick}>Where do babies come from?</SingleQuestion>
      <SingleResponse>Children are notorious for asking funny and sometimes inappropriate questions. However, if your kid is asking about where babies come from or how they're made, you should try to give them an honest answer that they can understand. This will help to prepare them for their future as they're growing up and experiencing the world. When they ask, be sure to assess the situation and tailor your response to be age-appropriate..</SingleResponse>
      <SingleQuestion onClick={onClick}>Why is the sky blue?</SingleQuestion>
      <SingleResponse>Gases and particles in Earth's atmosphere scatter sunlight in all directions. Blue light is scattered more than other colors because it travels as shorter, smaller waves. This is why we see a blue sky most of the time.</SingleResponse>
      <SingleQuestion onClick={onClick}>Why can’t I see any stars in the sky?</SingleQuestion>
      <SingleResponse>It could just be cloudy, but I reckon you would have identified this yourself if this were the case. So assuming you have a clear sky, the reason you cannot see any stars is likely due to light pollution. In the image below you can get an idea of how clearly you will be able to see the night sky depending on the amount of light pollution.</SingleResponse>
      <SingleQuestion onClick={onClick}>Why is the snow white?</SingleQuestion>
      <SingleResponse>When light hits snow, it moves through it– reflecting and refracting off all of the tiny ice crystals. As light reflects back toward us off the ice crystals, we get the whole spectrum. Since no particular color absorbs, the light reflected and therefore the snow, is white!</SingleResponse>
    </div>
  )

};

export default Questions;