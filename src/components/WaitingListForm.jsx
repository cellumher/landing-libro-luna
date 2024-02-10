import { useState } from "react";
import { doc, collection, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from "../firebase/config";

export const WaitingListForm = () => {


  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(email);

    const newDoc = doc(collection( FirebaseDB, "emails" ));
    setDoc(newDoc, {email}).then((resp) => {
      console.log(resp);
      setEmail("");
    })
  }
  

  return (
    <div className="flex items-center h-full">
				<form onSubmit={onSubmitForm}>
					<legend className="mb-2">
            Introduce tu correo electrónico y te notificaremos cuando esté disponible
          </legend>
					<div className="flex w-full justify-center items-end gap-1">
						<label htmlFor="email" className="w-full">Email
						<input type="email" id="email" name="email" className="bg-slate-50 text-gray-900 
						text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
						block w-full p-2.5" value={email} placeholder="Email" required onChange={handleChange} /></label>
		
						<button type="submit" className="text-white bg-gradient-to-br from-cyan-600 
						to-[#283777] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
						focus:ring-blue-300 dark:focus:ring-[#ec9555] font-medium rounded-lg 
						text-sm px-5 py-2.5 text-center transition-all duration-300">
							Avísame
						</button>
					</div>
	
				</form>
			</div>
  )
}