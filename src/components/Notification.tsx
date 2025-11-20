import React, { useEffect } from 'react';
import './Notification.css';
import { FcCheckmark, FcInfo } from "react-icons/fc";

interface NotificationProps {
  message: string;
  type: 'success' | 'confirm';
  link?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, link, onConfirm, onCancel, onClose }) => {
  useEffect(() => {
    if (type === 'success') {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [type, onClose]);

  return (
    <div className={`notification-overlay ${type}`}>
      <div className={`notification-box ${type}`}>
        <div className="notification-icon">
          {type === 'success' ? <FcCheckmark size={40} /> : <FcInfo size={40} />}
        </div>
        <div className="notification-content">
          <p className="notification-message">{message}</p>
          {link && <p className="notification-link-display">{link}</p>}
        </div>
        
        {type === 'confirm' && (
          <div className="notification-actions">
            <button className="notif-btn cancel" onClick={() => { if(onCancel) onCancel(); onClose(); }}>Cancel</button>
            <button className="notif-btn confirm" onClick={() => { if(onConfirm) onConfirm(); onClose(); }}>Open Link</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
