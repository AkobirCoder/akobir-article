import React from 'react';
import { Input, Textarea, userFormInputProps, userFormInputSocialsProps } from '.';

const UserForm = ({formData, changeHandlerInput, formSubmit}) => {
    return (
        <form onSubmit={formSubmit}>
            <Input 
                label={'Fullname'}
                placeholder={'Fullname'}
                name={'fullname'}
                value={formData.fullname}
                changeHandlerInput={changeHandlerInput}
            />
            <div className='row g-0 g-md-3 pt-0 pt-md-2 pb-0 pb-md-2'>
                {
                    userFormInputProps.map((inputProp) => {
                        return (
                            <div className='col-12 col-md-6' key={inputProp.id}>
                                <Input
                                    {...inputProp}
                                    value={formData[inputProp.name]}
                                    changeHandlerInput={changeHandlerInput}
                                />
                            </div>
                        );
                    })
                }
            </div>
            <div className='pb-0 pb-md-3'>
                <Input
                    label={'Study'}
                    placeholder={'Study'}
                    name={'study'}
                    value={formData.study}
                    changeHandlerInput={changeHandlerInput}
                />
            </div>
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
                    userFormInputSocialsProps.map((inputProp) => {
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