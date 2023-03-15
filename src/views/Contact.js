import PageSection from '../components/shared/PageSection';

import { mainHeader } from '../components/shared/PageSection';
const Contact = () => {
  const mainSection = new PageSection('main').setContent(
    mainHeader('Contact', 'contact us', ['background-yellow-100'])
  );
  const contactForm = ()=>{
    return `
    <div class='p-2 p-md-3 p-lg-3 background-yellow-100' >
    <form class='background-gray-100 p-4  w-75 m-auto' >
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
   
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
  `
  }
 
  return `${mainSection.tag.outerHTML}${contactForm()}`;
};

export default Contact;
