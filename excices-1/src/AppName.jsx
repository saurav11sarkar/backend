const AppName = () => {
    console.log('hello');
    let time = new Date();
    return (
        <h2 className='text-3xl font-extrabold pb-4'>TODO APP: {time.toLocaleDateString()} {time.toLocaleTimeString}</h2>
    )
}

export default AppName;