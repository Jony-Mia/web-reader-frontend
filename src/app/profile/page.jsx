import { inter } from '../layout';
import Image from 'next/image';

const ProfilePage = () => {
    

    return (
        <div >
            <div className='container mx-auto p-4'>
                <div style={{ height: "300px" }} className='flex flex-col justify-end shadow-md rounded-2xl  bg-linear-30 to-red-300 from-sky-300 '>
                    <div className='p-5 flex items-center gap-5'>
                        {/* <div className='h-[120px] rounded-full w-30 bg-purple-400'></div> */}
                        <Image src={"/images/hack.webp"} height={120} width={120} className='rounded-full' alt='avatar' />
                        <div>
                            <p className={` ${inter.className} text-2xl`}>
                                Jony Mia
                            </p>
                            <p>
                                Writer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;