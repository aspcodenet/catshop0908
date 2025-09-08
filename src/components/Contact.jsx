import { useFormik } from 'formik';


function stefansValidate(values){
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Fältet är mandatory';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  } else if (values.firstName === "stefan") {
    errors.firstName = 'Ej valid name';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;

}


function Contact() {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      txt:''
    },
    validate:stefansValidate,
    onSubmit: values => {
      // fetch  method = post -> JSON API
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <section className="contact" id="contact">
        <h1>Contact us!</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
          />
           {formik.errors.firstName ? <span className="error">{formik.errors.firstName}</span> : null}
          </div>
          <div className="row">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
           {formik.errors.lastName ? <div className="error">{formik.errors.lastName}</div> : null}
           </div>
          <div className="row">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
           {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
           </div>
          <div className="row">
              <label htmlFor="txt">Message</label>
              <textarea
                id="txt"
                name="txt"
                onChange={formik.handleChange}
                value={formik.values.txt}
             />
          </div>
          <button className="storebutton" type="submit">Submit</button>          
        </form>
      </section>
    </>
  )
}

export default Contact
