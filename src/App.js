import React, { useState } from 'react'
import "./main.css"


const App = () => {
  const [formData, setformData] = useState({
    title: "",
    desc: ""
  })
  const [mainTask, setMainTask] = useState([])


  function changeHandler(event) {
    const { name, value } = event.target;
    setformData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    setMainTask((prevTasks) => [
      ...prevTasks,
      {
        title: formData.title,
        desc: formData.desc,
      },
    ]);

    setformData({
      title: "",
      desc: "",
    });
  }

  function deleteHandler(i) {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);

  }

  let renderTask = <h2 className="text-white">No Task Available</h2>


  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="items-center flex justify-between mb-8">
          <div className="text-white flex justify-between w-2/3">
            <h5 className="text-white font-bold text-xl">{t.title}</h5>
            <h6 className="">{t.desc}</h6>
          </div>
          <button className="bg-red-600 text-white p-5 font-bold text-xl" onClick={() => { deleteHandler(i) }}>Delete</button>
        </li>
      )
    })
  }


  return (
    <>
      <h1 className="bg-black text-white  text-center p-5  font-bold text-5xl">Things You Must Do</h1>
      <form onSubmit={submitHandler} className="bg-slate-500 ">
        <input
          placeholder="Enter Task Title"
          type="text" className="bg-black text-2xl text-white m-10 p-5 border-white border-4 outline-none"
          name="title"
          value={formData.title}
          onChange={changeHandler} />
        <input
          placeholder="Enter Description"
          type="text" className="bg-black text-2xl text-white m-10 p-5 border-white border-4 outline-none"
          name="desc"
          value={formData.desc}
          onChange={changeHandler} />
        <button className="bg-white p-5 m-10 border-black border-4 text-2xl font-bold" >Add Task</button>
      </form>
      <hr />
      <div className="bg-black p-6 m-5">
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default App;