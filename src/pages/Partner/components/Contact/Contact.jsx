import React, { useState } from 'react';

// import validator from 'validator'
import './Contact.css'
const Contact = () => {
  const initialValues = { fullname: '', email: '', company: '', title:'', content:'', phone:'' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({...formValues, [name]:value});
      setFormErrors({...formErrors, [name]: ''});
  }

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if(value === '') {
      setFormErrors({...formErrors, [name]: 'Vui lòng nhập trường này'})
    }
  }

  const validateForm = (values) => {
      const errors = {};

      if(values.fullname === '') {
        errors.fullname = 'Vui lòng nhập trường này';
      }
      if(values.email === '') {
        errors.email = 'Vui lòng nhập trường này';
      }
      if(values.company === '') {
        errors.company = 'Vui lòng nhập trường này';
      }
      if(values.phone === '') {
        errors.phone = 'Vui lòng nhập trường này';
      }
      if(values.title === '') {
        errors.title = 'Vui lòng nhập trường này';
      }
      if(values.content === '') {
        errors.content = 'Vui lòng nhập trường này';
      }
      return errors;
  }

  const handleSubmit = (e)  => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
  }

  return (
    <section id='lien-he' className='contact section-block'>
        <h3 className='section-heading'>Liên hệ</h3>
        <div className='contact__wrapper'>
            <div className='contact__text'>
                <h4>Cho chúng tôi biết chúng tôi có thể làm gì cho bạn</h4>
            </div>

            <form className='contact__form' action='' id='contact-form' onSubmit={(e) => handleSubmit(e)}>
                <div className='contact__form-control'>
                    <input 
                        id='fullname'
                        name='fullname'
                        type='text'
                        placeholder='TÊN'
                        value={formValues.fullname}
                        onChange = {(e) => handleChange(e)}
                        onBlur = {(e) => handleBlur(e)}
                    />
                  <span className='contact__form-error'>{formErrors.fullname}</span>
                </div>
                <div className='contact__form-control'>
                    <input 
                        id='email'
                        name='email'
                        type='email'
                        placeholder='EMAIL'
                        value={formValues.email}
                        onChange = {(e) => handleChange(e)}
                        onBlur = {(e) => handleBlur(e)}
                    />
                    <span className='contact__form-error'>{formErrors.email}</span>
                </div>  
                <div className='contact__form-control'>
                    <input 
                        id='company'
                        name='company'
                        type='text'
                        placeholder='TÊN DOANH NGHIỆP'
                        value={formValues.company}
                        onChange = {(e) => handleChange(e)}
                        onBlur = {(e) => handleBlur(e)}
                    />
                    <span className='contact__form-error'>{formErrors.company}</span>
                </div>  
                <div className='contact__form-control'>
                    <input 
                        id='phone'
                        name='phone'
                        type='text'
                        placeholder='SỐ ĐIỆN THOẠI'
                        value={formValues.phone}
                        onChange = {(e) => handleChange(e)}
                        onBlur = {(e) => handleBlur(e)}
                    />
                    <span className='contact__form-error'>{formErrors.phone}</span>
                </div>  
                <div className='contact__form-control full-row-grid'>
                    <input 
                        id='title'
                        name='title'
                        type='text'
                        placeholder='TIÊU ĐỀ'
                        value={formValues.title}
                        onChange = {(e) => handleChange(e)}
                        onBlur = {(e) => handleBlur(e)}
                    />
                    <span className='contact__form-error'>{formErrors.title}</span>
                </div>  
                <div className='contact__form-control full-row-grid'>
                    <input 
                        id='content'
                        name='content'
                        type='text'
                        placeholder='NỘI DUNG'
                        value={formValues.content}
                        onChange = {(e) => handleChange(e)}
                        onBlur = {(e) => handleBlur(e)}
                    />
                    <span className='contact__form-error'>{formErrors.content}</span>
                </div>
                <button className='contact__form-submitBtn'>SUBMIT</button>
                {Object.keys(formErrors).length === 0 && isSubmit && (
                  <div className='contact__form-successMsg'>Cảm ơn bạn đã để lại thông tin. Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất</div>
                )}
            </form>
        </div>
    </section>
  )
}

export default Contact