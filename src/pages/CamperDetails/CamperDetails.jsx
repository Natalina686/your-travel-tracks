import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadCampers } from '../../redux/campersSlice';
import styles from './CamperDetails.module.css';
import Tabs from "../../components/Tabs/Tabs";
import DatePicker from "react-datepicker";
import {toast} from 'react-toastify';




const CamperDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('Features');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const {items: campers, status } = useSelector(state => state.campers);

    const [formData, setFormData] = useState({
  name: '',
  email: '',
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

 
  setFormData({ name: '', email: '' });
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

    const camper = campers.find(c => String(c.id) === id);

    if (!camper) {
        return <p>Camper not found.</p>;
    }

    const { name, price, location, rating, description, gallery, details, reviews } = camper;

    return (
        
        <div className={styles.details}>
      <h1>{name}</h1>
      <p><strong>Price:</strong> {price.toLocaleString('en-US')},00€</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      <p>{description}</p>

      <div className={styles.gallery}>
        {gallery.map((img, idx) => (
          <img key={idx} src={img.thumb} alt={`${name} image ${idx + 1}`} />
        ))}
      
    </div>
    
      
      <Tabs onTabChange={setActiveTab} />

      {activeTab === 'Features' &&  details &&(
        <div className={styles.tabContent}>
          <ul>
            <li><strong>Adults:</strong> {details?.adults}</li>
            <li><strong>Engine:</strong> {details?.engine}</li>
            <li><strong>Transmission:</strong> {details?.transmission}</li>
            <li><strong>Fuel:</strong> {details?.form}</li>
            <li><strong>Length:</strong> {details?.length} m</li>
            <li><strong>Width:</strong> {details?.width} m</li>
            <li><strong>Height:</strong> {details?.height} m</li>
            <li><strong>Consumption:</strong> {details?.consumption}</li>
          </ul>
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

      {activeTab === 'Booking' && (
        <div className={styles.tabContent}>
          <form className={styles.bookingForm} onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name}
      onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email}
      onChange={handleChange} required />
            </label>
            <label>
              Booking dates:
              <div className={styles.datePickers}>
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      selectsStart
      startDate={startDate}
      endDate={endDate}
      placeholderText="Start date"
    />
    <DatePicker
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      selectsEnd
      startDate={startDate}
      endDate={endDate}
      minDate={startDate}
      placeholderText="End date"
    />
  </div>
            </label>
            <button type="submit">Book now</button>
          </form>
        </div>
      )}
    </div>
    
    )


}

export default CamperDetails;