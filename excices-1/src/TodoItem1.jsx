const TodoItem1 = () => {
    let todoName = 'Buy Milk';
    let todoData = '4/10/2023';
    return (
        <div>
            <div className='grid gap-3 grid-cols-5 justify-center items-center mt-3'>
                <div className='col-span-2 '>
                    <h2 className='w-full'>{todoName}</h2>
                </div>

                <div className='col-span-2'>
                    <h2 className='w-full'>{todoData}</h2>
                </div>

                <div className='col-span-1'>
                    <button className='w-full bg-green-500 text-white p-2 rounded'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem1;