export {default as Input} from './input';

export const loginInputProps = [
    {
        id: 'floatingEmail',
        type: 'email',
        name: 'email',
        completeName: 'email',
        placeholder: 'name@example.com',
        label: 'Email address',
    },
    {
        id: 'floatingPassword',
        type: 'password',
        name: 'password',
        completeName: 'password',
        placeholder: 'Password',
        label: 'Password',
    }
];

export const registerInputProps = [
    {
        id: 'floatingUsername',
        type: 'text',
        name: 'username',
        completeName: 'username',
        placeholder: 'username',
        label: 'Username',
    },
    {
        id: 'floatingEmail',
        type: 'email',
        name: 'email',
        completeName: 'email',
        placeholder: 'name@example.com',
        label: 'Email address',
    },
    {
        id: 'floatingPassword',
        type: 'password',
        name: 'password',
        completeName: 'password',
        placeholder: 'Password',
        label: 'Password',
    }
];

// image: '',
// birthYear: '',
// phone: '',
// field: '',

export const userFormInputProps = [
    {
        id: 'floatingImage',
        type: 'file',
        name: 'image',
        completeName: 'image',
        placeholder: 'Upload image',
        label: 'Upload image',
    },
    {
        id: 'floatingDate',
        type: 'date',
        name: 'birthDate',
        completeName: 'date',
        placeholder: 'Birth date',
        label: 'Birth date',
    },
    {
        id: 'floatingPhone',
        type: 'number',
        name: 'phone',
        completeName: 'phoneNumber',
        placeholder: 'Phone number',
        label: 'Phone number',
    },
    {
        id: 'floatingField',
        type: 'text',
        name: 'field',
        completeName: 'field',
        placeholder: 'Field',
        label: 'Field',
    },
];

export const userFormInputSocilasProps = [
    {
        id: 'telegram',
        name: 'telegram',
        label: 'Telegram',
        placeholder: 'Telegram',
    },
    {
        id: 'instagram',
        name: 'instagram',
        label: 'Instagram',
        placeholder: 'Instagram',
    },
    {
        id: 'linkedin',
        name: 'linkedin',
        label: 'Linkedin',
        placeholder: 'Linkedin',
    },
    {
        id: 'github',
        name: 'github',
        label: 'Github',
        placeholder: 'Github',
    },
];

export {default as Loader} from './loader';
export {default as Textarea} from './textarea';
export {default as ArticleForm} from './article-form';
export {default as UserForm} from './user-form';