import Image from 'next/image';
import { fraunces, inter } from '../app/layout';
import { Button } from '@/components/ui/button';
import { BookHeartIcon, BookOpen } from 'lucide-react';
// import BookCover from "@/assets/book-cover.jpg"
// import Book from "../../assets/book-cover.jpg"
const Hero = () => {
    return (
        <div className='  p-3 bg-[url(/images/silhouette1.png)] bg-cover bg-no-repeat ' >
            <div className='grid grid-cols-2 gap-6 mx-auto container'>
                <div className='flex w-[80%] flex-col justify-center items-start'>
                    {/* <Image src={"/images/web-reader.png"} width={100} height={100} /> */}
                    <h2 className={`${fraunces.className} text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-19 text-[#006684] font-bold `}>Discover Your Next Great Read. </h2>
                    <h1 className={`my-2 ${inter.className}`}>
                        A sanctuary for deep reading, bringing the intellectual heritage of traditional publishing to a modern digital library.
                    </h1>
                    <br />

                    <div className=' mt-4 space-x-2'>
                        <Button variant='deepBlue' className={"px-6 py-5"}>Browse Library</Button>
                        <Button variant='outline' className={"px-6 py-5"}>Browse Library</Button>
                    </div>
                </div>

                <div className={`relative p-5`}>

                    <Image src={"/images/book-reading.jpg"} className='rounded-2xl' width={900} height={900} alt='book' />
                </div>
            </div>
        </div>
    );
};

export default Hero;