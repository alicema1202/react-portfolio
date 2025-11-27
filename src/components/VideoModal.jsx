import React from 'react';
import ReactDOM from 'react-dom';

export default function VideoModal({ open, onClose, videoSrc, poster }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      className="video-modal-overlay"
      style={{
        position: 'fixed',
        zIndex: 2000,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        className="video-modal-content"
        style={{
          position: 'relative',
        //   maxWidth: '90vw',
        //   maxHeight: '80vh',
        //   boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 10,
            background: 'rgba(0,0,0,0.5)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 36,
            height: 36,
            fontSize: 24,
            cursor: 'pointer',
          }}
        >
          ×
        </button>
        <video
          src={videoSrc}
          poster={poster}
          controls
          autoPlay
          style={{
            width: '50vw',
            height: '100%',
            maxHeight: '80vh',
            borderRadius: 12,
            // background: '#000',
          }}
        />
      </div>
    </div>,
    document.body // <-- ensures modal is rendered at the top of the DOM
  );
}
