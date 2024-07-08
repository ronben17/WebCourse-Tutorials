import React, { useState } from 'react';
import prevIcon from './assets/action-undo-svgrepo-com.svg';
import nextIcon from './assets/action-redo-svgrepo-com.svg';

function App() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const images = Array.from({ length: 60 }, (_, i) => `https://picsum.photos/id/${i + 1}/50/50`);

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => {
            if (prevIndex === null || prevIndex === images.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => {
            if (prevIndex === null || prevIndex === 0) {
                return images.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        style={{ margin: '10px', cursor: 'pointer', border: selectedImageIndex === index ? '2px solid red' : 'none' }}
                        onClick={() => setSelectedImageIndex(index)}
                    />
                ))}
            </div>
            {selectedImageIndex !== null && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', position: 'relative' }}>
                    <img
                        src={prevIcon}
                        alt="Previous"
                        onClick={handlePrev}
                        style={{
                            cursor: 'pointer',
                            position: 'absolute',
                            left: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '30px',
                            height: '30px'
                        }}
                    />
                    <img
                        src={images[selectedImageIndex].replace('50/50', '350/350')}
                        alt="Selected"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        src={nextIcon}
                        alt="Next"
                        onClick={handleNext}
                        style={{
                            cursor: 'pointer',
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '30px',
                            height: '30px'
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
