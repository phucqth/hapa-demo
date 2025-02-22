const HomePage = () => {
    return (
        <div className='flex flex-col h-full'>
            <div className='text-white font-bold mb-4'>
                <h1 className='text-3xl '>Xin chào,</h1>
                <h1 className='text-3xl'>Thượng Quang Phúc</h1>
            </div>

            <div className=' border-white border shadow-md bg-white rounded-lg p-4 mt-4'>
                <h1 className='text-xl font-bold'>Lõi lọc sắp tới hạn thay</h1>
                <div className='mt-4'>
                    <div className='flex bg-gray-300 p-2 mt-2' />
                    <div className='flex bg-gray-300 p-2 mt-2' />
                    <div className='flex bg-gray-300 p-2 mt-2' />
                    <div className='flex bg-gray-300 p-2 mt-2' />
                    <div className='flex bg-gray-300 p-2 mt-2' />
                    <div className='flex bg-gray-300 p-2 mt-2' />
                    <div className='flex bg-gray-300 p-2 mt-2 w-[30%]' />
                </div>
            </div>
            <div className=' border-white border shadow-md bg-white rounded-lg p-4 mt-4'>
                <h1 className='text-xl font-bold'>Hoạt động gần đây</h1>
                <div className='mt-4'>
                    <div className='flex bg-gray-300 p-2 mt-2' />
                    <div className='flex bg-gray-300 p-2 mt-2' />
                    <div className='flex bg-gray-300 p-2 mt-2' />
                    <div className='flex bg-gray-300 p-2 mt-2' />
                    <div className='flex bg-gray-300 p-2 mt-2' />
                    <div className='flex bg-gray-300 p-2 mt-2' />
                    <div className='flex bg-gray-300 p-2 mt-2' />
                    <div className='flex bg-gray-300 p-2 mt-2 w-[30%]' />
                </div>
            </div>
        </div>
    );
};
export default HomePage;
