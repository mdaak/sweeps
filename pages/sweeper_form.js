import React, { useState } from 'react';
import styles from '../styles/sweepsForm.module.scss'

function SweeperForm () {
  const [ formData, setFormData] = useState({
    name:'',
    mail:'',
    age:'',
    phone:'',
    address:'',
    description:''
  }); 
  const handleChange =(e)=>{
    
    if (e.target.name ==='name') {
      setFormData( {...formData,
        name:e.target.value
      })
    } else if (e.target.name ==='mail') {
      setFormData({...formData,
        mail:e.target.value
      })
    } 
    else if(e.target.name ==='age'){
      setFormData({...formData,
        age:e.target.value
      })
    }
    else if(e.target.name ==='phone'){
      setFormData({...formData,
        phone:e.target.value
      })
    }
    else if(e.target.name ==='address'){
      setFormData({...formData,
        address:e.target.value
      })
    }
    else if(e.target.name ==='description'){
      setFormData({...formData,
        description:e.target.value
      })
    }
    else {
        console.log('no data comming',formData)
    }
  }
  
  const{name,mail, age,phone, address, description}=formData;
  const handleSubmit =(e)=>{
    e.preventDefault()
    const{name,mail, age}=formData;
    alert([name, mail, age,phone, address, description])
  }
  
  return (
    <div className={styles.formPage}>
      <div className={styles.form}>
        <form  onSubmit={handleSubmit} >
          <div className={styles.form_field}>
            <input className={styles.item1} value={name} onChange={handleChange} id='name' name='name' type='text' placeholder='name'/>
            <input className={styles.item2} value={mail} onChange={handleChange} id='mail' name='mail' type='email' placeholder='mail address'/>
            <input className={styles.item3} value={age} onChange={handleChange} id='age' name='age' type='number' placeholder='age'/>
            <input className={styles.item4} value={phone} onChange={handleChange} id='phone' name='phone' type='number' placeholder='age'/>
            <input className={styles.item5} value={address} onChange={handleChange} id='address' name='address' type='text' placeholder='address'/>
            <textarea className={styles.item6} value={description} onChange={handleChange} id='description' name='description' type='text' placeholder='description'/>
          </div>
          <div>
            <input style={{margin:'1.5rem', padding:'5px 10px' }} type='submit' value='Submit'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SweeperForm ;