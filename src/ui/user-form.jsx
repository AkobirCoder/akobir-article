import React from 'react';
import { Input, Textarea, userFormInputProps, userFormInputSocilasProps } from '.';

const UserForm = ({formData, changeHandlerInput, formSubmit}) => {
    return (
        <form onSubmit={formSubmit}>
            <div className='pb-3'>
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
            </div>
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
                name={'bio'} 
                value={formData.bio} 
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
    );
}

export default UserForm;