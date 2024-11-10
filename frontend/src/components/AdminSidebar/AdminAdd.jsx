import React, { useState } from "react";
import {
  FileText,
  MapPin,
  Tag,
  Hash,
  AlignLeft,
  Star,
  Phone,
  ClipboardCheck,
  Clock,
  DollarSign,
} from "lucide-react";
import { addEvent } from '../../api';

const AdminAdd = ({ current, setCurrent, isCollapsed, setIsCollapsed }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [contact, setContact] = useState("");
  const [review, setReview] = useState("");
  const [cost, setCost] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [photos, setPhotos] = useState([]);
  const [message, setMessage] = useState(null); // State for success/error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const eventData = {
        name,
        category,
        categoryId,
        completeAddress: address,
        description,
        rating,
        contactNumber: contact,
        singleLineReview: review,
        tentativeCost: cost,
        openTime,
        closeTime,
        backgroundImageLink: '', // Add any necessary fields here
      };
      
      // Call the addEvent function from api.js
      await addEvent(eventData);
      
      // Reset the form fields
      setName('');
      setCategory('');
      setCategoryId('');
      setAddress('');
      setDescription('');
      setRating(0);
      setContact('');
      setReview('');
      setCost('');
      setOpenTime('');
      setCloseTime('');
      setPhotos([]);
      
      // Set success message
      setMessage({ type: 'success', text: 'Submission successful!' });
    } catch (err) {
      console.error('Error adding event:', err);
      // Set error message
      setMessage({ type: 'error', text: 'Error adding event. Please try again.' });
    }
  };

  const handlePhotoUpload = (e) => {
    setPhotos([...photos, ...e.target.files]);
  };

  return (
    <div className="flex justify-center w-full m-10">
      <div
        className={
          current === "Add Records"
            ? "bg-white shadow-lg rounded-lg w-full max-w-3xl p-8"
            : "hidden"
        }
      >
        <h2 className="text-2xl font-bold mb-6">Add New Place</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="flex items-center space-x-4">
            <FileText className="w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Name of the place"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

         {/* Category */}
<div className="flex items-center space-x-4">
  <Tag className="w-6 h-6 text-gray-500" />
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
  >
    <option value="" disabled>Select Category</option>
    <option value="Outdoor Adventure">Outdoor Adventure</option>
    <option value="Water Activities">Water Activities</option>
    <option value="Extreme Sports">Extreme Sports</option>
    <option value="Fitness">Fitness</option>
    <option value="Sports">Sports</option>
    <option value="Dining">Dining</option>
    <option value="Food & Drink">Food & Drink</option>
    <option value="Nightlife">Nightlife</option>
    <option value="Cultural Experience">Cultural Experience</option>
    <option value="Learning">Learning</option>
    <option value="Festivals & Events">Festivals & Events</option>
    <option value="Entertainment">Entertainment</option>
    
  </select>
</div>

{/* Category ID */}
<div className="flex items-center space-x-4">
  <Hash className="w-6 h-6 text-gray-500" />
  <select
    value={categoryId}
    onChange={(e) => setCategoryId(e.target.value)}
    className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
  >
    <option value="" disabled>Select Category ID</option>
    <option value="1">1 - Outdoor Adventure</option>
    <option value="2">2 - Water Activities</option>
    <option value="3">3 - Extreme Sports</option>
    <option value="4">4 - Fitness</option>
    <option value="5">5 - Sports</option>
    <option value="6">6 - Dining</option>
    <option value="7">7 - Food & Drink</option>
    <option value="8">8 - Nightlife</option>
    <option value="9">9 - Cultural Experience</option>
    <option value="10">10 - Learning</option>
    <option value="11">11 - Festivals & Events</option>
    <option value="12">12 - Entertainment</option>
    
  </select>
</div>


          {/* Address */}
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-gray-500 mt-1" />
            <textarea
              placeholder="Complete Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 resize-none h-20"
            />
          </div>

          {/* Description */}
          <div className="flex items-start space-x-4">
            <AlignLeft className="w-6 h-6 text-gray-500 mt-1" />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 resize-none h-20"
            />
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-4">
            <Star className="w-6 h-6 text-gray-500" />
            <input
              type="number"
              placeholder="Rating"
              min="0"
              max="5"
              step="0.1"
              value={rating}
              onChange={(e) => setRating(parseFloat(e.target.value))}
              className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Contact */}
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-gray-500" />
            <input
              type="tel"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Review */}
          <div className="flex items-center space-x-4">
            <ClipboardCheck className="w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Single Line Review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Cost */}
          <div className="flex items-center space-x-4">
            <DollarSign className="w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Tentative Cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Open Time */}
          <div className="flex items-center space-x-4">
            <Clock className="w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Open Time"
              value={openTime}
              onChange={(e) => setOpenTime(e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Close Time */}
          <div className="flex items-center space-x-4">
            <Clock className="w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Close Time"
              value={closeTime}
              onChange={(e) => setCloseTime(e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Photos */}
          <div className="flex items-center space-x-4">
            <FileText className="w-6 h-6 text-gray-500" />
            <input
              type="file"
              multiple
              onChange={handlePhotoUpload}
              className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 font-semibold text-white bg-blue-500 rounded-md hover:bg-grey1 focus:outline-none focus:bg-blue-600"
          >
            Add Place
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAdd;
