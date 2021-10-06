import React from 'react';
import sprite from '../../img/sprite.svg';
import hotel1 from '../../img/hotel-1.jpg';
import hotel2 from '../../img/hotel-2.jpg';
import hotel3 from '../../img/hotel-3.jpg';
import friend1 from '../../img/user-3.jpg';
import friend2 from '../../img/user-4.jpg';
import friend3 from '../../img/user-5.jpg';
import friend4 from '../../img/user-6.jpg';
import user1 from '../../img/user-1.jpg';
import user2 from '../../img/user-2.jpg';

const HotelContent = () => {
  return (
    <div className='hotel-view'>
      <div className='gallery'>
        <figure className='gallery-item'>
          <img src={hotel1} alt='Photo of hotel 1' className='gallery__photo' />
        </figure>
        <figure className='gallery-item'>
          <img src={hotel2} alt='Photo of hotel 2' className='gallery__photo' />
        </figure>
        <figure className='gallery-item'>
          <img src={hotel3} alt='Photo of hotel 3' className='gallery__photo' />
        </figure>
      </div>

      <div className='overview'>
        <h1 className='overview__heading'>Hotel Bilando</h1>

        <div className='overview__stars'>
          <svg className='overview__icon-star'>
            <use xlinkHref={sprite + '#icon-star'}></use>
          </svg>
          <svg className='overview__icon-star'>
            <use xlinkHref={sprite + '#icon-star'}></use>
          </svg>
          <svg className='overview__icon-star'>
            <use xlinkHref={sprite + '#icon-star'}></use>
          </svg>
          <svg className='overview__icon-star'>
            <use xlinkHref={sprite + '#icon-star'}></use>
          </svg>
          <svg className='overview__icon-star'>
            <use xlinkHref={sprite + '#icon-star'}></use>
          </svg>
        </div>

        <div className='overview__location'>
          <svg className='overview__icon-location'>
            <use xlinkHref={sprite + '#icon-location-pin'}></use>
          </svg>
          <button className='btn-inline'>Alabama, Calefornia</button>
        </div>

        <div className='overview__rating'>
          <div className='overview__rating-average'>8.4</div>
          <div className='overview__rating-count'>439 votes</div>
        </div>
      </div>

      <div className='detail'>
        <div className='description'>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
            dignissimos debitis ratione sapiente saepe. Accusantium cumque,
            quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>
          <p className='paragraph'>
            Accusantium cumque, quas, ut corporis incidunt deserunt quae
            architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>
          <ul className='list'>
            <li className='list__item'>Close to the beach</li>
            <li className='list__item'>Breakfast included</li>
            <li className='list__item'>Free airport shuttle</li>
            <li className='list__item'>Free wifi in all rooms</li>
            <li className='list__item'>Air conditioning and heating</li>
            <li className='list__item'>Pets allowed</li>
            <li className='list__item'>We speak all language</li>
            <li className='list__item'>Family Friendly</li>
          </ul>
          <div className='recommend'>
            <p className='recommend__count'>
              Lucy and 3 other friends recommend this hotel.
            </p>
            <div className='recommend__friends'>
              <img src={friend1} alt='friend 1' className='recommend__photo' />
              <img src={friend2} alt='friend 1' className='recommend__photo' />
              <img src={friend3} alt='friend 1' className='recommend__photo' />
              <img src={friend4} alt='friend 1' className='recommend__photo' />
            </div>
          </div>
        </div>

        <div className='user-reviews'>
          <figure className='review'>
            <blockquote className='review__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
            <figcaption className='review__user'>
              <img src={user1} className='review__photo' alt='User 1' />
              <div className='review__user-box'>
                <p className='review__user-name'>Nick Smith</p>
                <p className='review__user-date'>Feb 23rd, 2021</p>
              </div>
              <div className='review__rating'>7.8</div>
            </figcaption>
          </figure>

          <figure className='review'>
            <blockquote className='review__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi.
            </blockquote>
            <figcaption className='review__user'>
              <img src={user2} className='review__photo' alt='User 2' />
              <div className='review__user-box'>
                <p className='review__user-name'>Marry Thomas</p>
                <p className='review__user-date'>Sept 1st, 2021</p>
              </div>
              <div className='review__rating'>9.3</div>
            </figcaption>
          </figure>

          <button className='btn-inline'>
            Show all <span>&rarr;</span>
          </button>
        </div>
      </div>

      <div className='cta'>
        <h2 className='cta__book-now'>
          Good news! We have 4 free rooms selected for your dates.
        </h2>

        <button className='btn'>
          <span className='btn__visible'>Book Now</span>
          <span className='btn__invisible'>Only 4 rooms left</span>
        </button>
      </div>
    </div>
  );
};

export default HotelContent;
