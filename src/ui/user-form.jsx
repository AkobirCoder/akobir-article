import React from 'react';
<<<<<<< HEAD
import { Input, Textarea, userFormInputProps, userFormInputSocilasProps } from '.';

const UserForm = ({formData, changeHandlerInput, formSubmit}) => {
    return (
        <form onSubmit={formSubmit}>
            <>
                {
                    userFormInputProps.map((inputProp) => {
                        return (
                            <Input 
                                key={inputProp.id} 
                                {...inputProp} 
                                value={formData[inputProp.name]} 
                                changeHandlerInput={changeHandlerInput}
                            />
                        );
                    })
                }
            </>
            <Input
                label={'Study'}
                placeholder={'Study'}
                name={'study'}
                value={formData.study}
                changeHandlerInput={changeHandlerInput}
            />
            <Textarea
                label={'Description'} 
                placeholder={'Description'} 
                name={'description'} 
                value={formData.description} 
                changeHandlerInput={changeHandlerInput}
                height={'140px'}
            />
            <div className='row g-0 g-md-3 pt-0 pt-md-3'>
                {
                    userFormInputSocilasProps.map((inputProp) => {
                        return (
                            <div className='col-12 col-md-6' key={inputProp.id}>
                                <Input
                                    key={inputProp.id}
                                    {...inputProp}
                                    name={`socials.${inputProp.name}`}
                                    value={formData.socials[inputProp.name]}
                                    changeHandlerInput={changeHandlerInput}
                                    type={'url'}
                                    label={inputProp.label}
                                    placeholder={inputProp.placeholder}
                                />
                            </div>
                        );
                    })
                }
            </div>
            <button type='submit' className='btn btn-success w-100 px-2 mt-3'>Save</button>
        </form>
=======

const UserForm = () => {
    return (
        <div></div>
>>>>>>> 13a2f5abc137d40a58da1d9d239256ea19bcebfe
    );
}

export default UserForm;