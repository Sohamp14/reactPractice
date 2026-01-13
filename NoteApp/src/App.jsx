import { useState } from 'react';


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) => {
    const deleteTask = [...task];
    deleteTask.splice(idx, 1);
    setTask(deleteTask);
  }

  return (
    <div className='h-screen lg:flex'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="flex flex-col gap-4 lg:w-1/2 px-10 py-5 bg-gray-300">
        <h1 className='text-3xl font-bold'>Add a Note</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='w-full px-5 py-2 rounded border-2 outline-none font-medium'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea className='w-full h-34 p-4 rounded border-2 outline-none font-medium'
          placeholder='Write Details Here...'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className='w-full px-5 py-2 rounded bg-black text-white active:scale-95'>Add Note</button>
      </form>

      {/* Notes Section */}
      <div className='lg:w-1/2 px-10 py-5 bg-gray-400 lg:border-l-2'>
        <h1 className='text-3xl font-bold mb-5'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 overflow-auto h-[90%]'>
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className='w-50 h-60 rounded-2xl px-4 py-5 flex flex-col justify-between bg-cover relative 
                bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
                <div>
                  <h3 className='text-lg font-bold leading-tight'>{elem.title}</h3>
                  <p className='mt-2 text-xs font-semibold text-gray-700 leading-tight'>{elem.details}</p>
                </div>
                <button onClick={() => deleteNote(idx)} className='w-full py-1 rounded bg-amber-300 text-xs font-bold active:scale-95'>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App