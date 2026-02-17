import React from 'react';
import { 
    Input, 
    Select, 
    Textarea, 
    userFormInputProps, 
    userFormInputSocialsProps 
} from '../../ui/index';

const UserForm = ({formData, changeHandlerInput, formSubmit}) => {
    return (
        <form onSubmit={formSubmit}>
            <div className='row row-cols-1 row-cols-md-3 g-0'>
                <div className='pe-0 pe-md-3 mb-2 mb-md-0'>
                    <Input
                        label={'Fullname'}
                        placeholder={'Fullname'}
                        name={'fullname'}
                        value={formData.fullname}
                        changeHandlerInput={changeHandlerInput}
                    />
                </div>
                <div className='pe-0 pe-md-3 mb-2 mb-md-0'>
                    <Input
                        label={'Username'}
                        placeholder={'Username'}
                        name={'username'}
                        value={formData.username}
                        changeHandlerInput={changeHandlerInput}
                    />
                </div>
                <div className='pe-0'>
                    <Select 
                        label={'Pronoun'} 
                        placeholder={'Pronoun'}
                        name={'pronoun'}
                        value={formData.pronoun}
                        changeHandlerInput={changeHandlerInput}
                    />
                </div>
            </div>
            <div className='row g-0 g-md-3 pt-0 pt-md-2 pb-0 pb-md-2 mb-0 mb-md-2'>
                {
                    userFormInputProps.map((inputProp) => {
                        return (
                            <Input
                                mark={'user-form-input'}
                                key={inputProp.id}
                                {...inputProp}
                                value={formData[inputProp.name]}
                                changeHandlerInput={changeHandlerInput}
                            />
                        );
                    })
                }
            </div>
            <div className='mb-2 mb-md-3'>
                <Input 
                    label={'Description'}
                    placeholder={'Description'}
                    name={'description'}
                    value={formData.description}
                    changeHandlerInput={changeHandlerInput}
                />
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-0 mb-2 mb-md-3'>
                <div className='pe-0 pe-md-3 mb-2 mb-md-0'>
                    <Input
                        label={'Study'}
                        placeholder={'Study'}
                        name={'study'}
                        value={formData.study}
                        changeHandlerInput={changeHandlerInput}
                    />
                </div>
                <div className='pe-0 pe-md-3 mb-2 mb-md-0'>
                    <Input
                        label={'Organization'}
                        placeholder={'Organization'}
                        name={'organization'}
                        value={formData.organization}
                        changeHandlerInput={changeHandlerInput}
                    />
                </div>
                <div className='pe-0'>
                    <Input
                        label={'Location (country, city)'}
                        placeholder={'Location (country, city)'}
                        name={'location'}
                        value={formData.location}
                        changeHandlerInput={changeHandlerInput}
                    />
                </div>
            </div>
            <Textarea
                label={'Bio'} 
                placeholder={'Bio'} 
                name={'bio'} 
                value={formData.bio} 
                changeHandlerInput={changeHandlerInput}
                height={'140px'}
            />
            <div className='row g-0 g-md-3 pt-0 pt-md-2'>
                {
                    userFormInputSocialsProps.map((inputProp) => {
                        return (
                            <div className='col-12 col-md-6 mb-2 mb-md-0' key={inputProp.id}>
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