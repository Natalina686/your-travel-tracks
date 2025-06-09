import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadCampers } from '../../redux/campersSlice';
import styles from './CamperDetails.module.css';
import Tabs from "../../components/Tabs/Tabs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {toast} from 'react-toastify';
import { Tv, Snowflake, Utensils, Fan, CupSoda } from 'lucide-react';
import {toggleFavorite} from '../../redux/favoritesSlice';





const CamperDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('Features');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const {items: campers, status } = useSelector(state => state.campers);

const favorites = useSelector(state => state.favorites.items);

const camper = campers.find(c => String(c.id) === id);
const isFavorite = camper ? favorites.includes(camper.id) : false; 

const handleToggleFavorite = () => {
  if (camper) {
    dispatch(toggleFavorite(camper.id));
  }
};

    const [formData, setFormData] = useState({
  name: '',
  email: '',
  comment: '',
});




const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !startDate || !endDate) {
    toast.error('Please fill out all fields!');
    return;
  }

  
  const bookingInfo = {
    camperId: id,
    ...formData,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  };

  console.log('Booking info:', bookingInfo);

  toast.success('Booking submitted successfully!');

 
  setFormData({ name: '', email: '', comment: '', });
  setStartDate(null);
  setEndDate(null);
};


    useEffect(() => {
        if (status === 'idle') {
            dispatch(loadCampers());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return <p>Loading camper details...</p>;
    }

    if (status === 'failed') {
        return <p>Failed to load camper details.</p>
    }

    

    if (!camper) {
        return <p>Camper not found.</p>;
    }

    const { name, price, location, rating, description, gallery, reviews } = camper;
console.log('Camper:', camper);

    return (
        
        <div className={styles.details}>
      <h1>{name}</h1>
      <p><strong>Price:</strong> €{price.toFixed(2)}</p>
      <button
  onClick={handleToggleFavorite}
  style={{
    
    color: isFavorite ? 'red' : 'gray',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  }}
  aria-label="Toggle favorite"
>
  {isFavorite ? '❤️' : '🤍'}
</button>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>

      <div className={styles.gallery}>
        {gallery.map((img, idx) => (
          <img key={idx} src={img.thumb} alt={`${name} image ${idx + 1}`} />
        ))}
    </div>
    
      <p>{description}</p>

      <div className={styles.amenities}>
  
  <ul className={styles.amenitiesList}>
    <li><Snowflake size={20} /><span>Air Conditioning</span></li>
    <li><Tv size={20} /><span>TV</span></li>
    <li><Utensils size={20} /><span>Kitchen</span></li>
    <li><Fan size={20} /><span>Fan</span></li>
    <li><CupSoda size={20} /><span>Microwave</span></li>
  </ul>
</div>

<div className={styles.contentLayout}>
  <div className={styles.leftContent}>
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'Features' && (
        <div className={styles.tabContent}>
          <div className={styles.featureItem}>
      <span className={styles.featureLabel}>Form</span>
      <span className={styles.featureValue}>{camper.form}</span>
      </div>
    <div className={styles.featureItem}>
      <span className={styles.featureLabel}>Engine</span>
      <span className={styles.featureValue}>{camper.engine}</span>
    </div>
    <div className={styles.featureItem}>
      <span className={styles.featureLabel}>Transmission</span>
      <span className={styles.featureValue}>{camper.transmission}</span>
    </div>
    <div className={styles.featureItem}>
      <span className={styles.featureLabel}>Fuel</span>
      <span className={styles.featureValue}>{camper.form}</span>
    </div>
    <div className={styles.featureItem}>
      <span className={styles.featureLabel}>Length</span>
      <span className={styles.featureValue}>{camper.length}</span>
    </div>
    <div className={styles.featureItem}>
      <span className={styles.featureLabel}>Width</span>
      <span className={styles.featureValue}>{camper.width}</span>
    </div>
    <div className={styles.featureItem}>
      <span className={styles.featureLabel}>Height</span>
      <span className={styles.featureValue}>{camper.height}</span>
    </div>
    <div className={styles.featureItem}>
      <span className={styles.featureLabel}>Consumption</span>
      <span className={styles.featureValue}>{camper.consumption}</span>
    </div>
        </div>
      )}

      {activeTab === 'Reviews' && (
        <div className={styles.tabContent}>
          {reviews?.length > 0 ? (
            reviews.map((r, idx) => (
              <div key={idx} className={styles.review}>
                <p><strong>{r.reviewer_name}</strong> ({r.reviewer_rating}⭐)</p>
                <p>{r.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      )}
</div>
      
        <div className={styles.rightContent}>
          <form className={styles.bookingForm} onSubmit={handleSubmit}>
<h3 className={styles.formTitle}>Book your campervan now</h3>
      <p className={styles.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>
<input
        type="text"
        name="name"
        placeholder="Name*"
        value={formData.name}
        onChange={handleChange}
        required
        className={styles.input}
      />

      <input
        type="email"
        name="email"
        placeholder="Email*"
        value={formData.email}
        onChange={handleChange}
        required
        className={styles.input}
      />

    <label className={styles.label}>
  Booking dates*
  <div className={styles.datePickers}>
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      selectsStart
      startDate={startDate}
      endDate={endDate}
      placeholderText="Start date"
      className={styles.input}
      dateFormat="dd/MM/yyyy"
    />
    <DatePicker
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      selectsEnd
      startDate={startDate}
      endDate={endDate}
      minDate={startDate}
      placeholderText="End date"
      className={styles.input}
      dateFormat="dd/MM/yyyy"
    />
  </div>
</label>

      <textarea
        name="comment"
        placeholder="Comment"
        value={formData.comment}
        onChange={handleChange}
        className={styles.textarea}
      />
            <button type="submit" className={styles.submitButton}>Send</button>
          </form>
        
      </div>
      </div>
    </div>
    
    )


}

export default CamperDetails;