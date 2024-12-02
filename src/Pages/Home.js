import React, { useState } from 'react';
import './home.css';
import { FaPlus, FaEdit, FaArrowRight, FaWhatsapp, FaRegChartBar, FaEnvelope, FaCopy, FaPaperclip, FaPaperPlane, FaAngleRight, FaChartPie, FaChartBar } from 'react-icons/fa';
import { users } from '../users';
import { TiMessages } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";


const Home = () => {
    const [selectedUser, setSelectedUser] = useState(users[0]);
    const [showForm, setShowForm] = useState(false);



    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };


    const generateInitials = (name) => {
        if (!name) return '';
        const words = name.split(' ');
        return words.length > 1
            ? words[0].charAt(0) + words[1].charAt(0)
            : words[0].charAt(0);
    };


    const generateBackgroundColor = (name) => {
        const colors = [
            '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF2', '#FFA133',
        ];
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length];
    };


    return (
        <div className="home-container">
            {/* Top Section */}
            <div className="top-bar">
                <div className="user-list">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className={`user-item ${selectedUser.id === user.id ? 'selected' : ''}`}
                            onClick={() => handleUserClick(user)}
                        >
                            <div
                                className="user-icon"
                                style={{ backgroundColor: generateBackgroundColor(user.name) }}
                            >
                                {generateInitials(user.name)}
                            </div>

                            <div className="user-name">{user.name}</div>
                        </div>
                    ))}
                </div>
                <div className="top-bar-actions">
                    <button className="message-button"><TiMessages /> Message</button>
                    <button className="arrow-button"><FaAngleRight /></button>
                </div>
            </div>

            {/* Below Section */}
            <div className="below-section">
                {/* Left Section */}
                <div className="left-section">
                    {selectedUser && (
                        <div className="user-details">
                            <div className="user-header">
                                <div
                                    className="user-icon"
                                    style={{ backgroundColor: generateBackgroundColor(selectedUser.name) }}
                                >
                                    {generateInitials(selectedUser.name)}
                                </div>

                                <div>
                                    <h3>{selectedUser.name}</h3>
                                    <p><CiLocationOn /> {selectedUser.address}</p>
                                </div>
                            </div>
                            <div className="info-section">
                                <p>Customer ID: <strong>{selectedUser.customerId}</strong></p>
                                <p>Email: <strong>{selectedUser.email}</strong></p>
                                <p>Phone: <strong>{selectedUser.phone}</strong></p>
                                <button className="add-button" onClick={toggleForm}><FaPlus /> Add</button>
                                {showForm && <div className="form"></div>}
                            </div>
                            <div className="info-section">
                                <p>Loyalty Tier: <strong>{selectedUser.loyaltyTier}</strong></p>
                                <p>Segment: <strong>{selectedUser.segment}</strong></p>
                                <button className="add-button" onClick={toggleForm}><FaPlus /> Add</button>
                            </div>
                            <div className="info-section">
                                <p>Lifetime Value: <strong>{selectedUser.lifetimeValue}</strong></p>
                                <p>Propensity to Purchase: <strong><FaChartPie size={24} color="orange"/> {selectedUser.propensityToPurchase}</strong></p>
                                <button className="add-button" onClick={toggleForm}><FaPlus /> Add</button>
                            </div>
                            <div className="info-section">
                                <p>Engagement Score: <strong><FaChartPie size={24} color="green" /> {selectedUser.engagementScore}</strong></p>
                                <button className="add-button" onClick={toggleForm}><FaPlus /> Add</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Middle Section */}
                <div className="middle-section">
                    <div className="conversion-buttons">
                        <button>Conversion</button>
                        <button>Address Update</button>
                        <button>Fee Reversal</button>
                        <button>Retail</button>
                        <button>Escalate</button>
                    </div>
                    {/* Chat Section */}
                    <div className="chat-section">
                        <div className="chat-header">
                            <div className="chat-icon">C</div>
                            <div>
                                <h4>Conversion</h4>
                                <p>Received by: WhatsApp <FaWhatsapp /></p>
                            </div>
                            <div className="chat-options"><FaEdit /> ...</div>
                        </div>
                        <div className="chat-messages">
                            <div className="message sent">Hello! How can I assist you?</div>
                            <div className="message received">I need help with my order.</div>
                        </div>
                        <div className="chat-input">
                            <input type="text" placeholder="Type a message" />
                            <FaPaperclip className="attachment-icon" />
                            <FaPaperPlane className="send-icon" />
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="right-section">
                    <div className="top-right">
                        <h4>Ask Catura</h4>
                    </div>
                    <div className="middle-right">
                        <div className="dropdown">
                            <FaWhatsapp /> WhatsApp
                            <FaEdit />
                        </div>
                        <div className="dropdown">
                            Greeting <FaEdit />
                        </div>
                    </div>
                    <div className="greeting-section">
                        <h4>Greeting Template</h4>
                        <p>Some content here</p>
                        <button><FaCopy /> Copy to Send</button>
                        <button>Preview</button>
                    </div>
                    <div className="action-launcher">
                        <h4>Action Launcher</h4>
                        <input type="text" placeholder="Search..." />
                        <button><FaPlus /> Add Action</button>
                    </div>
                    <div className="favorite-cases">
                        <h4>Case Favorite</h4>
                        <p>Some test text here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
