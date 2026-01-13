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
      }} className="flex lg:w-1/2 px-10 py-5 gap-4 flex-col items-start bg-gray-300">
        <h1 className='text-3xl font-bold'>Add a Note</h1>

        <input type="text"
          placeholder='Enter Notes Heading'
          className='px-5 py-2 font-medium rounded w-full border-2 outline-none'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea className='w-full font-medium h-34 p-4 rounded border-2 outline-none'
          placeholder='Write Details Here...'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className='px-5 py-2 w-full bg-black text-white rounded active:scale-95'>Add Note</button>
      </form>

      <div className='lg:w-1/2 px-10 lg:border-l-2 bg-gray-400 py-5'>
        <h1 className='text-3xl font-bold mb-5'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 overflow-auto h-90% items-start justify-start'>
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className='w-50 h-60 rounded-2xl px-4 py-12 pb-5 flex flex-col bg-cover relative items-start justify-between bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
                <div>
                  <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                  <p className='leading-tight text-xs text-gray-700 mt-2 font-semibold'>{elem.details}</p>
                </div>
                <button onClick={() => deleteNote(idx)} className='font-bold w-full bg-amber-300 text-xs py-1 rounded text-bold cursor-pointer active:scale-95'>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App