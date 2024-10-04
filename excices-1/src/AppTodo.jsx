export default function AppTodo() {
    return (
        <div>
            <div className='grid gap-3 sm:grid-cols-3 lg:grid-cols-5 justify-center items-center'>

                <div className='lg:col-span-2 sm:col-span-3'>
                    <input className='w-full p-2 rounded' type="text" placeholder='Enter Here' />
                </div>

                <div className='lg:col-span-2 sm:col-span-3'>
                    <input className='w-full p-2 rounded text-center' type="date" />
                </div>

                <div className='lg:col-span-1 sm:col-span-3'>
                    <button className='w-full bg-blue-500 text-white p-2 rounded'>Add</button>
                </div>

            </div>
        </div>
    )
}