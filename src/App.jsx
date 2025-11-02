import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { supabase } from './supabaseClient'
import SCP from  './SCPs'
import Hamburger from './hamburger';
import './App.css'
import './App_mobile.css'


function App() {
 
  // Component State 
  const [records, setRecords] = useState([]);
  const [view, setView] = useState('home');
  const [selectedName, setSelectedName] = useState(null);
  const [form, setForm] = useState({ Name: '', Class: '', Containment: '', Description: '', Image: ''});

  // Fetch all records on application load
  useEffect(() => {
    fetchRecords();
  }, []);

  async function fetchRecords() {
    const { data, error } = await supabase.from('SCPs').select();
    if (!error) setRecords(data);
  }

  // generic input handler for form elements
  function handleInputChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Send request to Supabase to insert new record
  // Refresh list of records (fetchRecords) after new record submitted
  // Resets the form to empty
  async function handleSubmit() {
    const { data, error } = await supabase.from('SCPs').insert([form]);

    fetchRecords();
    setForm({ Name: '', Class: '', Containment: '', Description: '', Image: '' });
  }

  // Delete record from Supabase then refresh records after deletion
  async function handleDelete(id) {
    await supabase.from('SCPs').delete().eq('id', id);
    fetchRecords();
  }

  // Send request to Supabase to update row / record in table
  // Then refetch all records from table (fetchRecords)
  async function handleEdit(id) {
    await supabase.from('SCPs').update(form).eq('id', id);
    fetchRecords();
    setForm({ Name: '', Class: '', Containment: '', Description: '', Image: '' });
  }

  return (
    <>
        {/**/}
        <div className="pt-4 mx-5" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <h1 className="display-4 mb-0" style={{ flex: '0 1 auto', textAlign: 'center', width: '100%' }}>
              <strong>SCP React Application</strong>
            </h1>

            <div style={{ position: 'absolute', right: 0 }}>
              <Hamburger scps={records} onSelect={(scp) => {setSelectedName(scp); setView('detail');}} onAdminClick={() => setView('admin')} />
            </div>

          </div>

        {
          view === 'detail' && selectedName && (
            
            <SCP selectedSCP={selectedName} />
          )
        }

        {
          view === 'home' && (
            <p className="text-center text-muted">
            <img src="https://raw.githubusercontent.com/BotContrast/SCP-React/refs/heads/main/public/images/SCP-Logo.png" class="rounded mx-auto d-block" alt="SCP logo"></img>
            <h1>SPECIAL CONTAINMENT PROCEDURES FOUNDATION</h1>
            <h5 class="text-dark-emphasis">SECURE, CONTAIN, PROTECT</h5>
            <p class="text-light-emphasis">The Foundation is an international secret society, consisting of a scientific research institution with a paramilitary intelligence agency to support their goals. Despite its secretive premise, the Foundation is entrusted by governments around the world to capture and contain various unexplained phenomena that defy the known laws of nature (referred to as “anomalies,” “SCP objects,” “SCPs,” or colloquially “skips”). They include living beings and creatures, artifacts and objects, locations and places, abstract concepts, and incomprehensible entities which display supernatural abilities or other extremely unusual properties. If left uncontained, many of the more dangerous anomalies will pose a serious threat to humans or even all life on Earth. Their existence is hidden and withheld from the general public in order to prevent mass hysteria, and allow human civilization to continue functioning normally.</p>
            <h2 class="text-dark-emphasis">We died in the darkness so you can live in the light</h2>

            </p>
          )
        }

        {
          view === 'admin' && (
          <div className="admin">
            <h2 className="text-center">Admin Panel</h2>
            <div className="table-wrapper">
            <table>
              <colgroup><col/><col/><col/><col/><col/><col/></colgroup>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Containment</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((rec) => (
                  <tr key={rec.id}>
                    <td data-label="Name">{rec.Name}</td>
                    <td data-label="Class">{rec.Class}</td>
                    <td data-label="Containment">{rec.Containment}</td>
                    <td data-label="Description">{rec.Description}</td>
                    <td data-label="Image">
                      {/*If there is no image mention no image otherwise show image*/}
                      {rec.Image ? (<img src={rec.Image} alt={rec.Name}/>) : (<em>No image available</em>)}
                    </td>
                    <td data-label="Actions">
                      <button onClick={() => setForm(rec)}>Edit</button>
                      <button onClick={() => handleDelete(rec.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>

            <div className="form">
              <input name="Name" value={form.Name} onChange={handleInputChange} placeholder="Name" />
              <input name="Class" value={form.Class} onChange={handleInputChange} placeholder="Class" />
              <input name="Containment" value={form.Containment} onChange={handleInputChange} placeholder="Containment protocol" />
              <input name="Description" value={form.Description} onChange={handleInputChange} placeholder="Description" />
              <input name="Image" value={form.Image} onChange={handleInputChange} placeholder="Image URL" />
              {form.id ? (
                <button onClick={() => handleEdit(form.id)}>Update</button>
              ) : (
                <button onClick={handleSubmit}>Create</button>
              )}
            </div>
          </div>
          
      )
      }

    </div>
    </>
  )
}

export default App
