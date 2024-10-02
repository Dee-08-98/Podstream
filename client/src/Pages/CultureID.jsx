
import React from 'react';
import { useParams } from 'react-router-dom';
import f8 from '../assets/f8.jpeg';
import b6 from '../assets/b6.jpeg';

const img = [
    {
        img: [
            {
                name: "Culture",
                img: "https://media.npr.org/assets/img/2020/12/07/99percent_custom-ad44d7569e602b2698267142396e71e91c539149.jpg",
            },
            {
                name: "Business",
                img: "https://m.media-amazon.com/images/I/41-7FShV-3L.jpg",
            }
        ]
    }
];

function CultureID(props) {
    const { id } = useParams();
    console.log(id);
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
            <div className="w-full  lg:px-28 py-8">
                {img.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:space-x-4 mb-8">
                        <div className="flex-1">
                            <img src={item.img[0].img} alt={item.img[0].name} className='h-80 w-full object-cover rounded-lg shadow-lg' />
                        </div>
                        <div className="hidden md:flex-1">
                            <img src={item.img[1].img} alt={item.img[1].name} className='h-80 w-full object-cover rounded-lg shadow-lg' />
                        </div>
                    </div>
                ))}
                <div className="flex flex-wrap gap-2">
                    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                        <img src={f8} alt="image" className='h-32 w-full object-cover rounded-lg shadow-md' />
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                        <img src={f8} alt="image" className='h-32 w-full object-cover rounded-lg shadow-md' />
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 p-2 hidden lg:block">
                        <img src={b6} alt="image" className='h-32 w-full object-cover rounded-lg shadow-md' />
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 p-2 hidden xl:block">
                        <img src={b6} alt="image" className='h-32 w-full object-cover rounded-lg shadow-md' />
                    </div>
                </div>
            </div>
            <div className="px-4 py-8 max-w-7xl lg:mx-28">
                <h3 className='text-4xl font-extrabold mb-4 '>Sachin Tendulkar: <span className='text-yellow-400'>(The Little Master)</span></h3>
                <div className="border-b-4 border-green-600 mt-4 mb-4"></div>
                <div className="flex items-center mb-2">
                    <p className='text-lg font-semibold'>Born:</p>
                    <span className='ml-3 text-lg'>1958 - Continue</span>
                </div>
                <div className="flex items-center mb-4">
                    <p className='text-lg font-semibold'>D.O.B:</p>
                    <span className='ml-3 text-lg'>24/04/1973</span>
                </div>
                <p className='mb-6 text-lg leading-relaxed'>
                    Sachin Ramesh Tendulkar, widely revered as the "Little Master," is one of the greatest cricketers in the history of the sport. Born on April 24, 1973, in Mumbai, India, Tendulkar's career is a testament to his incredible talent, perseverance, and passion for cricket.
                </p>
                <h3 className='text-3xl font-bold mb-4 text-yellow-400 underline'>Early Life and Career</h3>
                <p className='mb-6 text-lg leading-relaxed'>
                    From a young age, Sachin exhibited prodigious talent in cricket. His journey began in the local lanes of Mumbai, where he honed his skills and drew attention with his remarkable performances. At just 16, he made his international debut for India in a Test match against Pakistan in 1989, signaling the start of a legendary career.
                </p>
                <h3 className='text-3xl font-bold mb-4 text-yellow-400 underline'>Record-Breaking Career</h3>
                <p className='mb-6 text-lg leading-relaxed'>
                    Over the course of his career, Tendulkar achieved numerous records and accolades. He is the highest run-scorer in both Test and One Day International (ODI) cricket, amassing over 15,000 runs in ODIs and 10,000 runs in Tests. In 2010, he became the first player to score a double century in an ODI, a feat that further cemented his status as one of the sport's greats.
                </p>
                <h3 className='text-3xl font-bold mb-4 text-yellow-400 underline'>Impact and Legacy</h3>
                <p className='mb-6 text-lg leading-relaxed'>
                    Sachin Tendulkar's influence extends beyond the cricket field. He has been a source of inspiration for millions of aspiring cricketers around the world. In 2014, he retired from international cricket, leaving behind a legacy of unmatched achievements and contributions to the game.
                </p>
                <h3 className='text-3xl font-bold mb-4 text-yellow-400 underline'>Awards and Recognition</h3>
                <p className='mb-6 text-lg leading-relaxed'>
                    Tendulkar's contributions to cricket have been recognized through numerous awards, including the Bharat Ratna, India's highest civilian award, which he received in 2014. His impact on cricket and his role in popularizing the sport in India are widely acknowledged and celebrated.
                </p>
                <h3 className='text-3xl font-bold mb-4 text-yellow-400 underline'>Conclusion</h3>
                <p className='text-lg leading-relaxed'>
                    Sachin Tendulkar's journey from a young prodigy to a cricketing legend is a remarkable story of talent, hard work, and dedication. His records and achievements are a testament to his skill and perseverance, and his legacy will continue to inspire future generations of cricketers.
                </p>
            </div>
        </div>
    );
}

export default CultureID;
