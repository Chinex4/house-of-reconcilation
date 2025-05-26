import React from 'react';

const sermonVideos = [
  { title: 'The Power of Faith', src: '/videos/sermon1.mp4' },
  { title: 'Walking in the Spirit', src: '/videos/sermon2.mp4' },
  { title: 'Victory in Prayer', src: '/videos/sermon3.mp4' },
  { title: 'Kingdom Mindset', src: '/videos/sermon4.mp4' },
  { title: 'Divine Breakthrough', src: '/videos/sermon5.mp4' },
];

const Sermons = () => {
  return (
    <div className="bg-dark text-white pt-[10rem] pb-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Latest Sermons</h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Watch our recent sermons and be blessed by God's Word.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sermonVideos.map((video, index) => (
          <div key={index} className="bg-white text-dark rounded-xl overflow-hidden shadow-lg">
            <video
              controls
              className="w-full h-64 object-cover"
              src={video.src}
            />
            <div className="p-4 text-center font-medium text-lg text-primary">
              {video.title}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://web.facebook.com/profile.php?id=100064342673269"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition"
        >
          View More on Facebook
        </a>
      </div>
    </div>
  );
};

export default Sermons;
