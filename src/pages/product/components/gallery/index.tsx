import { useState } from 'react';

/**
 * Images should have same width and height to functioning correctly
 */
export default function Gallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const zoomer = e.currentTarget;
    const { offsetX } = e.nativeEvent;
    const { offsetY } = e.nativeEvent;
    const x = (offsetX / zoomer.offsetWidth) * 100;
    const y = (offsetY / zoomer.offsetHeight) * 100;
    zoomer.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <div className="flex justify-center items-center sm:items-start flex-col-reverse sm:flex-row gap-8">
      <div className="flex flex-row sm:flex-col gap-8">
        {images.map((image) => (
          <button
            type="button"
            key={image}
            onClick={() => setSelectedImage(image)}
          >
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="h-14 w-14 sm:h-20 sm:w-20 bg-cover bg-center bg-no-repeat rounded-[10px]"
            />
          </button>
        ))}
      </div>

      <figure
        style={{ backgroundImage: `url(${selectedImage})` }}
        className="h-80 w-80 sm:h-[420px] sm:w-[420px] bg-no-repeat bg-[50%_50%] overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <img
          src={selectedImage}
          alt="zoomer"
          className="hover:opacity-0 transition-opacity duration-500"
        />
      </figure>
    </div>
  );
}
