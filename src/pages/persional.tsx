import { ChevronRight, MapPin, Pen } from 'lucide-react';

const Personal = () => {
    return (
        <>
            <h1 className='text-3xl font-semibold text-white'>
                Thông tin tài khoản
            </h1>
            <div className='flex justify-center mt-8 '>
                <div className='relative'>
                    <img
                        src='/avatar.webp'
                        alt='avatar'
                        className='rounded-full w-32 aspect-square object-cover border-4 border-white'
                    />
                    <div className='absolute bg-white  bottom-1 right-3 rounded-full p-1'>
                        <Pen size={15} />
                    </div>
                </div>
            </div>
            <div className='mt-8 bg-white p-4 rounded-xl gap-2'>
                {information.map((item) => (
                    <div
                        className={`flex flex-row justify-between  mb-2 ${
                            item.id === 1 ? 'font-semibold' : ''
                        }`}
                        key={item.id}
                    >
                        <label className=''>{item.label}:</label>
                        <label className='ml-4'>{item.value}</label>
                    </div>
                ))}
            </div>
            <div className='bg-white p-4 rounded-xl mt-8 flex flex-row justify-between items-center'>
                <MapPin size={50} />
                <div className='flex flex-col w-fit'>
                    <h2 className='font-semibold text-xl'>Địa chỉ</h2>
                    <p className='text-gray-500'>Phường XYZ, Quận 6, TP.HCM</p>
                </div>
                <ChevronRight size={30} />
            </div>
        </>
    );
};
const information = [
    {
        id: 1,
        label: 'Họ và tên',
        value: 'Thượng Quang Phúc',
    },
    {
        id: 2,
        label: 'Số điện thoại',
        value: '035 2427 479',
    },
    {
        id: 3,
        label: 'Email',
        value: 'thuongphuc97@gmail.com',
    },
    {
        id: 4,
        label: 'Sinh nhật',
        value: '1997',
    },
    {
        id: 5,
        label: 'UID',
        value: '123456789',
    },
];
export default Personal;
