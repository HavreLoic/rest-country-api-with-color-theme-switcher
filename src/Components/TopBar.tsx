
export const TopBar = () => {
    const MoonIcon = 'assets/icons/moon.svg';

    return (
        <div className='flex justify-between p-5 shadow-sm'>
            <p className='font-extrabold text-xl'>Where in the world?</p>
            <div className='flex'>
                <img src={MoonIcon} alt="moon" className='w-5 mr-2' />
                <p className='font-semibold'>Dark Mode</p>
            </div>
        </div>
    )
}
